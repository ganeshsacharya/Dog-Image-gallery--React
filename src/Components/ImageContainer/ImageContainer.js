import React from "react";
import { enabled, title } from "../../utils/constants";
import Button from "../Button/Button";
import styles from "./ImageContainer.module.css";

function ImageContainer({ imageConatiner }) {
  return (
    <div className="image_container">
      <Button title={title.previousBtnTitle}></Button>
      <div
        className={
          imageConatiner ? imageConatiner : styles.main_image_conatiner
        }
      ></div>
      <Button title={title.nextBtnTitle} style={enabled}></Button>
    </div>
  );
}

export default ImageContainer;
