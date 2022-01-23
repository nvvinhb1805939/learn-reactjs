import React, { useEffect, useState } from "react";
import "./Avatar.scss";

function Avatar() {
  const [imagePath, setImagePath] = useState("");
  const handleChangeAvt = e => {
    const newImagePath = URL.createObjectURL(e.target.files[0]);
    setImagePath(newImagePath);
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(imagePath);
    };
  }, [imagePath]);
  return (
    <div className="avatar">
      <div className="avatar__wrapper">
        {imagePath && <img src={imagePath} alt="img" className="avatar__img" />}
        <input
          className="avatar__input"
          type="file"
          name="avt"
          id="avt"
          onChange={handleChangeAvt}
        />
        <label className="avatar__label" htmlFor="avt">
          Choose
        </label>
      </div>
    </div>
  );
}

export default Avatar;
