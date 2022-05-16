import TopBar from "./TopBar"
import Card from "./Card"
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
        deck.sort(comparador); 
         
    return(
        <div className="flashcards-screen">
            <TopBar/>
            <div className="flashcards">
                {deck.map((card, index)=><Card question={card.question} awnser={card.awnser} index={index+1}/> )}
            </div>
            <div className="footbar">
                0/4 CONCUÍDOS
            </div>
        </div>        
    )
}