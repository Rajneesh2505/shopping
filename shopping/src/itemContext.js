import React, { createContext, useState, useContext,useEffect } from "react";
import CartModal from "./components/cardModel/cardModel";
import { ItemList } from "./components/items/items";
import {useNavigate} from "react-router-dom"
import axios from "axios"

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [total , setTotal] =useState(0);
  const [search, setSearch] = useState('');
  const [selectedCategory,setSelectedCategory]=useState('');
  const [rangeValue, setrangeValue] = useState(0);

  const [userData,setUserData] = useState({name:"",password:""});
  const navigate=useNavigate()


  const fetchorderId = ()=>{
    fetch("http://localhost:3000/user/orders")
    .then(response=>response.json())
    .then(data =>{
      let demo  =data.map(({orderId})=>{
        return orderId ;
    })
    setCart([...demo]);
  })
  }

  useEffect(fetchorderId,[])
  

  const handleData=(e)=>{
     setUserData({...userData,[e.target.id]:e.target.value})
  }
  const handleSubmit=(e)=>{

     if(e.target.name===" " || e.target.password===""){

        alert("Please Fill the required data for the login");
        navigate("/login")

     }else{
        e.preventDefault();
        axios({
           url:"http://localhost:3000/user/login",
           method:"POST",
           headers:{},
           data:userData
        })
        .then((data)=>{
           let Token=data.data[0]
            localStorage.setItem("token",Token)
            localStorage.setItem("userID",data.data[1])
          }).catch(err=>{console.log(err)})
          if(localStorage.Token){
           navigate("/")
          } else{
           navigate("/login");
           alert("Please check your password");
          }
     }  
  }
  useEffect(() => {
    async function fetchData() {
     const data = await ItemList();
     setData(data);
    }
    fetchData();
   }, []);
    
   if (!data) {
    return <div>Loading...</div>;
   }

   const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
 
const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  const handleBuy = (item) => {
    if(localStorage.length===0) {
      navigate("/login")
    }else{
      const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index === -1) {
      setCart([...cart, { ...item }]);
      setValue(value + 1);
      setTotal(total + item.price);

      const userId = localStorage.getItem('userID');

      const orderData = {
        UserId:parseInt(userId),
        orderId : item.id
      } 



        fetch("http://localhost:3000/user/orders",{
          method: 'POST',
          headers :{
            "content-type":"application/json"
          },
          body:JSON.stringify(orderData)
          
        })
        .then(data => {
          console.log(data);
        })
        
        .catch(err=>{
          console.log(err)
        });
     }
    }
  };
   
  const handleRemove = (item) => {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      const itemToRemove = cart[index];
      cart.splice(index, 1);
      setCart([...cart]);
      setValue(value - 1);
      setTotal(parseFloat((total - itemToRemove.price).toFixed(2)));
    }
  };
  
  // total items cost
  const initialcost =0;
  const totalItemsCost = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialcost,
  );

  //pay order 
  function handlePay(){
    return fetch("http://localhost:3000/user/orders",{
      method : "Delete",
      header : {"content-type":"application/json"},
      body :JSON.stringify(localStorage.getItem("userID")),

    })
    

  }

  const toggle = () => {
    setShowCart(!showCart);
  };

  const close = () => {
    setShowCart(false);
  };
  const handleValue = (e) => {
    setrangeValue(e.target.value);
  };

  return (
    <itemContext.Provider
      value={{ handleBuy, cart, toggle, close, value, total,data , search,handleSearch,selectedCategory,handleCategoryFilter, handleRemove,userData,handleSubmit,handleData,rangeValue,handleValue,setData,handlePay}}>
      {cart.length > 0 && showCart && <CartModal cart={cart} toggle={toggle} />}
      {children}
    </itemContext.Provider>
  );
}

export default CustomItemContext;
export { useValue }; 