import React from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

export default function OrderOnline(props) {
  const { menuItems } = props;
  console.log("menuItems", menuItems);
  return (
    <div className="OrderOnline-container">
      <div className="OrderOnline-left">
        <div> Menu Today's Exclusive Dishes (3)</div>
      </div>
      <div className="OrderOnline-right">
        <div className="OrderOnline-right-header">
          <div className="OrderOnline-right-header-title">Order Online</div>
          <div className="OrderOnline-search">
            <SearchIcon className="OrderOnline-search-icon" fontSize="30px" />
            <input
              type="text"
              className="OrderOnline-search-input"
              placeholder="Search within menu"
            />
            <ClearIcon className="OrderOnline-search-clear" fontSize="30px" />
          </div>
        </div>
        <div className="OrderOnline-right-menu-items">
            {menuItems.map((item)=>(
                <div className="menu-item" key={item.id}>
                    <img src={item.imageurl} width="100px" height="100px" alt=""/>
                    <div className="menu-item-details">
                        <div className="menu-item-details-title">{item.name}</div>
                        <div className="menu-item-details-rating">{item.rating}</div>
                        <div className="menu-item-details-price">{item.price}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
