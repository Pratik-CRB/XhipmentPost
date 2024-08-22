import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

const SignIn = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  
  return (
    <>
      {value ? (
        <Home />
      ) : (
        <button
          className="btn btn-primary "
          style={{ width: "300px", position:"absolute", top:"50%", left: "40%" }}
          onClick={handleClick}
        >
          <b>Signin With Google</b>
        </button>
      )}
    </>
  );
};

export default SignIn;
