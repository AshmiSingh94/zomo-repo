import React from "react";
import "./index.css";
import { categories } from "../../utils/constants";
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  
  const handleNavigation=(item)=>{
    navigate(`/catgegories/${item.id}`);
  }
  return (
    <div className="categories-container">
      <div className="categories-header">
        <div>Inspiration for your first order</div>
      </div>
      <div className="categories-items-container">
        {categories.map((item) => (
          <div className="categories-items" key={item.id} onClick={()=>{handleNavigation(item)}}>
            <img className="categories-image-items" src={item.imageurl} width="200px" height="200px" alt="" />
            <div className="categories-items-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
