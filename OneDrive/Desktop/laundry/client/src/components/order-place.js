import "./assets/css/order-place.css"
import { useNavigate } from "react-router-dom"
export const OrderPlace=()=>{
    const navigate=useNavigate()
return (
    <>
    <div className="order-place-container">
<div>
<span>&#10003;</span>
</div>
<div className="order-text">
Your order is successfully placed.
</div>
<div className="track-text">
You can track the delivery in the "Orders" section.
</div>
    <button className="track-button" onClick={()=>{navigate("/order-detail")}}>Go to orders</button>

    </div>
    </>
)
}