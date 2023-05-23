
import React from 'react';
import img from '../../../assets/home/featured.jpg'

const PopularItem = ({item}) => {

  const {name, image, price, recipe} = item

      return (
            <div className='flex space-x-4'>
                  <img style={{borderRadius:'0 200px 300px 200px'}} className='w-[120px]' src={img} alt="" />
                <div>
                  
                   <p className='uppercase font-abc'>{name}------------</p>
                   <p>{recipe}</p>
                  
                  </div> 
                  <p className='text-yellow-600'> ${price}</p> 
            </div>
      );
};

export default PopularItem;