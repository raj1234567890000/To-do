import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const[error,setError]=useState(false);

  useEffect(() => {
    
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const collectionData = async () => {
    console.log(!name)
    if(!name || !email || !password){
      setError(true);
      return false;
  }
    
    console.log(name, email, password);
    let result = await fetch("http://localhost:4000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
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
      <h2 className="register">register here....</h2>

      <div className="inputs">
        <input
          type="text"
          placeholder="Enter Name"
          className="inputbox"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
             {error && !name && <span className="invalid">Enter Valid name</span>}
        <input
          type="email"
          placeholder="Enter Email"
          className="inputbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
             {error && !email && <span className="invalid">Enter Valid email</span>}
        <input
          type="password"
          placeholder="Enter Password"
          className="inputbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
             {error && !password && <span className="invalid">Enter Valid password</span>}<br></br>
        <button className="buttons" onClick={collectionData}>
          Singup
        </button>
      </div>
    </>
  );
};

export default Singup;
