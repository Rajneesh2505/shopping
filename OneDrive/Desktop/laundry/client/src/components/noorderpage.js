import Navbar from "./Navbar";
import { SideBar } from "./side-bar";
import "../components/assets/css/create-page.css"
import { useNavigate } from "react-router-dom";
import { Footer } from "./footer";
const Noorder = ()=>{
    const navigate = useNavigate();
    return(
      <>

<div className="createorderdiv">
<div className="container">
  <Navbar/>
  <div style={{display:"flex"}}>
  <SideBar/>
  <div className="order-detail no-order">
  <div><b>Orders | 0</b></div>
  <div>
    <div>No Orders avaialble</div>
    <div onClick={ ()=>navigate('/create-order')}>Create</div>
  </div>
  </div>
  </div>
</div>
<Footer/>
</div>
</>
    )
}
export default Noorder;