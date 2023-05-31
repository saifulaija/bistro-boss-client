import React from "react";
import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleIn = () => {
    googleSignIn()
    .then((result) => {
      const loggedUser =result.user;
      console.log(loggedUser);

      const saveUser = {
        name:loggedUser.displayName,
        email:loggedUser.email,
      };

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center mb-4">
        <button onClick={handleGoogleIn} className="btn btn-circle btn-outline">
          <AiFillGoogleCircle className="text-4xl text-blue-400"></AiFillGoogleCircle>
        </button>
      </div>
    </div>
  );
};

export default Social;
