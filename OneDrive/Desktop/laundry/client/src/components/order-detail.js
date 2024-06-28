import Navbar from "./Navbar"
import { Footer } from "./footer"
import { SideBar } from "./side-bar"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import { addId } from "./laundry-slice/laundry-order"
import {useDispatch} from "react-redux"
import View from "./assets/images/eye.png"
import "../components/assets/css/order-detail.css"
export const OrderDetail=()=>{
    const dispatch=useDispatch()
    let status = ["Picked", "Washed", "Ironed", "Delivered"]
    const [orders,setOrders]=useState([])
    const [storeDetail,setStoreDetail]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/orders/getorder").then(data=>{
            return data.json()
        }).then(data=>{
            setOrders(data)
        })

        fetch("http://localhost:3000/store").then(store=>{
            return store.json()
        }).then(storeData=>{
       setStoreDetail([...storeData])
        })
            },[])
    const navigate=useNavigate()
    let totalPrice=(orders.length && orders.reduce((a,b)=>{
        return a+(b.price*b.quantity)
    },0))
    let totalItem=(orders.length && orders.reduce((a,b)=>{
        return a+b.quantity
    },0))
    
    
    return (
        <>
     <div className="detail-container">
        <Navbar/>
        <div className="order-chart-container">
<SideBar/>
<div>
<div className="order-chart">
    <div>Order Id</div>
    <div>Order Date & Time</div>
    <div>Store Location</div>
    <div>City</div>
    <div>Store Phone</div>
    <div>Total Items</div>
    <div>Price</div>
    <div>Status</div>
    <div>{"    "}</div>
    <div>View</div>
    </div>
<div>
{storeDetail && storeDetail.map((item,i)=>{
    return (
        <>
        <div className="Orders-info">
        <div>{item.product_id}</div>
<div>{(item.date.slice(0,21))}</div>
<div>Delhi</div>
<div >{item && item.location}</div>
<div>{item && item.phone}</div>
<div>{totalItem}</div>
<div>{totalPrice}</div>
<div>{status[Math.floor((Math.random()/4)*10)]}</div>
<div style={{color:"red"}}><b>{item.status}</b></div>
<div onClick={()=>{
    dispatch(addId(item.product_id))
    navigate("/order-cancel")}}>
    <img src={View} height={"20px"} width={"20px"} style={{marginRight:'8px'}}/>
</div>
        </div>
        <hr style={{width:"1240px",height:"0px",marginLeft:"26px"}}></hr>
        </>
    )
})}
</div>
</div>
</div>
        <Footer/>
     </div>
        </>
    )
}