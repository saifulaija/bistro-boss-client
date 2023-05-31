import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import Social from "../Shared/Social/Social";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  
  const{signIn} = useContext(AuthContext);




  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
   const password = form.password.value;
   console.log(email, password);
    signIn(email, password)
    .then(result=>{
      const user=result.user;
      console.log(user);
     
      

      Swal.fire({
        title: 'User Login Successful',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

      navigate(from, {replace: true});

    })
    .catch(error=>{
      console.log(error);
      setError(error.message)
    })
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
   <>
   <Helmet>
    <title>Bistro Boss | Login</title>
   </Helmet>
   
   <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
               name="password"
               placeholder="password"
              />
             
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                
               onBlur={handleValidateCaptcha}
                type="text"
               
                placeholder="type the captcha"
                className="input input-bordered"
              />
              
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                value="Login"
                className="btn btn-primary"
              />
            </div>
            <p className="text-red-700">{error}</p>
          </form>
          <p>
            New Here? <Link to="/register">Go To register</Link>
            <Social></Social>
          </p>
        </div>
      </div>
    </div>
   
   </>
  );
};

export default Login;
