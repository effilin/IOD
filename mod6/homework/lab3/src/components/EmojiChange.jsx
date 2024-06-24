import { useState } from "react";


function EmojiChanger () {
    const[emoji, setEmoji] = useState('\u{1f603}');

    return (
        <div className="emojiChanger componentBox" style={{border:'1px solid green', borderRadius:'5px',padding:"5vw"}}>
            <div>feeling...{emoji}</div>
            <button style={{border:'1px solid blue', backgroundColor:"blue", color:'white', padding:'5vw'}} onClick={() => setEmoji('\u{1f611}')}> Tired</button>
            <button style={{border:'1px solid pink', backgroundColor:"pink", padding:'5vw'}} onClick={() => setEmoji('\u{1f60e}')}>Silly</button>
        </div>
    )
};

export default EmojiChanger;