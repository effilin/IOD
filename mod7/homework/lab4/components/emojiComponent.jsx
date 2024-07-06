import { useState } from "react";
import Button from '@mui/material/Button';


function EmojiChanger () {
    const[emoji, setEmoji] = useState('\u{1f603}');

    return (
        <div className="emojiChanger componentBox" style={{border:'1px solid green', borderRadius:'5px',padding:"5vw"}}>
            <div>feeling...{emoji}</div>
            <Button variant='outlined' onClick={() => setEmoji('\u{1f611}')}> Tired</Button>
            <Button variant='contained' onClick={() => setEmoji('\u{1f60e}')}>Silly</Button>
        </div>
    )
};

export default EmojiChanger;