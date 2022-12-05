import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect } from 'react';
import { json } from 'react-router-dom';

 export default function App() {
    const [productdetails,setProductdetails]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=20')
        .then(responce=>responce.json())
        .then(json=>setProductdetails(json));
    });

  return (
   <>
   <div className='container-fluid'>
    <div className='col-lg-12 mt-5'>
      <div className='table-responcive'>
        <table className='table table-bordered table-hover text-center'>
          <thead>
            <tr>
              <th>SI no</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>product Rating</th>
              <th>product Category</th>
              <th>Product Count</th>
            </tr>
          </thead>
          <tbody>
            {
              productdetails.map((value,index)=>(
                <tr>
                  <td>{value.id}</td>
                  <td><img src={value.image} className='img-fluid'/></td>
                  <td>{value.title}</td>
                  <td>{value.description}</td>
                  <td>{value.rating.rate}</td>
                  <td>{value.category}</td>
                  <td>{value.rating.count}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      
    </div>
   </div>
   </>
  );
}


