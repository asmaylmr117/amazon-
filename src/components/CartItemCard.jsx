import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartProduct, updateProductCount } from '../slices/cart.slice'
import { Link } from 'react-router-dom'

export default function CartItemCard({productInfo}) {
    const dispatch = useDispatch()
    const{count,price,product} = productInfo
    const{title,imageCover,id} = product
    const isLoadingUpdateCart = useSelector(store=>store.cartReducer.isLoadingUpdateCart)
    console.log(isLoadingUpdateCart);
    
  return (
    <>
       <div className='container w-11/12  mx-auto my-5'>
    <div className='cart-item flex items-center border rounded-xl p-3 '>
      <Link to={`/product/${id}`} className='w-2/6 md:w-1/6 mr-2 border-[1px] my-2 rounded-md border-[#131921] cursor-pointer overflow-hidden'> <img src={imageCover} className='' alt="" />
      </Link>
       <div className='flex flex-wrap md:flex-nowrap items-center justify-between gap-5 w-full'>
       <div>
        <Link to={`/product/${id}`}> <h2 className='text-2xl font-bold cursor-pointer line-clamp-3'>{title}</h2>
        </Link>
        <p className='text-[red] font-semibold text-xl my-3'>Price : <span className='font-bold text-slate-600 '>EGP {price}</span></p>
        <button disabled={isLoadingUpdateCart} onClick={()=>{
            dispatch(deleteCartProduct(id))
          }
            } className='font-semibold active:scale-95 hover:scale-110 duration-300 transition-all'><i className="fa-solid fa-trash-can text-[red]"></i> Remove</button>
       </div>
       <div className='flex items-center gap-5'>
        <button disabled={isLoadingUpdateCart} onClick={()=>{
            dispatch(updateProductCount({productId:id,count: count+1}))

        }} className='w-8 h-8 flex justify-center items-center rounded-lg border-2 hover:scale-110 duration-300 transition-all border-[#131921]  active:scale-90'><i className="fa-solid fa-plus text-[#131921]"></i></button>
        <p className='text-3xl font-bold'>{count}</p>
        <button disabled={isLoadingUpdateCart} onClick={()=>{
            dispatch(updateProductCount({productId:id,count: count-1}))
        }} className='w-8 h-8 flex justify-center items-center rounded-lg border-2 hover:scale-110 duration-300 transition-all border-[#131921]  active:scale-90'><i className="fa-solid fa-minus text-[#131921]"></i></button>
       </div>
       </div>
      </div>
   </div>
    </>
  )
}