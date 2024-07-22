import { CardStock } from "../../db/cardstock";
import './puzzle.css';
import React ,{  useState } from "react";
import SingleCard from "./singleCard";
import { Grid } from "@mui/material";
import{ useRobotContext} from '../../context/robotContext'



export default function Cards() {
    
 const [ cards, setCards] = useState(CardStock);
 const mappedCards = CardStock.map((card) => ({id:card.id, value: card.front, answer: card.answer}));
 const [ currentCards, setCurrentCards] = useState(mappedCards);
 const [toggle, setToggle] = useState(false);
 
const {robotBlurb, handleUpdateRobot} = useRobotContext();


 const  onClick = ( id , value ) => {
    let newCards = currentCards.map(card => card.id === id ? {...card, value: value}: card )
    setCurrentCards(newCards);
    let isCorrect = currentCards.every((card) => card.value === card.answer )
    console.log(isCorrect)
    isCorrect ? handleUpdateRobot( {blurb: "Great Job! You Win"}) : null ;
        

 }

console.log(currentCards);



return(

    <Grid container spacing={2} justifyContent='space-around' alignItems='center' >
        {cards.map(card => (
               <SingleCard {...card} onClick={onClick}  />
        ))}
    </Grid>
        
)
}
