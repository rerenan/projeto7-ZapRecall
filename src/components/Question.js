import setinha from "../assets/img/setinha.png"
export default function Question({text, SetTurned}){
    return(
        <>
        <span>{text}</span>
        <img src={setinha} alt="" onClick={()=> SetTurned("false")}/>
        </>
    )
}