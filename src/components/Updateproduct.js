import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Updateproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, SetCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate=useNavigate()
  useEffect(() => {
    getProductDeatils();
  //eslint-disable-next-line
  },[]);

  const getProductDeatils = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:4000/Product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    SetCategory(result.category);
    setCompany(result.company);
  };

  const updateProdcut = async () => {
    console.group({ name, price, category, company });
    let result = await fetch(`http://localhost:4000/productupdate/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    navigate("/");
  };

  return (
    <>
    <h2 className="register">update product here....</h2>
    <div className="addproduct">
      <input
        type="text"
        placeholder="Enter name"
        className="addinput"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      /><br></br>

      <input
        type="text"
        placeholder="Enter product price"
        className="addinput"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      /><br></br>

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
      <input
        type="text"
        placeholder="Enter company"
        className="addinput"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      /><br></br><br></br>
      <button className="addbutton" onClick={updateProdcut}>
        update Product
      </button>
    </div>
    </>
  );
};

export default Updateproduct;
