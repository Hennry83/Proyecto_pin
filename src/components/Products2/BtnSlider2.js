import React from "react";
import '../../assets/css/styles.scss'
import leftArrow from "../../assets/imagenes/Icon feather-arrow-left-circle.png";
import rightArrow from "../../assets/imagenes/Icon feather-arrow-right-circle.png";

export default function BtnSlider2({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}