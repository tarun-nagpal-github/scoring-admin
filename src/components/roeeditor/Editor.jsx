import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback
} from "react";
import classNames from "classnames";

const Editor = forwardRef((props, ref) => {
  const nullFunction = () => {};
  const textArea = useRef();
  const [overflow, setOverflow] = useState("hidden");
  const [removeEnter, setRemoveEnter] = useState(false);
  const {
    inputValue,
    emojisQuery,
    placeHolder,
    autoFocus,
    maxHeight,
    minHeight,
    textAreaClass,
    focusHandler = nullFunction,
    blurHandler = nullFunction,
    onChangeInput = nullFunction,
    mentionsQueryHandler = nullFunction,
    emojiQueryHandler = nullFunction,
    submitHandler = nullFunction
  } = props;

  const updateScroll = useCallback(() => {
    textArea.current.style.height = `${minHeight}px`;
    textArea.current.style.height = 0 + textArea.current.scrollHeight + "px";
    if (textArea.current.scrollHeight > maxHeight) {
      setOverflow("auto");
    }
  }, [maxHeight, minHeight]);

  const getSelection = useCallback(() => {
    const textarea = textArea.current;
    const { selectionStart, selectionEnd } = textarea;

    if (selectionStart !== selectionEnd) {
      return {
        start: selectionStart,
        end: selectionEnd
      };
    }

    const token = getCurrentToken();
    return {
      start: token.start,
      end: token.end
    };
  }, []);

  useEffect(() => {
    doFocus();
    updateScroll();
    fireBlur();
  }, [updateScroll]);

  useImperativeHandle(ref, () => ({
    toggleMark(mark) {
      toggleMark(mark);
    },
    insertText(text) {
      insertText(text);
    },
    insertEmoji(char) {
      insertEmoji(char);
    },
    insertMention(usename) {
      insertMention(usename);
    }
  }));

  const doFocus = () => {
    textArea.current.focus();
  };

  const doEdit = () => {
    doFocus();
    updateScroll();
    document.execCommand("insertText", false, "");
  };

  const fireBlur = () => {
    textArea.current.blur();
  };

  const resetTextArea = () => {
    textArea.current.style.height = `${minHeight}px`;
    setOverflow("hidden");
    doFocus();
  };

  const handleFocus = event => {
    focusHandler(event);
  };

  const handleBlur = event => {
    blurHandler(event);
  };

  const toggleMark = mark => {
    const textarea = textArea.current;
    const { value } = textarea;
    const { start, end } = getSelection();

    textarea.focus();
    textarea.setSelectionRange(start, end);

    // [mark] [start] [text] [end] [mark] => remove mark
    if (
      value.slice(start - mark.length, start) === mark &&
      value.slice(end, end + mark.length) === mark
    ) {
      textarea.setSelectionRange(start - mark.length, end + mark.length);
      document.execCommand("insertText", false, value.slice(start, end));
      textarea.setSelectionRange(start - mark.length, end - mark.length);
    }
    // [start] [mark] [text] [mark] [end] => remove mark
    else if (
      value.slice(start, start + mark.length) === mark &&
      value.slice(end - mark.length, end) === mark
    ) {
      document.execCommand(
        "insertText",
        false,
        value.slice(start + mark.length, end - mark.length)
      );
      textarea.setSelectionRange(start, end - mark.length * 2);
    }
    // [start] [text] [end] => add mark
    else {
      document.execCommand(
        "insertText",
        false,
        `${mark}${value.slice(start, end)}${mark}`
      );
      textarea.setSelectionRange(start, end + mark.length * 2);
    }
  };

  const handleInput = event => {
    onChangeInput(event.target.value);
    emitMentionsQuery();
    updateScroll();
  };

  const handleKeyDown = e => {
    if (
      e.keyCode === 13 &&
      !e.shiftKey &&
      getCurrentToken().value[0] !== "@" &&
      emojisQuery === null &&
      !removeEnter
    ) {
      e.preventDefault();
      submitHandler();
      resetTextArea();
    }
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 66) {
      toggleMark("*");
    }
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 73) {
      toggleMark("_");
    }
  };

  const emitMentionsQuery = () => {
    const token = getCurrentToken().value;
    mentionsQueryHandler(token[0] === "@" ? token : null);
    emojiQueryHandler(token[0] === ":" ? token : null);
  };

  const getCurrentToken = () => {
    const textarea = textArea.current;
    let start = textarea.selectionStart;
    let end = start;

    while (
      textarea.value[start - 1] !== undefined &&
      !textarea.value[start - 1].match(/\s/) &&
      start > 0
    ) {
      start--;
    }

    while (
      textarea.value[end] !== undefined &&
      !textarea.value[end].match(/\s/) &&
      end < textarea.value.length
    ) {
      end++;
    }

    const value = textarea.value.slice(start, end);

    return { start, end, value };
  };

  const insertText = input => {
    doFocus();
    document.execCommand("insertText", false, input);
  };

  const insertEmoji = emoji => {
    const textarea = textArea.current;
    setRemoveEnter(true);
    doEdit();
    const { start, end } = getSelection();
    textarea.setSelectionRange(start, end);
    document.execCommand("insertText", false, `${emoji}`);
    document.execCommand("insertText", false, ` `);
    setTimeout(() => {
      setRemoveEnter(false);
    }, 10);
  };

  const insertMention = username => {
    const textarea = textArea.current;
    setRemoveEnter(true);
    doEdit();
    const { start, end } = getSelection();
    textarea.setSelectionRange(start, end);
    document.execCommand("insertText", false, `@${username}`);
    document.execCommand("insertText", false, ` `);
    setTimeout(() => {
      setRemoveEnter(false);
    }, 10);
  };

  return (
    <div>
      <textarea
        className={classNames("roe-mark-down-editor", "fs-16", textAreaClass)}
        ref={textArea}
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onFocus={handleFocus}
        style={{
          overflow: overflow,
          minHeight: minHeight + "px",
          maxHeight: maxHeight + "px"
        }}
        autoFocus={autoFocus}
        placeholder={placeHolder}
      />
    </div>
  );
});

export default Editor;
