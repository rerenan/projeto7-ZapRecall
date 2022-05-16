import React from 'react';

import Face from './Face';
import Question from './Question';
import Awnser from './Awnser';
import playicon from "../assets/img/play.png"
import wrong from "../assets/img/wrong.png"
import interrogation from "../assets/img/interrogation.png"
import check from "../assets/img/check.png"

export default function Card({question, awnser, index, addResult, generateIcons}){
    const[turned, SetTurned] = React.useState(false);
    const[classCard, SetClassCard] = React.useState("");
    return(
        <div className="card">
            <div className={turned? "hidden":"front"}>
                <span className={classCard}>Pergunta {index}</span> 
                <img className={classCard} src={classCard===""? playicon: generateIcons(classCard)} alt="" onClick={() => classCard === ""? SetTurned(true): ""}/>  
            </div>
            <Face type={!turned? "hidden":"front back"} >
                {turned === true? <Question text={question} SetTurned={SetTurned}/>:<Awnser text={awnser} addResult={addResult} SetTurned={SetTurned} SetClassCard={SetClassCard} />}
            </Face>

            
        </div>
    )
}