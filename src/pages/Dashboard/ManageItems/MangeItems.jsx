import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MangeItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //

        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("deleted response", res.data);

          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="w-full max-h-full px-10">
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up"
      ></SectionTitle>
      <h1 className="text-2xl font-bold">Total Items: {menu.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>$ {item.price}</td>
                <td>
                  <button className="bg-yellow-400 px-4 py-1 rounded-md">
                    <AiOutlineEdit className="text-2xl"></AiOutlineEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="bg-yellow-400 px-4 py-1 rounded-md"
                  >
                    <AiOutlineDelete className="text-2xl"></AiOutlineDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeItems;
