import React, {
    useState,
    useEffect,
    useMemo,
    Fragment,
    useRef,
    useCallback
} from "react";
import classNames from "classnames";

const MentionPicker = props => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const mentionMenu = useRef();
    const prevRef = useRef();

    useEffect(() => {
        prevRef.current = index;
    });

    const { query, users, insertMentionHandler } = props;

    useMemo(() => {
        if (query !== null) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [query]);

    const filteredUsers = useMemo(() => {
        if (users && users.length) {
            const isQuery = query ? query.slice(1) : "";
            return isQuery !== ""
                ? users.filter(
                      user =>
                          user.username
                              .toLowerCase()
                              .includes(isQuery.toLowerCase()) ||
                          user.first
                              .toLowerCase()
                              .includes(isQuery.toLowerCase()) ||
                          user.last
                              .toLowerCase()
                              .includes(isQuery.toLowerCase())
                  )
                : users;
        }
        return null;
    }, [query, users]);

    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
        }
        if (event.key === "ArrowUp") {
            event.preventDefault();
            const newIndex = Math.max(prevRef.current - 1, 0);
            setIndex(newIndex);
            handleScroll(newIndex, "up");
        }
        if (event.key === "ArrowDown") {
            event.preventDefault();
            const newIndex = Math.min(
                prevRef.current + 1,
                filteredUsers.length - 1
            );
            setIndex(newIndex);
            handleScroll(newIndex, "down");
        }
        if (event.key === "Enter") {
            event.preventDefault();
            if (filteredUsers && filteredUsers.length) {
                insertMentionHandler(filteredUsers[prevRef.current].username);
            }
        }
      }, [filteredUsers, insertMentionHandler]);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("keydown", handleKeyDown);
            setIndex(0);
        };
    }, [handleKeyDown]);

    const handleScroll = (val, action) => {
        const ele = mentionMenu.current["children"][0]["children"][val];
        console.log(mentionMenu);
        if (ele) {
            let scroll;
            if (action === "down") {
                scroll = mentionMenu.current.scrollTop + ele.offsetHeight;
            } else {
                scroll = mentionMenu.current.scrollTop - ele.offsetHeight;
            }
            if (scroll > 0) {
                mentionMenu.current.scrollTop = scroll;
            } else {
                mentionMenu.current.scrollTop = 0;
            }
        }
    };

    const handleClick = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            {open && (
                <div ref={mentionMenu} className="mention-picker">
                    {filteredUsers && filteredUsers.length ? (
                        <div className="user-list">
                            {filteredUsers.map((user, i) => {
                                return (
                                    <div
                                        key={i}
                                        onMouseOver={() => setIndex(i)}
                                        className={classNames(
                                            "flex-x",
                                            "pa-10",
                                            "cursor-pointer",
                                            "mb-6",
                                            i === index && "active"
                                        )}
                                        onClick={() =>
                                            insertMentionHandler(user.username)
                                        }
                                    >
                                        <div>
                                            <img src={user.pics} alt="pics" />
                                        </div>
                                        <div>
                                            <div className="fs-14 demi-bold-text">
                                                {`${user.first} ${user.last}`}
                                            </div>
                                            <div className="fs-12 medium-text">
                                                {user.username}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="fs-16 medium-text">
                            No users found..
                        </div>
                    )}
                </div>
            )}
        </Fragment>
    );
};

export default MentionPicker;
