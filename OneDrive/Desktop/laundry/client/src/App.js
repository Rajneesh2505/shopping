 import './components/assets/css/App.css'
// import Navbar from './components/Navbar';
import './components/assets/css/App.css'
import Register from './components/Register'
import Signin from './components/Signin'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Create } from './components/create-page';
import { OrderPreview } from './components/order-preview'
import { OrderCancel } from './components/order-cancel'
import { OrderPlace } from './components/order-place'
import { OrderDetail } from './components/order-detail'
import { CancelAlert } from './components/alert-order'
import Noorder from './components/noorderpage'

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/create-order" element={<Create/>}></Route>
        <Route path="/order-preview" element={<OrderPreview/>}></Route>
        <Route path="/order-place" element={<OrderPlace/>}></Route>
        <Route path="/order-detail" element={<OrderDetail/>}></Route>
        <Route path="/order-cancel" element={<OrderCancel/>}></Route>
        <Route path="/cancel-order" element={<CancelAlert/>}></Route>
        <Route path="/no-order" element={<Noorder/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App;
