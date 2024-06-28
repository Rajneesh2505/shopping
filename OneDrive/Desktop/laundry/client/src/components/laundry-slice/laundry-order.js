import { createSlice } from "@reduxjs/toolkit";
let obj={
    ProductName:"",
    quantity:0,
    washtype:[],
    price:0
}
const laundrySlice=createSlice({
    name:"laundrySlice",
    initialState:{
        id:new Array(1),
       products:[],
       obj:{
        ProductName:"",
        quantity:0,
        washtype:[],
        price:0
    }
    },
    reducers:{
        addName:(state,action)=>{
state.obj.ProductName=action.payload
        },
        addValue:(state,action)=>{
            state.obj.quantity+=Number(action.payload)
             
        },
        addWashType:(state,action)=>{
            let idx=state.obj.washtype.indexOf(action.payload[0])
           if(idx!==-1){
            state.obj.washtype.splice(idx,1,action.payload[0])
            state.obj.price+=parseInt(action.payload[1])
           }else{
            state.obj.washtype.push(action.payload[0])
           }
           console.log("obj is",obj)
        },
        confirmOrder:(state,action)=>{
            state.products.push(state.obj)
            state.obj={
                ProductName:"",
                quantity:0,
                washtype:[],
                price:0
            }
        },
        addId:(state,action)=>{
            state.id[0]=action.payload
        }
    }
})

export const {addValue,addName,addPrice,addWashType,confirmOrder,addId}=laundrySlice.actions
export default laundrySlice.reducer