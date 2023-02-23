import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
    const[update,setUpdate]=useState([])
    useEffect(()=>{
        getUsers()
    },[])
    const getUsers = async () => {
        let result = await fetch(
          "https://shy-rose-fox-tutu.cyclic.app/api/getuser"
        );
        result = await result.json();
        setUpdate(result);
      };
    
      const delete_id = async (id) => {
        let result = await fetch(
          `https://shy-rose-fox-tutu.cyclic.app/api/deleteuser/${id}`,
          {
            method: "Delete",
          }
        );
        result = await result.json();
        if (result) {
          alert("deleted");
          getUsers();
        }
      };
  return (
    <div>
         <div className='tablecon'>
      <p  className='studentD'>Admin DashBoard</p>
      {/* <input
        type='search'
        onChange={handleSearch}
        className="searchblog1"
        placeholder="Search User"
      /> */}
        <table className="table1">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">State</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          {update.length>0 ? (
            update.map((store,index)=>(
    
            
          
          <tbody key={store._id}>
            <tr >
              <th scope="tableRow">{index + 1}</th>
              <td>{store.name}</td>
              <td>{store.mobile}</td>
              <td>{store.email}</td>
              <td>{store.state}</td>
             
              <Link to={"/update/" + store._id}>
              <td><i style={{color:'green',fontSize: '26px',marginRight:10}} class="fas fa-edit"/></td>
             </Link>
              {/* <td><button  className="btn btn-danger">remove</button></td> */}
              <Link to={"/admin/"}>
            <td><i style={{color:'red',fontSize: '26px',marginLeft:30}} onClick={() =><Link to={"/admin/" + delete_id(store._id) }></Link>} class="fas fa-trash-alt"/></td>
              </Link>
            </tr>
          </tbody>
        ))
       ) : (
            <h3>No result found</h3>
          )}
        </table>
       
      </div>
    </div>
  )
}

export default Admin