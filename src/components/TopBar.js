import logo from "../assets/img/logo.png"
export default function TopBar(){
    return (
        <div className="topbar">
                <img src={logo} alt=""/>
                <h1>ZapRecall</h1>
            </div>
    )
}