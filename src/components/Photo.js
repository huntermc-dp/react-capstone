import React from "react";
import Photo from "./fish.png"; // Import the image
import Photo from "./Hunter.png";

function photo() {
  return (
    <div>
      <h1>My React App</h1>
      <img src={Photo} alt="My Image" />
    </div>
  );
}

export default photo;
