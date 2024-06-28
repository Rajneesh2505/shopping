import "./assets/css/order.css"
import { useState,useEffect, } from "react"

import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
let id=0
export const OrderPreview=()=>{
    const products=useSelector(state=>state.data.products)
    const [store,setStore]=useState({location:"",storeaddress:"",phone:"",customerAddress:""})
    const [flag,setFlag]=useState(false)
    const [address,setAddress]=useState([])
    console.log("address is",address)
    const pickUpPrice=90
    const navigate=useNavigate()
   const storeAddress={
    "Vasant kunj":["No. 9 Kishangarh Vasant Kunj, Delhi","147896325"],
    "Khan market":["Shop Number 3A Khan Market, Delhi","159874632"],
    "Mayur vihar":["Chilla Village Mayur Vihar, Delhi","123654789"]
   }

    const total=products.reduce((a,b)=>{
return a+(b.price*b.quantity)
    },0)
    console.log(products)
    const handleOrder=()=>{
        if(products.length){
            console.log("id for order is",id)
                products.forEach(product=>{
                    fetch("http://localhost:3000/orders/order",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({order_id:id,...product})
            }).then(data=>{
                if(data.ok){
                    navigate("/order-place")
                }
            }).catch(err=>{
                console.log("err is",err)
            })
                })
            
            fetch("http://localhost:3000/store-address",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({product_id:id,...store})
            }).then(data=>{
                
                    navigate("/order-place")
            }).catch(err=>{
                console.log("err is",err)
            })
            id++
        }
    }
    return (
        <>
        <div className="order-container">
<div className="order-header">
    <span>Summary</span>
    <span onClick={()=>{navigate("/create-order")}}>X</span>
</div>
<div className="store-detail">
   <div>
    <span style={{opacity:".3"}}><b>Store Location</b></span>
    <select name="storeAddress" onChange={(e)=>{
        setStore(prev=>{return {
            ...prev,
            location:e.target.value,
            storeaddress:storeAddress[e.target.value][0],
            phone:storeAddress[e.target.value][1]
        }})
    }}>
        <option value=""></option>
        <option value="Vasant kunj">Vasant kunj</option>
        <option value="Khan market">Khan market</option>
        <option value="Mayur vihar">Mayur vihar</option>
    </select>
   </div>
    <div>
        <div>Store Address :</div>
       {store.location && <div>{storeAddress[store.location][0]}</div>}
    </div>
    <div>
    <div>Phone</div>
    {store.location && <div>{storeAddress[store.location][1]}</div>}
    </div>
</div>
<div className="Order-Detail">
    <span>Order detail</span>
    {
        products.map(Item=>{
            return (
                <>
                <div className="show-orders">
                <div>{Item.ProductName}</div>
                <div>{Item.washtype}</div>
                <div>{`${Item.quantity}x${Item.price}=`}</div>
                <div>{Item.price*Item.quantity}</div>
                </div>
                <hr style={{width:"800px",marginLeft:"5%"}}></hr>
                </>
            )
        })
    }
<div className="sub-total"><span>Sub Total:</span><span>{total}</span></div>
<hr className="last-hr"></hr>
<div className="pickup-charge"><span>Pickup Charges:</span><span>{pickUpPrice}</span></div>

</div>
<div className="order-header total">
<span>Total:</span>
<span className="total-amt">Rs {total+pickUpPrice}</span>
</div>
<div className="address">
    <span>Address</span><br></br>
    <input type="text" className={flag?"show-input":"hide-input"}  onBlur={(e)=>{setAddress(prev=>{
        return [...prev,e.target.value]
    })}}
    />
    {!flag && address.map(address=>{
        return (
            <>
            <div>
            <div className={flag?"hide-input":"show-input"} onClick={()=>{setStore(prev=>{
                return {...prev,customerAddress:address}
            })}}>{address}</div>
            </div>
            </>
        )
    })}
    <button onClick={()=>{
        setFlag(!flag)
    }} className="add-btn">{flag?"Save":"Add New"}</button>
    
</div>
<div className="confirmFooter">
    <button onClick={handleOrder}>Confirm</button>
</div>
        </div>
        </>
    )
}

id++