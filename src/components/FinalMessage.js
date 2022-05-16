import party from "../assets/img/party.png"
import sad from "../assets/img/sad.png"

export default function FinalMessage({type}){
    return (
        <div className="final-message">
        {type === "congrats"?<>
            <div className="title-message">
            <img src={party}/>
            <span>Parabéns!</span>
            </div>
            Você não esqueceu de nenhum flashcard!
            </>
            :
            <>
            <div className="title-message">
            <img src={sad}/>
            <span>Putz...</span>
            </div>
            Ainda faltam alguns...
            Mas não desanime!
            </>
            }
        </div> 
    )
}