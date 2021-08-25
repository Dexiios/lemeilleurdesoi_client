import React from "react";
import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundMessage,
} from "./NotFoundElements";
import NotFoundImage from "../../images/404_image.png";

const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <NotFoundImg src={NotFoundImage}></NotFoundImg>
        <NotFoundMessage>Oups, on dirait que vous vous êtes perdus.</NotFoundMessage>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
