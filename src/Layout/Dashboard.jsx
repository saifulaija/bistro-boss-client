import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineCalendar,
  AiOutlineHome,
  AiFillCalculator,
  AiOutlineMenuUnfold,
  AiFillBook,
  AiOutlineUser,
} from "react-icons/ai";
import { BsWalletFill } from "react-icons/bs";

import { ImSpoonKnife } from "react-icons/im";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  console.log(cart);
  // TODO:load data from the server to have dynamic

  // const isAdmin = true;

  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 ">
         

          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <AiOutlineHome></AiOutlineHome> Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addItem">
                  <ImSpoonKnife></ImSpoonKnife> Add an Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <AiOutlineUser></AiOutlineUser> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <AiFillBook></AiFillBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <AiFillBook></AiFillBook> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <AiOutlineHome></AiOutlineHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <BsWalletFill></BsWalletFill> Payment History{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <AiFillCalculator></AiFillCalculator> Reservation{" "}
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/mycart">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart> My Cart{" "}
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <AiOutlineHome></AiOutlineHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <AiOutlineHome></AiOutlineHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <AiOutlineHome></AiOutlineHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
