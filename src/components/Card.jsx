import React, { useState } from "react";
import './Card.css'


function Card ({question, answer, difficulty, img, imgWidth, imgHeight}) {
    const [showAnswer, setShowAnswer] = useState(false);

    const difficultyClass = difficulty;

    return(
        <div className={`CardDiv ${difficultyClass}`} onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? <h1>{answer}</h1>: 
            <>
            <h1>{question}</h1> 
            <img src={img} alt="Card Answer Image" style={{width: imgWidth, height: imgHeight}}/>
            </>
            }
        </div>
    );

}
export default Card;