import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgBBToken = import.meta.env.VITE_IMAGEBB;

const AddItem = () => {


 const [axiosSecure] =useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();


  const imageURL = `https://api.imgbb.com/1/upload?key=${imgBBToken}`


  const onSubmit = (data) => {

      const formData = new FormData();
      formData.append('image', data.image[0]);
      fetch(imageURL,{
            method:'POST',
            body:formData
      })
      .then(res=> res.json())
      .then(imgResponse =>{
            if(imgResponse.success){
                  const imgBBURL = imgResponse.data.display_url;
                 const {name, price, category, recipe} = data;
                 const newItem = {name, price, category, price:parseFloat(price), image: imgBBURL}
                 console.log(newItem);
                 axiosSecure.post('/menu', newItem)
                 .then(data=>{
                  if(data.data.insertedId){
                        reset();

                        Swal.fire({
                              position: 'top-end',
                              icon: 'success',
                              title: 'Item Added Successful',
                              showConfirmButton: false,
                              timer: 1500
                            })

                  }
                  
                  
                 })
            }
      })
   
  };
 

  return (
    <div className="w-full px-10 py-10">
      <SectionTitle
        subHeading="What's New"
        heading="Add an item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold text-xl">
              Recipe Name*
            </span>
          </label>
          <input
            type="text"
            placeholder="Recipe"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="md:flex gap-2">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-xl">Category</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Desi</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-xl">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-xl">
              Recipe Details
            </span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe details"
          ></textarea>
        </div>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold text-xl">
              Item Image*
            </span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input  file-input-bordered w-full "
          />
        </div>
        <input
          type="submit"
          value="Add Item"
          className="button-primary bg-[#D1A054] py-2"
        />
      </form>
    </div>
  );
};

export default AddItem;
