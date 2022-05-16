import React from 'react'
import TopBar from "./TopBar"
import Card from "./Card"
import FinalMessage from './FinalMessage'
import wrong from "../assets/img/wrong.png"
import interrogation from "../assets/img/interrogation.png"
import check from "../assets/img/check.png"

export default function FlashCards(){
        const deck = [
            {question: " O que é JSX? ", awnser:"Uma extensão de linguagem do JavaScript"},
            {question: "O React é __", awnser:"Uma biblioteca JavaScript para construção de interfaces"},
            {question: "Componentes devem iniciar com __", awnser:"letra maiúscula"},
            {question: " Podemos colocar __ dentro do JSX", awnser:"expressões"},
            {question: "O ReactDOM nos ajuda __sjdoishuidhuisahduisahduisahuidhquwieiqfdsufgudsygfuhydguhyfgbuhdsybfuhysutyfgduywgryewruyihgyusdgfurygsuyrgyufdsuygf", awnser:"interagindo com a DOM para colocar componentes React na mesma"},
            {question: "Usamos o npm para __", awnser:"gerenciar os pacotes necessários e suas dependências"},
            {question: "Usamos props para __", awnser:"passar diferentes informações para componentes "},
            {question: "Usamos estado (state) para __", awnser:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
        ]
        function comparador() { 
            return Math.random() - 0.5; 
        }
        const[results,SetResults] = React.useState([]);
        if(results.length === 0){
            deck.sort(comparador);
        } 
        function addResult(result){
            SetResults([...results, result])
        }
        function generateIcons(name){
            if(name ==="not-remember"){
                return wrong
            }
            if(name === "almost"){
                return interrogation
            }
            return check
        }
        function verifyResults(results){
            if(results.indexOf("not-remember") === -1){
                return "congrats"
            }
            return "failed"
        }
        console.log(results);
    return(
        <div className="flashcards-screen">
            <TopBar/>
            <div className="flashcards">
                {deck.map((card, index)=><Card question={card.question} awnser={card.awnser} index={index+1} addResult={addResult} generateIcons={generateIcons}/> )}
            </div>
            <div className="footbar">
                {results.length===deck.length? <FinalMessage type={verifyResults(results)}/>: ""}
                <span>{results.length}/{deck.length} CONCUÍDOS</span>
                <div className="icons">
                {results.map((result)=><img src={generateIcons(result)}/>)}
                </div>
            </div>
        </div>        
    )
}