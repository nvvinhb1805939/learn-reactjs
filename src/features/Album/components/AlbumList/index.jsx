import React from "react";
import AlbumItem from "../Album";
import "./style.scss";

function AlbumList({ albumList }) {
  return (
    <ul className="album__list">
      {albumList.map(albumItem => (
        <li key={albumItem.id} className="album__item">
          <AlbumItem albumItem={albumItem} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
