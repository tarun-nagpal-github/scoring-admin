import React, { useState, useMemo, useRef, Fragment, useEffect } from "react";
import classNames from "classnames";

const EmojiPicker = props => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const emojiMenu = useRef();
    //   const prevRef = useRef();

    const { query, emojisList, insertEmojiHandler } = props;

    //   useEffect(() => {
    //     prevRef.current = index;
    //   });

    //   const handleScroll = (val, action) => {
    //     const ele = emojiMenu.current['children'][0]['children'][val];
    //     console.log('emojiMenu', emojiMenu)
    //     if(ele) {
    //         let scroll = ele.offsetTop - 245
    //         if (scroll > 0) {
    //           emojiMenu.current.scrollTop = scroll;
    //         } else {
    //           emojiMenu.current.scrollTop = 0;
    //         }
    //     }
    //   };

    //   const handleKeyDown = event => {
    //     console.log("event", event);
    //     if (event.key === "Escape") {
    //       event.preventDefault();
    //       setOpen(false);
    //     }
    //     if (event.key === "ArrowLeft") {
    //       event.preventDefault();
    //       const newIndex = Math.max(prevRef.current - 1, 0)
    //       setIndex(newIndex);
    //       handleScroll(newIndex)
    //     }
    //     if (event.key === "ArrowRight") {
    //       event.preventDefault();
    //       const newIndex = Math.min(prevRef.current + 1, getEmoji.length - 1)
    //       setIndex(newIndex);
    //       handleScroll(newIndex)
    //     }
    //     if (event.key === "ArrowUp") {
    //       event.preventDefault();
    //       const newIndex = Math.max(prevRef.current - 14, 0)
    //       setIndex(newIndex);
    //       handleScroll(newIndex, 'up')
    //       // Arrow Up logic
    //     }
    //     if (event.key === "ArrowDown") {
    //       event.preventDefault();
    //       const newIndex = Math.min(prevRef.current + 14, getEmoji.length - 1)
    //       setIndex(newIndex);
    //       handleScroll(newIndex, 'down')
    //       // Arrow Down logic
    //     }
    //     if (event.key === "Enter") {
    //       // Logic for Enter Click
    //       event.preventDefault();
    //       if (getEmoji[prevRef.current]) {
    //         insertEmojiHandler(getEmoji[prevRef.current].char);
    //       }
    //     }
    //   };

    const handleClick = () => {
        setOpen(false);
    };

    const getEmoji = useMemo(() => {
        const isQuery = query ? query.slice(1) : "";
        return isQuery !== ""
            ? emojisList.filter(emoji =>
                  emoji.name.toLowerCase().includes(isQuery.toLowerCase())
              )
            : emojisList;
    }, [query, emojisList]);

    useMemo(() => {
        if (query !== null) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [query]);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        // document.addEventListener("keydown", handleKeyDown);
        return () => {
            console.log("remove");
            document.removeEventListener("click", handleClick);
            //   document.removeEventListener("keydown", handleKeyDown);
            setIndex(0);
        };
    }, []);

    return (
        <Fragment>
            {open && (
                <div className="emojji-picker" ref={emojiMenu}>
                    <div className="emoji-list">
                        {getEmoji.map((emoji, i) => {
                            return (
                                <div
                                    key={i}
                                    onMouseOver={() => setIndex(i)}
                                    className={classNames(
                                        "pa-10",
                                        "mb-6",
                                        "text-center",
                                        i === index && "active"
                                    )}
                                    onClick={() =>
                                        insertEmojiHandler(emoji.char)
                                    }
                                >
                                    {emoji.char}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default EmojiPicker;
