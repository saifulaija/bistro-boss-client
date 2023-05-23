import React from "react";
import logo from "../../../public/banner3.jpg";

const Login = () => {
  return (
    <div className="bg-blue-200 px-6 py-20 sm:p-32">
      <h1 className="text-2xl font-bold uppercase text-teal-600 sm:text-4xl  tracking-wider my-10 text-center underline-offset-auto font-def">Login Now</h1>
     <div className="sm:flex justify-center items-center gap-x-6">
     <div className="shadow-2xl scale-x-90" >
        <img className="max-w-[500px] hidden sm:block" src={logo} alt="" />
      </div>
      <form className="sm:max-w-[600px] max-h-screen w-full">
 <div className=" flex flex-col">
      <label htmlFor="" className="uppercase font-semibold">Name</label>
      <input type="text" placeholder="name" className="bg-gray-100 px-2 py-3 rounded-md outline-none border-b-4 border-green-400 focus:bg-gray-300 " />
 </div>
 <div className=" flex flex-col">
      <label htmlFor="" className="uppercase font-semibold">Email</label>
      <input type="text" placeholder="email" className="bg-gray-100 px-2 py-3 rounded-md outline-none border-b-4 border-green-400 focus:bg-gray-300 " />
 </div>
 <div className=" flex flex-col">
      <label htmlFor="" className="uppercase font-semibold">Password</label>
      <input type="text" placeholder="password" className="bg-gray-100 px-2 py-3 rounded-md outline-none border-b-4 border-green-400 focus:bg-gray-300 " />
 </div>

      </form>
     </div>
    </div>
  );
};

export default Login;
