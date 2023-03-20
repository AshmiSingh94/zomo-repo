import React, { useState } from "react";
import { categories } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ResturantDetails() {
  const { categoryid, resturantid } = useParams();
  const [resturantsDetails, setResturantDetails] = useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    const selectedCategory = categories.find((item) => item.id === categoryid);
    if (selectedCategory) {
      const selectedrtRestaurant = selectedCategory.resturants.find(
        (item) => item.id === resturantid
      );
      if (selectedrtRestaurant) {
        setResturantDetails(selectedrtRestaurant);
        console.log(selectedrtRestaurant);
        return;
      }
    }
    navigate(-1);
  }, [categoryid, resturantid]);

  return (
    <div className="details-container">
      <div>
        {resturantsDetails && resturantsDetails.images.map((imageurl, index) => (
          <img key={index} src={imageurl} width={400} height={300} alt=""/>
        ))}
      </div>
      <div>
        {resturantsDetails?.name} 
        </div>
        <div>
        {resturantsDetails?.address}
        </div>
        <div>
        {resturantsDetails?.estimatedAmount}
        </div>
        <div>
        {resturantsDetails?.totalordersDelivered}
        </div>
    </div>
  );
}

export default ResturantDetails;
