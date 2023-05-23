import React from 'react';
import img from '../../../assets/home/02.jpg'
import { BiCartAdd } from "react-icons/bi";


const FoodCard = ({item}) => {
      const {name, image, price, recipe} = item;
      return (
            <div className="card w-full card-compact md:w-96 bg-slate-200 space-y-6  shadow-xl ">
            <figure><img src={img} alt="Shoes" /></figure>
            <p className='absolute right-0 bg-slate-900 text-yellow-500 font-semibold mr-4 top-4 p-1 rounded-md'>${price}</p>
            <div className="card-body">
              <h2 className="card-title font-def">{name}</h2>
              <p>{recipe}</p>
              <div className="card-actions justify-center">
                <button className=" button-primary bg-blue-400 ">Add To Cart <BiCartAdd className='inline-block'></BiCartAdd></button>
              </div>
            </div>
          </div>
      );
};

export default FoodCard;