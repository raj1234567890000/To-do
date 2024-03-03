import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, SetCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const addProdcut = async () => {
    console.log(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.log({ name, price, category, company });

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch(`http://localhost:4000/addproduct`, {
      method: "post",
      body: JSON.stringify({ name, price, category, userId, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };

  return (
    <>
      <h2 className="register">add product here....</h2>

      <div className="addproduct">
        <input
          type="text"
          placeholder="Enter name"
          className="addinput"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br>
        {error && !name && <span className="invalid">Enter Valid Name</span>}
        <input
          type="text"
          placeholder="Enter product price"
          className="addinput"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br></br>
        {error && !price && <span className="invalid">Enter Valid Price</span>}
        <input
          type="text"
          placeholder="Enter catageory"
          className="addinput"
          value={category}
          onChange={(e) => {
            SetCategory(e.target.value);
          }}
        />
        <br></br>
        {error && !category && (
          <span className="invalid">Enter Valid catageory</span>
        )}
        <input
          type="text"
          placeholder="Enter company"
          className="addinput"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />{" "}
        <br></br>
        {error && !company && (
          <span className="invalid">Enter Valid company</span>
        )}
        <br></br>
        <button className="addbutton" onClick={addProdcut}>
          Add Product
        </button>
      </div>
    </>
  );
};

export default Addproduct;
