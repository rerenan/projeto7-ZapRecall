import {BrowserRouter, Routes, Route} from "react-router-dom"
import WelcomeUser from "./components/WelcomeUser"
import FlashCards from "./components/FlashCards"
export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomeUser/>}/>
                <Route path="/flashcards" element={<FlashCards/>}/>
            </Routes>
        </BrowserRouter>
    )
}