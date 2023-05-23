import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PopularItem from '../../Shared/PopularItem/PopularItem';
import { useMenu } from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular');

      return (
            <section>
                 <SectionTitle subHeading='popular items' heading='from our menu'></SectionTitle>
                 <div className='grid md:grid-cols-2 gap-4 mb-16'>
                  
                  {
                   popular.map(item => <PopularItem key={item._id} item={item}></PopularItem>)  
                  }
                  </div> 
                 
            </section>
      );
};

export default PopularMenu;