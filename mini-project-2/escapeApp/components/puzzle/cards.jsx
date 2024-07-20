import { Card, CardContent, Grid, Typography } from "@mui/material";
import { CardStock } from "../../db/cardstock";
import './puzzle.css'
import React ,{ useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";

export default function Cards() {

    const [flipped, setFlipped] = useState(Array(CardStock.length).fill(false));
    const[correctCards, setCorrectCards] = useState(false);
    
    const solution = CardStock.map((card) => card.shouldFlip);
    
   

    useEffect(() => {
        if(solution === flipped) {
            alert( 'you win');
            setCorrectCards(true)
    }}, [flipped]);

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
        console.log(newFlipped)
        setFlipped(newFlipped);
    };


    const myCards = CardStock.map((card, index) =>(
        <Grid item xs={2} key={card.key}>
        <div className="flipCard" >
            <div className="flip-inner">
                <animated.div className="flip-front" style={{...flipStyle[index], backgroundColor:card.color}} onClick={() => handleClick(index)}>
                   <Typography variant="h2" sx={{ justifyContent: "center", alignItems: "center"}}>{card.front}</Typography>
                </animated.div>
                <animated.div style={{...backFlipStyle[index], backgroundColor:card.colorBack}} className="flip-back" onClick={() => handleClick(index)}>
                    <Typography variant="h2">{card.back}</Typography>
                </animated.div>
            </div>
        </div>
        </Grid>
    ))

    return myCards
}
