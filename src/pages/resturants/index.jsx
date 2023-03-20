import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../utils/constants";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
function Resturants() {
  const { categoryid } = useParams();
  const [resturantList, setResturantList] = useState([]);

  React.useEffect(() => {
    const selectedCategory = categories.find((item) => item.id === categoryid);
    if (selectedCategory) {
      setResturantList(selectedCategory.resturants);
    }
  }, [categoryid]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {resturantList.map((item) => (
        <CardMedia
          component="img"
          height="194"
          image={item.images.length > 0 ? item.images[0] : ""}
          alt=""
        />
      ))}
      <Typography>
        
      </Typography>
    </Card>
  );
}

export default Resturants;
