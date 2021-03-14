
import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import { database } from "./firebase";
  
  function HandelUrl() {
    const [blogs,setBlogs]=useState([])
    const { endpart } = useParams();
    
    const fetchBlogs= async ()=>{
  
      const response=database.collection('Storeurls');
      const data=await response.get();
      data.docs.forEach(item=>{
  
  
  var  finalshorturl = item.data().ShorturlValue.toString().trim();
  
        if(endpart === finalshorturl){
        
          setBlogs([blogs,item.data().Longurl])
          } else{
  
            window.location.replace("http://localhost:3000/")
          }
         
      })
  
    }
    useEffect(() => {
      fetchBlogs();
    }, [])
    return (
      <div className="App">
        {
          blogs && blogs.map(blog=>{
            return(
              <div className="blog-container">
                <h4>{
                 window.location.replace(blog)
                }</h4>
      
              </div>
            )
          })
        }
      </div>
    );
  }
  
  
  export default  HandelUrl;