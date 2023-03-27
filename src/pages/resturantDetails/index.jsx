import React, { useState } from "react";
import "./index.css";
import { categories } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import DirectionsOutlinedIcon from "@mui/icons-material/DirectionsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import OverView from "../../components/resturantoverview";
import OrderOnline from "../../components/orderonline";
import Reviews from "../../components/reviews";
import Photos from "../../components/photos";

function ResturantDetails() {
  const { categoryid, resturantid } = useParams();
  const [resturantsDetails, setResturantDetails] = useState(null);
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("OVERVIEW");
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
      <div className="details-images-container">
        {resturantsDetails &&
          resturantsDetails.images.map((imageurl, index) => (
            <img key={index} src={imageurl} width={400} height={300} alt="" />
          ))}
      </div>
      <div className="detail-items-container">
        <div className="details-items">
          <div className="details-item-name">{resturantsDetails?.name}</div>
          <div className="details-item-rating">
            {resturantsDetails?.rating} &#9734;
          </div>
        </div>
        <div className="details-item-address">{resturantsDetails?.variety}</div>
        <div className="details-item-amount">{resturantsDetails?.address}</div>
        <div className="share-details">
          <Button variant="outlined">
            <DirectionsOutlinedIcon />
            Direction
          </Button>
          <Button variant="outlined">
            <BookmarkAddOutlinedIcon />
            Bookmark
          </Button>
          <Button variant="outlined">
            <ShareOutlinedIcon />
            Share
          </Button>
        </div>
        <div className="resturant-details-tabs">
          <div
            className={`resturant-details-tab-item ${
              currentView === "OVERVIEW" ? "active-tab" : ""
            }`}
            onClick={() => {
              setCurrentView("OVERVIEW");
            }}
          >
            Overview
          </div>
          <div
            className={`resturant-details-tab-item ${
              currentView === "ORDER_ONLINE" ? "active-tab" : ""
            }`}
            onClick={() => {
              setCurrentView("ORDER_ONLINE");
            }}
          >
            Order Online
          </div>
          <div
            className={`resturant-details-tab-item ${
              currentView === "REVIEWS" ? "active-tab" : ""
            }`}
            onClick={() => {
              setCurrentView("REVIEWS");
            }}
          >
            Reviews
          </div>
          <div
            className={`resturant-details-tab-item ${
              currentView === "PHOTOS" ? "active-tab" : ""
            }`}
            onClick={() => {
              setCurrentView("PHOTOS");
            }}
          >
            Photos
          </div>
        </div>
      </div>
      <div className="resturant-tabs-details">
        {currentView === "OVERVIEW" ? (
          <OverView  menuItems={resturantsDetails?.menuItems}/>
        ) : currentView === "ORDER_ONLINE" ? (
          <OrderOnline menuItems={resturantsDetails?.menuItems} />
        ) : currentView === "REVIEWS" ? (
          <Reviews
            name={resturantsDetails?.name}
            reviews={resturantsDetails?.reviewItems}
          />
        ) : currentView === "PHOTOS" ? (
          <Photos items={resturantsDetails?.images || []} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ResturantDetails;
