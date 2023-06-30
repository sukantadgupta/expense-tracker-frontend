import axios from "axios";
import React, { useState } from "react";
import "./Signup.css"
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");


  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEMail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  const handleConPass = (e) => {
    setConPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || pass === "" || name === "") {
      alert("Please Fill All Fields");
    }else {
      try {
        // setLoading(true);
        let res = await axios.post("https://crudcrud.com/api/b9b0a428228d473c9cc45951fd9b1c50/users", {
          name:name,
          email: email,
          password: pass,
        });
        // setLoading(false);
        console.log(res);
        toast.success("Sign-In Completed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        // setLoading(false);
        console.log("error:", error);
      }
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
 
      <form id="signUp">
        <div class="input-cont">
          <input onChange={handleName} name="name" type="text" placeholder="Enter Your Name" />
          <div class="border1"></div>
        </div>
        <div class="input-cont">
          <input onChange={handleEMail} name="email" type="text" placeholder="Enter Your Email" />
          <div class="border1"></div>
        </div>
        <div class="input-cont">
          <input
            onChange={handlePassword}
            name="password"
            type="password"
            placeholder="Enter Your Password"
          />
          <div class="border2"></div>
        </div>
        <div class="clear"></div>
       
        <input onClick={handleSubmit} type="submit" value={"Sign Up"} />
        {/* <Link to={"/ForgotPassword"}>Forgot Password</Link> */}
      </form>
    </>
  );
};

export default SignUp;
