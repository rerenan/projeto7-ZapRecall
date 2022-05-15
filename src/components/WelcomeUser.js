import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png"

export default function WelcomeUser(){
    return(
        <div className="welcome-screen">
            <img src={logo}/>
            <h1>ZapRecall</h1>
            <Link to="/flashcards">Iniciar Recall!</Link>
        </div>
    )
}