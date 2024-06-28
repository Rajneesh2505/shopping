import Navbar from "./Navbar"
import "./assets/css/create-page.css"
import Towel from "./assets/images/towel.jpg"
import WashingMachine from "./assets/images/washing-machine.png"
import Iron from "./assets/images/ironing.jpg"
import Bleach from "./assets/images/bleach.jpg"
import { useNavigate } from "react-router-dom"
import Shirts from "./assets/images/shirt.jpg"
import TShirts from "./assets/images/tshirt.jpg"
import Trousers from "./assets/images/trouser.jpg"
import Jeans from "./assets/images/jeans.jpg"
import Boxers from "./assets/images/boxers.jpg"
import Joggers from "./assets/images/joggers.jpg"
import Others from "./assets/images/others.jpg"
import WashingAdded from "./assets/images/washing-machine-added.jpg"
import BleachAdded from "./assets/images/bleach-added.jpg"
import IronAdded from "./assets/images/ironing-added.jpg"
import { SideBar } from "./side-bar"
import { Fragment, useState,useRef } from "react"
import { Footer } from "./footer"
import { useDispatch, useSelector } from "react-redux"
import{addValue,addName,addWashType,confirmOrder} from "./laundry-slice/laundry-order"
export const Create=()=>{
    let item = ["Shirts", "TShirts", "Trousers", "Jeans", "Boxers", "Joggers", "Others"]
    let images=[Shirts, TShirts, Trousers, Jeans, Boxers, Joggers, Others]
    const [washingState,setWashingState]=useState(false)
    const [ironState,setIronState]=useState(false)
    const [bleechingState,setbleechingState]=useState(false)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const obj =useSelector(state=>state.data.products)
    return (
        <div className="createorderdiv">
       <div className="container">
<Navbar/>
<div style={{display:"flex"}}>
<SideBar/>
<div className="order-detail">
    <div><b>Create Order</b></div>
<div className="order-description">
    <div>Product Types</div>
    <div>Qunatity</div>
    <div>Wash Type</div>
    <div></div>
</div>
{item.map((product,i)=>{
    return(
        <Fragment key={i}>
        <div className="order-items">
        <div style={{display:"flex",alignItems:"center"}}>
            <img src={images[i]} className="clothe-img" alt={`${product} image`}/>
            <span style={{color: " #1D2022",marginLeft:"10px",marginTop:"3px"}}>{product}</span>
        </div>
        <div className="qunatity-box">
            <input type="text" className="input-box"  onChange={(e)=>{
                                        dispatch(addName(product));
                                        dispatch(addValue(e.target.value))
                                    }}/>
        </div>
        <div className="wash-type">
            <img src={WashingMachine} alt="Washing," id="washing" onClick={(e)=>{
                 setWashingState(!washingState)
                if(washingState){
                    document.querySelectorAll(`#washing`)[i].src=WashingAdded
                }else{
                    document.querySelectorAll(`#washing`)[i].src=WashingMachine 
                }
                                            
                dispatch(addWashType([e.target.alt,20]))
                                        }}/>
            <img src={Iron} alt="Ironing," id="iron" onClick={(e)=>{
                 setIronState(!ironState)
                if(ironState){
                    document.querySelectorAll(`#iron`)[i].src=IronAdded
                }else{
                    document.querySelectorAll(`#iron`)[i].src=Iron 
                }                       
                dispatch(addWashType([e.target.alt,10]))
                                        }}/>
            <img src={Towel} alt="Towel," onClick={(e)=>{
                                             dispatch(addWashType([e.target.alt,30]))
                                        }}/>
            <img src={Bleach} alt="Chemical wash," id="bleach" onClick={(e)=>{
                setbleechingState(!bleechingState)
                if(bleechingState){
                    document.querySelectorAll(`#bleach`)[i].src=BleachAdded
                }else{
                    document.querySelectorAll(`#bleach`)[i].src=Bleach 
                }
                                            dispatch(addWashType([e.target.alt,40]))
                                        }}/>
        </div>
        {/* <div id={product}>-</div> */}
        <div><button className="confirm-button" onClick={()=>{dispatch(confirmOrder())}}>Confirm</button></div>
        </div>
        <hr></hr>
        </Fragment>
    )
})}
<div className="proceed-button">
    <button><b>Cancel</b></button>
    <button style={{backgroundColor:"#5861AE"}} onClick={()=>{navigate("/order-preview")}}><b>Proceed</b></button>
</div>
</div>

</div>
  
</div>
<Footer/> 
        
        </div>
    )
}
