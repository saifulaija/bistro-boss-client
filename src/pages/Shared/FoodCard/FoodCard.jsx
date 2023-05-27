import React, { useContext } from 'react';
import img from '../../../assets/home/02.jpg'
import { BiCartAdd } from "react-icons/bi";
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';


const FoodCard = ({item}) => {
      const {name, image, price, recipe, _id} = item;
      const {user} = useContext(AuthContext);
      const [,refetch] = useCart()
      const navigate = useNavigate();
      const location = useLocation();
     


     const handleAddToCad=(item)=>{
        console.log(item);

        if(user && user.email){

           const cartItem = {menuItemId:_id, name, image, price, recipe, email: user.email}

          fetch('http://localhost:5000/carts',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(cartItem)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.insertedId){
             
             

              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Food added on the cart',
                showConfirmButton: false,
                timer: 1500
              })
              refetch();

            }
          })
        }else{

          Swal.fire({
            title: 'Please login to order the food',
           
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
          }).then((result) => {
            if (result.isConfirmed) {
             navigate('/login', {state: {from: location}})
            }
          })

        }
      
        
     }



      return (
            <div className="card w-full p-6 card-compact md:w-96 border-[1px] border-neutral-100 bg-white space-y-6  shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>
            <p className='absolute right-0 bg-slate-900 text-yellow-500 font-semibold mr-8 top-4 p-1 rounded-md'>${price}</p>
            <div className="card-body">
              <h2 className="card-title font-def">{name}</h2>
              <p>{recipe}</p>
              <hr className='text-blue-400' />
              <div className="card-actions justify-center">
                <button onClick={()=> handleAddToCad(item)} className=" button-primary py-2 bg-[#617453] ">Add To Cart <BiCartAdd className='inline-block'></BiCartAdd></button>
              </div>
            </div>
          </div>
      );
};

export default FoodCard;