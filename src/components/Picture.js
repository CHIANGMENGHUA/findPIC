import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img
          srcSet={`${data.src.original}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940&fm=webp`}
          src={data.src.original}
          alt={data.photographer}
        />
      </div>
      <p>
        <a target="_blank" href={data.src.large} rel="noreferrer">
          放大顯示
        </a>
      </p>
    </div>
  );
};

export default Picture;
