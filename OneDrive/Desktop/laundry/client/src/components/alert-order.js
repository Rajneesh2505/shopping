import { useSelector } from "react-redux"
import "./assets/css/alert-order.css"
import { useNavigate } from "react-router-dom"
export const CancelAlert=()=>{
    const id=useSelector(state=>state.data.id)
    const navigate=useNavigate()

    const handleProceed=()=>{
        fetch("http://localhost:3000/updateOrder",{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(id)
        }).then(data=>{
            if(data.ok){
                navigate("/order-detail")
            }
        }).catch(err=>{
            console.log("err is",err)
        })
    }
    return (
        <>
        <div className="alert-box">
            <div className="alert-header">
<span>Alert</span>
<span onClick={()=>{navigate("/order-cancel")}}>X</span>
            </div>
            <div className="alert-text">
                <img src="https://img.icons8.com/?size=100&id=Sb9rYobIrMId&format=png&color=000000"/>
           <p> Are you sure want to cancel the oreder No: OR{id}</p>
            </div>
            <button onClick={handleProceed}>Proceed</button>
        </div>
        
        </>
    )
}