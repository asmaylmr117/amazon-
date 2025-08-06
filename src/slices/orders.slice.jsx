import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
let toastId;
// actions
export const getUserOrders = createAsyncThunk("orders/getUserOrders",async(_,{getState})=>{
    const token = getState().userReducer.token;
    const {id} = jwtDecode(token)
    const options={
        url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method:'GET',
    }
    try {
        const {data} = await axios.request(options)
        return data
    } catch (error) {
    }    
})
export const handleCashOrder = createAsyncThunk("orders/handleCashOrder",async({cartId,values},{getState})=>{
    toastId = toast.loading("Processing...")
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        method:'POST',
        headers:{
            token,
        },
        data:{
            values,
        }
    }
    try {
        const {data} = await axios.request(options)
        if(data.status === "success")
            {
                toast.success("Order placed successfully")
                setTimeout(()=>{
                    window.location.href = "/allorders";
                },1000)
            }
    } catch (error) {
        console.log(error); 
        toast.error("check console and orders slice")
    }finally{
        toast.dismiss(toastId)
    }

})
export const handleOnlinePayment = createAsyncThunk("orders/handleOnlinePayment",async({cartId,values},{getState})=>{
    toastId=toast.loading("Redirecting...")
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${location.origin}`,
        method:'POST',
        headers:{
            token,
        },
        data:{
            values,
        }
    }
    try {
        const {data} = await axios.request(options)
        if(data.status === "success")
            {
                setTimeout(()=>{
                    window.location.href = data.session.url;
                },500)
            }
    } catch (error) {
        toast.dismiss(toastId)
        toast.error("Something went wrong while redirecting")
    }
})
// actions

//slice
const orders = createSlice({
    name: "orders",
    initialState: {
        orders:null,
        isLoadingOrders:false,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUserOrders.pending,(state,action)=>{
            state.isLoadingOrders = true
        })
        builder.addCase(getUserOrders.fulfilled,(state,action)=>{            
            state.orders = action.payload
            state.isLoadingOrders = false
        })
        builder.addCase(handleCashOrder.pending,(state,action)=>{
            state.isLoadingOrders = true
        })
        builder.addCase(handleCashOrder.fulfilled,(state,action)=>{            
            state.isLoadingOrders = false
        })
        builder.addCase(handleOnlinePayment.pending,(state,action)=>{
            state.isLoadingOrders = true
        })
        builder.addCase(handleOnlinePayment.fulfilled,(state,action)=>{            
            state.isLoadingOrders = false
        })
    }
})
export const ordersReducer = orders.reducer
//slice
