
import Navbar from './components/Navbar';
import './App.css'
import Register from './components/Register'
import Signin from './components/Signin'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar/>
     <Signin/>
     <Register/>
      
     {/* <BrowserRouter>
       <Routes>
        <Route path='/register' element={Register}/>
       </Routes>
     </BrowserRouter> */}
    </>
    
  )
}

export default App;
