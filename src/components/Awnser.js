export default function({text, addResult, SetTurned, SetClassCard}){
    function finalizeQuestion(option){
        addResult(option);
        SetTurned(false);
        SetClassCard(option);
    }
    
    return(
        <div className="resposta">
             <span>{text}</span>
            <div className="buttons">
            <button class="red"onClick={()=>finalizeQuestion("not-remember")}>Não Lembrei</button>
            <button class="orange"onClick={()=>finalizeQuestion("almost")}>Quase não lembrei</button>
            <button class="green" onClick={()=>finalizeQuestion("zap")}>Zap!</button>
            </div>
        </div>
    )
}