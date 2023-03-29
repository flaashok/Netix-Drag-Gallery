import React from "react";

const Box = ({ boxType, boxTitle, boxImg, handleDrag, handleDrop }) => {
  return (
    <div
      draggable={true}
      id={boxType}
      onDragOver={(ev) => ev.preventDefault()}
      onDragStart={handleDrag}
      onDrop={handleDrop}> 
      <span> {boxTitle} </span>
      <img src={boxImg} alt={boxType}/>
    </div>
  );
};

export default Box;
