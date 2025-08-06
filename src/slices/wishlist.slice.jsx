import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let toastId
// actions
export const getWishlist = createAsyncThunk("wishlist/getWishlist",async(_,{getState})=>{
    const token = getState().userReducer.token;
    const options = {
        url:"https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "GET",
        headers:{
            token:token
        }
    }
    try {
        let {data} = await axios.request(options)
        return data;
    } catch (error) {
    }
})
export const addProductToWishlist = createAsyncThunk("wishlist/addProductToWishlist",async(productId,{getState})=>{
    toastId = toast.loading("Adding Product to your Wishlist ...")
    const token = getState().userReducer.token;
    const options = {
        url:"https://ecommerce.routemisr.com/api/v1/wishlist",
        method: "POST",
        headers:{
            token:token
        },
        data:{
            productId,
        }
    }
    try {
        let {data} = await axios.request(options)
        if(data.status == "success")
            {
                toast.success(data.message)
            }
        return data;
    } catch (error) {
        toast.error(error.response.data.message)
    }finally{
        toast.dismiss(toastId)
    }
})
export const removeProductFromWishlist = createAsyncThunk("wishlist/removeProductFromWishlist",async(productId,{getState})=>{
    toastId = toast.loading("Deleting Product ...")
    const token = getState().userReducer.token;
    const options = {
        url:`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        method: "DELETE",
        headers:{
            token:token
        }
    }
    try {
        let {data} = await axios.request(options)
        console.log(data);
        
        if(data.status == "success")
            {
                toast.success(data.message)
            }
        return data;
    } catch (error) {
        toast.error('Failed to remove product')
    }finally{
        toast.dismiss(toastId)
    }
})
// actions


//slice
const wishlist = createSlice({
    name:"wishlist",
    initialState:{
        wishlistInfo:null,
        isLoadingWishList:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getWishlist.fulfilled,(state,action)=>{
            state.isLoadingWishList=false
            state.wishlistInfo=action.payload            
        })
        builder.addCase(getWishlist.pending,(state,action)=>{
            state.isLoadingWishList=true
        })
        builder.addCase(addProductToWishlist.fulfilled,(state,action)=>{
            state.isLoadingWishList=false
        })
        builder.addCase(addProductToWishlist.pending,(state,action)=>{
            state.isLoadingWishList=true
        })
        builder.addCase(removeProductFromWishlist.fulfilled,(state,action)=>{
            state.isLoadingWishList=false
        })
        builder.addCase(removeProductFromWishlist.pending,(state,action)=>{
            state.isLoadingWishList=true
        })
    },
})

export const wishlistReducer = wishlist.reducer
