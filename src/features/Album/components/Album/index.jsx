import React from "react";
import "./style.css";

function AlbumItem({ albumItem }) {
  return (
    <div>
      <img src={albumItem.thumbnail} alt={albumItem.name} />
      <h6>{albumItem.name}</h6>
    </div>
  );
}

export default AlbumItem;
