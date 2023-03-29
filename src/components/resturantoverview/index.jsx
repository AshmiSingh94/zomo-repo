import { Button } from "@mui/material";
import React from "react";
import "./index.css";
export default function Overview(props) {
  const { menuImage, popularDishes, estimatedAmount,  cuisines } = props;
  console.log(props.menuItems);
  return (
    <div className="overview-container">
      <h3>About This Place</h3>
      <div className="overview-menu-container">
        <div className="overview-menu--title">Menu</div>
        {
          <img
            className="overview-menu-image"
            src={menuImage}
            width="200"
            height="300"
            alt=""
          />
        }
      </div>
      <div className="overview-details-container">
        <div className="cuisines-details">
          <div className="cuisines-details-title">Cuisines</div>
          {cuisines.map((item)=>(
            <div key={item.id}>
              <Button variant="outlined">{item.cusineOne}</Button>
              <Button variant="outlined">{item.cusineTwo}</Button>
              <Button variant="outlined">{item.cusineThree}</Button>
            </div>
          ))}
        </div>
        <div className="popular-dishes-details">
          <div className="popular-dishes-title">Popular Dishes</div>
          <div className="popular-dishes-name">{popularDishes}</div>
        </div>
        <div className="average-cost-details">
          <div className="average-cost-title">Average Cost</div>
          <div className="average-cost-amount">
            {" "}
            &#8377;{estimatedAmount} (approx.)
          </div>
        </div>
      </div>
    </div>
  );
}
