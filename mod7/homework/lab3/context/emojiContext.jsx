import React, { useContext, useState  } from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = (props) => {
    const [currentEmoji, setEmoji] = useState('\u{1f603}');

    const handleEmojiUpdate = (emoji) => {
        setEmoji(emoji);
    }

return(
    <EmojiContext.Provider value={{currentEmoji, handleEmojiUpdate}}>
        {props.children}
    </EmojiContext.Provider>
);
}

export const useEmojiContext = () => {
    return useContext(EmojiContext);
}