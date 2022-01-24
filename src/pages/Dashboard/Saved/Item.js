import React from "react";
import { Redirect } from "react-router-dom";

const Item = ({ item }) => {
  const { designPhoto, userName, designName, designCategory, _id } = item;

  const handleDelete = (id) => {
    const sure = window.confirm("Do you want to delete this plan?");
    if (sure) {
      fetch(`https://radiant-journey-70403.herokuapp.com/saved/devplan/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            <Redirect to="/dashboard/dashHome"></Redirect>;
          }
        });
    }
  };

  return (
    <div className=" loved">
      <img src={designPhoto} alt="" />
      <div className="loved-text">
        <h5>Name: {designName}</h5>
        <h6>Author: {userName}</h6>
        <h6>Category: {designCategory}</h6>
        <button onClick={() => handleDelete(_id)} className="loved-button">
          Unsave!
        </button>
      </div>
    </div>
  );
};

export default Item;
