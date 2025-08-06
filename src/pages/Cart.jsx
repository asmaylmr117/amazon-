import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import empty from '/empty_cart.svg'
import { Link } from 'react-router-dom'
import { deleteAllCart, getCartProducts } from '../slices/cart.slice'
import { ShoppingBag} from 'lucide-react'
import CartItemCard from '../components/CartItemCard';
import LottieComponent from "../components/common/lottie/LottieComponent";

export default function Cart() {
    const isLoadingCart = useSelector(store=>store.cartReducer.isLoadingCart)
    const dispatch = useDispatch()    
    const cartInfo = useSelector(store=>store.cartReducer.cartInfo)    
   useEffect(()=>{
    dispatch(getCartProducts())
    window.scrollTo(0,0)
  },[])
  if(isLoadingCart){
   return (
    <>
    <LottieComponent type="loadingAnimation"/>
    </>
   )
  }
  return (
    <>
      <section className='my-6 font-Encode'>
        {cartInfo?.numOfCartItems == 0 ?  <div className='text-center'>
          <img src={empty} className='mx-auto w-1/3' alt="emptyCart" />
          <p className='text-center text-3xl font-extrabold my-4 '>Your Cart Is Empty</p>
          <Link to="/products" className=''>
          <button className='bg-[#131921] text-white font-bold px-5 py-3 rounded-lg active:scale-90 transition-all duration-300'>Continue Shopping</button>
          </Link>
        </div>: 
       <>
        <div className='text-center  mt-6 flex items-center   justify-center gap-3 relative before:absolute before:bottom-0 before:left-[50%] before:w-24 before:rounded-lg before:h-1 before:top-full before:-translate-x-1/2 before:bg-[#131921]'>
        <i className='fa-brands fa-opencart text-4xl'></i>
        <h2 className='font-bold text-4xl'>Your Cart</h2>
      </div>
      <div className='flex items-center justify-around mt-5 '>
      <p className='text-[#131921] font-extrabold text-2xl my-3'>Total Price : <span className='font-bold  text-[red] '>EGP {cartInfo?.data?.totalCartPrice}</span></p>
      <button onClick={()=>{
        dispatch(deleteAllCart())
        setTimeout(()=>{
            dispatch(getCartProducts())
        },500)
      }} className='font-semibold active:scale-95 text-lg  bg-red-500 text-white px-3 py-[6px] rounded-lg'><i className="fa-solid fa-trash-can"></i> Clear Cart</button>
      </div>
        <div className='mt-4 '>
          {cartInfo?.data?.products?.map((product)=><CartItemCard key={product._id} productInfo={product}/>)}
        </div>
        <Link to="/checkout" className='bg-[#131921] mt-5 w-fit mx-auto text-white font-bold px-4 py-3 rounded-lg hover:text-white border border-[red] active:scale-90 flex justify-center items-center'><span className='mr-2'>Checkout</span><ShoppingBag/></Link>
        </>}
        </section>
    </>
  )
}