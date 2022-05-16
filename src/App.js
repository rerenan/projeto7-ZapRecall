import {BrowserRouter, Routes, Route} from "react-router-dom"
import WelcomeUser from "./components/WelcomeUser"
import FlashCardsScreen from "./components/FlashCardsScreen"
export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomeUser/>}/>
                <Route path="/flashcards" element={<FlashCardsScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}