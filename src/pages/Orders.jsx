import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../slices/orders.slice'
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import LottieComponent from '../components/common/lottie/LottieComponent';

export default function Orders() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const orders = useSelector(store=>store.ordersReducer.orders)
  const isLoadingOrders = useSelector(store=>store.ordersReducer.isLoadingOrders)
  useEffect(()=>{
    dispatch(getUserOrders())
  },[])
  if(isLoadingOrders){
    return (
        <LottieComponent type="loadingAnimation"/>
   
    )
  }
  return (
    <>
      {orders?.length==0?<div className='text-center font-Encode   my-5'>
          <img src="/add-to-cart.png" className='mx-auto w-1/3' alt="" />
          <p className='text-center text-3xl font-extrabold mb-4'>No Orders Found</p>
          <Link to="/products" className='bg-[#131921] text-white font-bold px-4 py-3 rounded-lg hover:text-white border border-[#131921] hover:scale-110 active:scale-95'>Continue Shopping</Link>
        </div>:<section className='font-Encode   mt-5'>
        <div className="text-center flex items-center justify-center gap-3 relative before:absolute before:bottom-0 before:left-[50%] before:w-24 before:rounded-lg before:h-1 before:top-full before:-translate-x-1/2 before:bg-[#131921]">
          <i className="fa-solid fa-store text-2xl"></i>
          <h2 className="font-extrabold text-2xl">Your Orders</h2>
        </div>
        {orders?.map((order,index)=><div key={order.id} className="order  my-5 p-1">
          <header className='mb-2'>
            <div className=" flex flex-row justify-center sm:gap-5 w-fit mx-auto ">
              <div className="flex flex-col text-center gap-5">
                <p className='text-lg font-bold'>
                  Order Number : <span className='font-light text-slate-500'>{index+1}</span>
                </p>
                <p className='text-lg font-bold'>
                  Created At : <span className='font-light text-slate-500'>{moment(order.createdAt).format("MMM D, YYYY")}</span>
                </p>
                {order.isDelivered?<span className='bg-[red] w-fit px-4 py-1 mx-auto rounded-full text-white font-bold'>Delivered</span>:<span className='bg-blue-600 w-fit px-4 py-1 mx-auto rounded-full text-white font-bold'>On The Way</span>}
              </div>
              <div className="flex flex-col text-center gap-5">
                <p className='text-lg font-bold'>
                  OrderID : <span className='font-light text-slate-500'>{order.id}</span>
                </p>
                <p className='text-lg font-bold'>
                  Total Order Price : <span className='font-bold text-[red]'>{order.totalOrderPrice}</span>
                </p>
                {order.isPaid?<span className='bg-[red] w-fit px-4 py-1 mx-auto rounded-full text-white font-bold'>Paid</span>:<span className='bg-red-600 w-fit px-4 py-1 mx-auto rounded-full text-white font-bold'>UnPaid</span>}
              </div>
            </div>
          </header>
          <div className='rounded-lg overflow-hidden border-[1px] w-full md:w-9/12 mx-auto table-auto border-b-[0px] border-[#131921]'>
          <table className='w-full text-center font-bold table-fixed  '>
            <thead className='items-center  bg-[#131921] text-white text-[10px] md:text-sm'>
               <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>     
                <th>Subtotal</th>
                </tr>     
            </thead>
            <tbody className='text-[10px] md:text-lg'>
                {order.cartItems.map((product)=>
                    <tr key={product._id} className='border-b border-[#131921]'>
                    <td onClick={()=>{navigate(`/product/${product.product._id}`)}} className='cursor-pointer'><img className='w-16 md:ml-10' src={product.product.imageCover}  alt="" /></td>
                    <td onClick={()=>{navigate(`/product/${product.product._id}`)}} className='cursor-pointer'>{product.product.title.split(" ").slice(0,5).join(" ")}</td>
                    <td>EGP {product.price}</td>
                    <td>{product.count}</td>
                    <td>EGP {product.price*product.count}</td>
                    </tr>
                )}
            </tbody>
          </table> 
          </div>  
        </div>)}
      </section>}
    </>
  )
}
