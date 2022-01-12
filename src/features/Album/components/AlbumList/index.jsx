import React from "react";
import AlbumItem from "../Album";
import "./style.css";

function AlbumList({ albumList }) {
  return (
    <ul>
      {albumList.map(albumItem => (
        <li key={albumItem.id}>
          <AlbumItem albumItem={albumItem} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
