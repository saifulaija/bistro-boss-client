import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {AiOutlineShoppingCart, AiOutlineCalendar, AiOutlineHome, AiFillCalculator, AiOutlineMenuUnfold } from "react-icons/ai";
import {BsWalletFill } from "react-icons/bs";
import useCart from '../hooks/useCart';

const Dashboard = () => {

      const [cart] = useCart();
      return (
            <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* <!-- Page content here --> */}
              <Outlet></Outlet>
              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div className="drawer-side bg-[#D1A054]">
              <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
              <ul className="menu p-4 w-80 ">
                {/* <!-- Sidebar content here --> */}
                <li><NavLink to='/dashboard/home'> <AiOutlineHome></AiOutlineHome> User Home </NavLink></li>
                <li><NavLink to='/dashboard/history'> <BsWalletFill></BsWalletFill> Payment History </NavLink></li>
                <li><NavLink to='/dashboard/reservations'> <AiFillCalculator></AiFillCalculator> Reservation </NavLink></li>
               
               
                <li><NavLink to='/dashboard/mycart'> <AiOutlineShoppingCart></AiOutlineShoppingCart> My Cart <div className="badge badge-secondary">+{cart?.length || 0}</div> </NavLink></li>
                
                <div className="divider"></div>
                <li><NavLink to='/'> <AiOutlineHome></AiOutlineHome> Home </NavLink></li>
                <li><NavLink to='/'> <AiOutlineHome></AiOutlineHome> User Home </NavLink></li>
                <li><NavLink to='/'> <AiOutlineHome></AiOutlineHome> Home </NavLink></li>
               
              </ul>
            
            </div>
          </div>
      );
};

export default Dashboard;
