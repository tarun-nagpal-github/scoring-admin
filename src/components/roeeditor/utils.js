import emojiRegexText from "emoji-regex";
import emojis from "./emoji.json";
const XRegExp = require("xregexp");
const emojiRegex = emojiRegexText();

function parse(input) {
    const lines = input.trim().split("\n");

    return lines.map(line => {
        const match = line.trim().match(/^-\s*(.*)/);

        if (match !== null) {
            return {
                type: "bullet",
                children: parseInline(match[1])
            };
        }

        return {
            type: "paragraph",
            children: parseInline(line)
        };
    });
}

function parseInline(input) {
    // empty string
    if (input === "") return [];
    const regex = XRegExp(
        `
      ^
      (?<prefix>.*?\\s)??
      (?: 
        (?<bold>\\*.*?\\*)            | 
        (?<italic>_.*?_)              |
        (?<mention>@[a-zA-Z0-9-.]+)   |
        (?<link>https?:\\/\\/[^\\s]*)   
      )
      (?<suffix>\\s.*)?
      $
    `,
        "x"
    );

    const match = XRegExp.exec(input, regex);

    // simple text
    if (match === null) return [input];

    // const prefix = input.slice(0, match.index);
    // const suffix = input.slice(match.index + match[0].length);

    let node;

    // bold
    if (match.bold) {
        node = {
            type: "bold",
            children: parseInline(match.bold.slice(1, -1))
        };
    }
    // italic
    else if (match.italic) {
        node = {
            type: "italic",
            children: parseInline(match.italic.slice(1, -1))
        };
    }
    // mention
    else if (match.mention) {
        node = {
            type: "mention",
            username: match.mention.slice(1)
        };
    }
    // link
    else if (match.link) {
        node = {
            type: "link",
            href: match.link
        };
    }

    const nodes = [node];

    if (match.prefix !== "") nodes.unshift(match.prefix);
    if (match.suffix !== "") nodes.push(...parseInline(match.suffix));

    return nodes;
}

function render(nodes) {
    return nodes.map(renderNode).join("");
}

function renderNode(node) {
    if (typeof node === "string") {
        // NSAttributedString(string: node)
        return node;
    }

    // block

    if (node && node.type === "paragraph") {
        return `<p>${render(node.children)}</p>`;
    }

    if (node && node.type === "bullet") {
        return `<p class="bullet"><span>${render(node.children)}</span></p>`;
    }

    // inline

    if (node && node.type === "bold") {
        // bold
        return `<strong>${render(node.children)}</strong>`;
    }

    if (node && node.type === "italic") {
        return `<em>${render(node.children)}</em>`;
    }

    if (node && node.type === "mention") {
        // return `<a href="mention://${node.username}">@${node.username}</a>`;
        return `<span data-id=${node.username} class="mention">${node.username}</span>`;
    }

    if (node && node.type === "link") {
        // return `${node.href}`;
        return `<a target="_blank" href="${node.href}">${node.href}</a>`;
    }
}

export function emojiShortCodeParsing(input) {
    return input.replace(/:.*?:/g, match => {
        const shortcode = match.slice(1, -1);
        return emojis[shortcode]
            ? `<span class="editor-emoji">${emojis[shortcode]}</span>`
            : match;
    });
}

export function emojiParsing(input) {
    return input.replace(emojiRegex, `<span class="editor-emoji">$&</span>`);
}

export function compile(input) {
    if (input) {
        return render(
            parse(
                emojiShortCodeParsing(
                    emojiParsing(
                        input.replace("<", "&lt;").replace("</", "&lt;/")
                    )
                )
            )
        );
    }
    return `<span></span>`;
}
