import React from "react";
import "./index.css";
function Reviews(props) {
  const { name, reviews } = props;
  return (
    <div className="navbar-container">
      <div className="navar-title">
        <div>{name} Reviews</div>
      </div>
      <div className="review-navbar">
        <div className="review-navbar-left">
          <div>
          <select name="reviews" id="review">
            <option value="All Reviews">All Reviews</option>
            <option value="following">Following</option>
            <option value="popular">Popular</option>
            <option value="blogger">Bloggers</option>
            <option value="my reviews">My Reviews</option>
            <option value="order reviews">Order Reviews</option>
          </select>
          </div>
          <div className="review-navbar-left-items">
            {reviews.map((item) => (
              <div className="review-navbar-left-item" key={item.id}>
                <div className="review-navbar-left-items-header">
                  <img
                    className="review-navbar-left-items-image"
                    src={item.image}
                    width="50"
                    height="50"
                    alt=""
                  />
                  <div>
                    <div  className="review-navbar-left-items-name" >{item.name}</div>
                    <div className="review-navbar-left-items-review"  >
                      {item.reviewNumber}   {item.follower}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="review-navbar-left-items-rating">{item.rating} &#9734; DELIVERY</div>
                  <div className="review-navbar-left-items-description">{item.description} </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="review-navbar-right">
          <select name="" id="">
            <option value="Oldest First">Oldest First</option>
            <option value="Newest First">Newest First</option>
            <option value="Highest Rated"> Highest Rated</option>
            <option value="Lowest Rated">Lowest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
