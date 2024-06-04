import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Productlist = () => {
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        getProducts();
    },[])
    const getProducts=async()=>{
        let result= await fetch('http://localhost:4000/products');
        result=await result.json();
        setProducts(result);

    }
    const deleteProduct=async(id)=>{
      let result= await fetch(`http://localhost:4000/product/${id}`,{
        method:"Delete"
      });
      result=await result.json();
      if (result){
        alert("product deleted")
        getProducts();
      }
    }
    const seacrhHandle=async(event)=>{
      let key=event.target.value;
      
  if(key){
    let key=event.target.value;
    let result=await fetch(`http://localhost:4000/search/${key}`);
    result=await result.json();
    if(result){
      setProducts(result);
    }
  }else{
    getProducts();
  }
    }
  return (
    
    <div className='product-list'>
      <div className='search'>
      <SearchOutlinedIcon className='seachlogo'/>
      <input type='text' placeholder='search product' className='searchinput'
      onChange={seacrhHandle}/></div>
      <ul >
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>category</li>
        <li>company</li>
        <li>Operation</li>
      </ul>
      {

products.length>0 ? products.map((item,index)=>{
    return(
        <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li>{item.company}</li>
        <li><button onClick={()=>deleteProduct(item._id)}><DeleteIcon className='delete' /></button></li>
        <Link to={"/update/"+item._id}>< EditIcon  className='edit'/></Link>
      </ul>
    )

})
:<h1 className='noresult'>No Result Found</h1>
      }

    </div>
  )
}

export default Productlist
