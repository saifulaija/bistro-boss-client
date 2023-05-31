import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import Social from "../Shared/Social/Social";

const Register = () => {


  const {createUser,  updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();



  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
//     reset();
    createUser(data.email, data.password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{

        const saveUser = {name:data.name, email:data.email}
           
          fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)

          })
          .then(res=> res.json())
          .then(data=>{
            console.log(data);
            if(data.insertedId){


              reset();

              Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
  
                  navigate('/login')
  

            }
          })
           
      })
      .catch(error=> console.log(error))
    })
    
  }






  return (
   <>
     <Helmet>
      <title>Bistro Boss | Sign up</title>
     </Helmet>
   <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-200">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.displayName && (
                <span className="text-red-800">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="url"
                {...register("photoURL", { required: true })}
                placeholder="Photo Url"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-800">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:/(?=.*[A-Z])/
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-800">
                  Password at least 6 character
                </span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className="text-red-800">
                  at least one character uppercase
                </span>
              )}
              {errors.password?.type === "required" && (
                <span className="text-red-800">password is required</span>
              )}
            </div>
            <div className="form-control mt-6">
                  <input type="submit" value='sign up' className="btn btn-primary" />
              {/* <input type="submit" className="btn btn-primary">Sign Up</input> */}
            </div>
            <p>Already have an account? <Link to='/login'>Got to login</Link></p>
          </form>
          <Social></Social>
        </div>
      </div>
    </div>
   
   </>
  );
};

export default Register;
