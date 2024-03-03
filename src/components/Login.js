import React, { useState,useEffect } from "react";
import{useNavigate}from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
 
  const handlelogin = async() => {
    console.log(!email)
    if(!email || !password){
        setError(true);
        return false;
    }

    console.log("email","password",email,password)
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
   localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
    
  };

  return (
    <>
    <h2 className="register">login here....</h2>
    <div className="login">
      <input
        type="email"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email} className="inputboxs"/><br></br>
             {error && !email && <span className="invalidlogin">Enter Valid email</span>}
      <input
        type="passsword"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}className="inputboxs"/><br></br>
             {error && !password && <span className="invalidlogin">Enter Valid password</span>}
      <button className="appbutton" onClick={handlelogin}>
        Login
      </button>
    </div>
    </>
  );
};

export default Login;
