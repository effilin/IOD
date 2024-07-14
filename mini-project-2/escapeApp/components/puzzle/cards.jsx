import { Card, CardContent, Grid, Typography } from "@mui/material";
import { CardStock } from "../../db/cardstock";
import './puzzle.css'
import React ,{ useState } from "react";
import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";

export default function Cards() {

    const [flipped, setFlipped] = useState(false)

    const flip = useSpring({
        from:{ opacity: 1 , transform: `perspective(600px) rotateX(0deg)`},
        to: flipped 
            ? { opacity: 0 , transform: `perspective(600px) rotateX(180deg)`} 
            : { opacity: 1 , transform: `perspective(600px) rotateX(0deg)`},
        config:{ mass: 5, tension: 500, friction: 80},
    })

    const handleClick = () => {
        setFlipped(!flipped);
    };


    const myCards = CardStock.map(card =>(
        <Grid item xs={2} >
        <Card key={card.key} className="flipCard" >
            <CardContent className="flip-inner">
                <animated.div className="flip-Front" style={{...flip, backgroundColor:card.color}} onClick={handleClick}>
                   <Typography variant="h2">{card.id}</Typography>
                   <button>Flip me</button>
                </animated.div>
                <animated.div style={{...flip}} className="flip-back">
                    <p>back</p>
                </animated.div>
            </CardContent>
        </Card>
        </Grid>
    ))

    return myCards
}
