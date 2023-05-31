import React from 'react';
import { Helmet } from 'react-helmet-async';

import { BsTrash} from "react-icons/bs";
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';



const MyCart = () => {

      const [cart, refetch] = useCart();
      const total = cart.reduce((sum, item)=> item.price + sum, 0);
    console.log(total);
    const handleDelete=(item)=>{

      Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //  
                  fetch(`http://localhost:5000/carts/${item._id}`,{
                        method:"DELETE"
                  })
                  .then(res=> res.json())
                  .then(data=>{
                        if(data.deletedCount>0){
                              refetch();
                              Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )

                        }
                  })

            }
          })

    }


      return (
            <div className='w-full h-full'>
                <Helmet>
                  <title>Bistro Boss | My Cart</title>
                </Helmet>

                <div className='uppercase text-2xl font-semibold flex justify-evenly items-center h-11'>
                  <h1>Total Items: {cart.length}</h1>
                  <h1>Total Price: ${total}</h1>
                 <button className='btn btn-warning'>Pay</button>
                </div>

                <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
            cart.map((item, index)=>  <tr key={item._id}>
            <td>
             {index + 1}
            </td>
            <td>
             
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item?.image} />
                  </div>
                </div>
               
              
            </td>
            <td>
             {item.name}
            </td>
            <td className='text-end'>$ {item.price}</td>
            <td>
              <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-lg bg-red-600 text-white"><BsTrash className='text-xl'></BsTrash></button>
            </td>
          </tr>)
      }
     
  
    </tbody>
    {/* foot */}
    
    
  </table>
</div>

            </div>
      );
};

export default MyCart;