export default function({text}){
    return(
        <div className="resposta">
             <span>{text}</span>
            <div className="buttons">
            <button class="red">Não Lembrei</button>
            <button class="orange">Quase não lembrei</button>
            <button class="green">Zap!</button>
            </div>
        </div>
    )
}