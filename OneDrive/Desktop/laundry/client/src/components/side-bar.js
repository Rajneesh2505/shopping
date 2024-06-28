import "./assets/css/side-bar.css"
import Home from "./assets/images/home.jpg"
import List from "./assets/images/list.png"
import More from "./assets/images/more.jpg"
import { useNavigate } from "react-router-dom"
export const SideBar=()=>{
    const navigate=useNavigate()
    return(
        <>
<div className="side-bar">
<img src={Home} className="Home-icon"/>
<span  onClick={()=>{navigate("/create-order")}}><img src={More} onClick={()=>{navigate("/create-order")}} className="more"/></span>
<img src={List} className="list"/>
</div>
        </>
    )
}