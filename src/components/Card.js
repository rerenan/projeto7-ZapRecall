import React from 'react';

import Face from './Face';
import Question from './Question';
import Awnser from './Awnser';
import playicon from "../assets/img/play.png"

export default function Card({question, awnser, index}){
    const[turned, SetTurned] = React.useState(false);
    
    return(
        <div className="card">
            <div className={turned? "hidden":"front"}>
                <span>Pergunta {index}</span> 
                <img src={playicon} alt="" onClick={()=> SetTurned(true)}/>  
            </div>
            <Face type={!turned? "hidden":"front back"} >
                {turned === true? <Question text={question} SetTurned={SetTurned}/>:<Awnser text={awnser} />}
            </Face>

            
        </div>
    )
}