import { Card, CardContent, Grid, Typography } from "@mui/material";
import { CardStock } from "../../db/cardstock";
import './puzzle.css'
import React ,{ useState } from "react";
import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";

export default function Cards() {

    const [flipped, setFlipped] = useState(Array(CardStock.length).fill(false));
    

    const flipStyle = flipped.map((isFlipped) => 
    useSpring({
        from:{ opacity: 1 , transform: `perspective(600px) rotateY(0deg)`},
        to: isFlipped 
            ? { opacity: 0 , transform: `perspective(600px) rotateY(180deg)`} 
            : { opacity: 1 , transform: `perspective(600px) rotateY(0deg)`},
        config:{ mass: 5, tension: 500, friction: 80},
    }))

    const backFlipStyle = flipped.map((isFlipped) =>
    useSpring({
            from:{ visibility: 'hidden', transform: `perspective(600px) rotateY(0deg)`},
            to: isFlipped 
                ? { visibility: 'visible', transform: `perspective(600px) rotateY(1800deg)`} 
                : { visibility: 'hidden', transform: `perspective(600px) rotateY(0deg)` }, 
            config:{ mass: 5, tension: 500, friction: 80},
        })
    )



    const handleClick = (index) => {
        const newFlipped = [...flipped];
         newFlipped[index] = !newFlipped[index];
        
        setFlipped(newFlipped);
    };


    const myCards = CardStock.map((card, index) =>(
        <Grid item xs={2} key={card.key}>
        <Card className="flipCard" >
            <div className="flip-inner">
                <animated.div className="flip-front" style={{...flipStyle[index], backgroundColor:card.color}} onClick={() => handleClick(index)}>
                   <Typography variant="h2">{card.id}</Typography>
                </animated.div>
                <animated.div style={{...backFlipStyle[index]}} className="flip-back" onClick={() => handleClick(index)}>
                    <p>back</p>
                </animated.div>
            </div>
        </Card>
        </Grid>
    ))

    return myCards
}
