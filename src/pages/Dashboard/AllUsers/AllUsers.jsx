import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { MdDeleteForever } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {

 const [axiosSecure] =useAxiosSecure();


  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: "PATCH"
      })
      .then(res=>res.json())
      .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                  refetch();
                  Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                      })

            }
      })
  };


 const handleDelete=(user)=>{
      fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: "DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
            refetch();
            console.log(data);
      })

      Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

            fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: "DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
            // refetch();
            console.log(data);
      })

            if (data.deletedCount>0) {
                  refetch();
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })


 }



  return (
    <div className="w-full h-full">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <div>
        <h3 className="text-3xl font-bold my-8">Total users: {users.length}</h3>
        <div className="overflow-x-auto ">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead className="bg-yellow-700">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === 'admin' ? 
                      "Admin"
                    : 
                      <button onClick={() => handleMakeAdmin(user)}>
                        <GrUserAdmin className="text-3xl bg-yellow-400 rounded-xl"></GrUserAdmin>
                      </button>
                    }
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(user)}>
                      <MdDeleteForever className="text-3xl text-yellow-500"></MdDeleteForever>
                    </button>
                  </td>
                </tr>
              ))}

             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
