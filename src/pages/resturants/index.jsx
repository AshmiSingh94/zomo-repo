import React, { useState } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import { categories } from "../../utils/constants";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

function Resturants() {
  const navigate = useNavigate();
  const { categoryid } = useParams();
  const [resturantList, setResturantList] = useState([]);

  const handleNavigation = (item) => {
    navigate(`/catgegories/${categoryid}/resturant/${item.id}`);
  };

  React.useEffect(() => {
    const selectedCategory = categories.find((item) => item.id === categoryid);
    if (selectedCategory) {
      setResturantList(selectedCategory.resturants);
    }
  }, [categoryid]);

  return (
    <div className="Resturants-container">
      {resturantList.map((item) => (
          <Card
            sx={{ width: 345 }}
            onClick={() => {
              handleNavigation(item);
            }}
            key={item.id}
            className="Resturants-item"
          >
            <CardMedia
              component="img"
              height="194"
              image={item.images.length > 0 ? item.images[0] : ""}
              alt=""
            />
            <CardContent>
              <div className="title-container">
                <div className="title">{item.name}</div>
                <div className="Resturants-rating">{item.rating} &#9734;</div>
              </div>
              <div className="variety-container">
                <div className="variety-item"> {item.variety} </div>
                <div className="variety-item"> {item.estimatedAmount} </div>
              </div>
              <div>{item.totalordersDelivered}</div>
            </CardContent>
          </Card>
      ))}
    </div>
  );
}

export default Resturants;
