import { useEffect,useState } from "react"
import "./assets/css/order.css"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
export const OrderCancel=()=>{

    const id=useSelector(state=>state.data.id)
    const navigate=useNavigate()
    let [flag,setFlag]=useState(false)
    const [orders,setOrders]=useState([])
    const [storeDetail,setStoreDetail]=useState([])
    useEffect(()=>{
       fetch("http://localhost:3000/orders/getorder").then(rwadata=>{
        return rwadata.json()
       }).then(data=>{
       data.filter(item=>{
        if(item.result[0].product_id==id){
            setOrders([item])
            setStoreDetail(item.result)
                setFlag(!flag)
        }
       })
       
       }).catch(err=>{
        console.log(err)
       })
            },[])
            let totalPrice=(orders.length && orders.reduce((a,b)=>{
                return a+(b.price*b.quantity)
            },0))
    return (
        <>
        <div className="order-container">
<div className="order-header">
    <span>Summary</span>
    <span onClick={()=>{navigate("/order-detail")}}>X</span>
</div>
<div className="store-detail">
   <div>
    <span style={{opacity:".3"}}><b>Store Location</b></span>
    <div>{flag ? storeDetail[0].location:""}</div>
   </div>
    <div>
        <div>Store Address :</div>
        <div>{flag?storeDetail[0].storeaddress:" " }</div>
    </div>
    <div>
    <div>Phone</div>
    <div>{flag ?storeDetail[0].phone:" " }</div>
    </div>
</div>
<div className="order-track">
<div className="circle"></div>
<div className="track-text">Picked</div>
<hr style={{width:"150px",height:"0px",marginLeft:"10px"}}></hr>
<div className="circle"></div>
<div className="track-text">Washed</div>
<hr style={{width:"150px",height:"0px"}}></hr>
<div className="circle"></div>
<div className="track-text">Ironed</div>
<hr style={{width:"150px",height:"0px"}}></hr>
<div className="circle"></div>
<div className="track-text">Delivered</div>

</div>
<div className="Order-Detail">
    <span>Order detail</span>
    {
      orders && orders.map(Item=>{
            return (
                <>
                <div className="show-orders">
                <div>{Item.ProductName}</div>
                <div>{ Item.washtype}</div>
                <div>{`${Item.quantity}X${Item.price}=`}</div>
                <div>{Item.quantity*Item.price}</div>
                </div>
                <hr style={{width:"800px",marginLeft:"5%"}}></hr>
                </>
            )
        })
    }
<div className="sub-total"><span>Sub Total:</span><span>{totalPrice}</span></div>
<hr className="last-hr"></hr>
<div className="pickup-charge"><span>Pickup Charges:</span><span>90</span></div>

</div>
<div className="order-header total">
<span>Total:</span>
<span className="total-amt">Rs {totalPrice+90}</span>
</div>
<div className="address">
    <span>Address :</span>
    <div className="show-input">{ flag ? storeDetail[0].customerAddress:" " }</div>
</div>
<div className="cancel-order">
    <button onClick={()=>{navigate("/cancel-order")}}>Cancel Order</button>
</div>
        </div>
        </>
    )
}