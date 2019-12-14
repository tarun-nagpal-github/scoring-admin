import React, { useState, useMemo, useRef } from "react";
import Editor from "./Editor";
import MentionsPicker from "./MentionPicker";
import EmojiPicker from "./EmojiPicker";
import emojiData from "./emoji.json";
import RoyTooltip from "components/common/RoyTooltip";

const RoeMarkupEditor = props => {
  const nullFuction = () => {};
  const [emojisQuery, setEmojisQuery] = useState(null);
  const [mentionsQuery, setMentionsQuery] = useState(null);
  const childRef = useRef();

  const {
    inputValue,
    mentions = [],
    onChangeInput,
    minHeight,
    maxHeight,
    placeHolder,
    focusHandler = nullFuction,
    blurHandler = nullFuction,
    submitHandler = nullFuction,
    isOptions = true,
    className,
    textAreaClass,
    autoFocus
  } = props;

  const emojiDetail = useMemo(() => {
    let result = [];
    for (var i in emojiData)
      result.push({
        name: i,
        char: emojiData[i]
      });
    return result;
  }, []);

  const mentionsQueryHandler = e => {
    setMentionsQuery(e);
  };

  const emojiQueryHandler = e => {
    setEmojisQuery(e);
  };

  const toggleBold = () => {
    childRef.current.toggleMark("*");
  };

  const toggleItalic = () => {
    childRef.current.toggleMark("_");
  };
  const insertText = text => {
    childRef.current.insertText(text);
  };
  const insertEmojiHandler = char => {
    childRef.current.insertEmoji(char);
  };
  const insertMentionHandler = username => {
    childRef.current.insertMention(username);
    setMentionsQuery(null);
  };

  return (
    <div className={className}>
      {isOptions && (
        <div>
          <RoyTooltip id={`bold`} title={"Bold"} placement="bottom">
            <button
              id={`bold`}
              onClick={toggleBold}
              className="c-btn c-info mr-10 fs-15 demi-bold-text"
            >
              B
            </button>
          </RoyTooltip>
          <RoyTooltip id={`italic`} title={"Italic"} placement="bottom">
            <button
              id={`italic`}
              onClick={toggleItalic}
              className="c-btn c-info mr-10 fs-15 demi-bold-text"
            >
              I
            </button>
          </RoyTooltip>
          <RoyTooltip id={`mention`} title={"Mention User"} placement="bottom">
            <button
              id={`mention`}
              onClick={() => insertText("@")}
              className="c-btn c-info mr-10 fs-15 demi-bold-text"
            >
              @mention
            </button>
          </RoyTooltip>
          <RoyTooltip id={`emoji`} title={"Add Emoji"} placement="bottom">
            <button
              id={`emoji`}
              onClick={() => insertText(":")}
              className="c-btn c-info"
            >
              <i className="far fa-laugh fs-15"></i>
            </button>
          </RoyTooltip>
        </div>
      )}
      <Editor
        ref={childRef}
        textAreaClass={textAreaClass}
        autoFocus={autoFocus}
        inputValue={inputValue}
        onChangeInput={onChangeInput}
        minHeight={minHeight}
        maxHeight={maxHeight}
        placeHolder={placeHolder}
        emojisQuery={emojisQuery}
        mentionsQueryHandler={mentionsQueryHandler}
        emojiQueryHandler={emojiQueryHandler}
        focusHandler={focusHandler}
        blurHandler={blurHandler}
        submitHandler={submitHandler}
      />
      {mentionsQuery && (
        <MentionsPicker
          query={mentionsQuery}
          users={mentions}
          insertMentionHandler={insertMentionHandler}
        />
      )}
      {emojisQuery && (
        <EmojiPicker
          query={emojisQuery}
          emojisList={emojiDetail}
          insertEmojiHandler={insertEmojiHandler}
        />
      )}
    </div>
  );
};

export default RoeMarkupEditor;
