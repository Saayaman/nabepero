import React from "react";
import Button from './button';

export const BioGraphi = () => {
  return (
    <>
      <img
        id="bio"
        className="bioimage"
        src={require("../assets/images/design1.png")}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          text="今すぐ無料相談！"
        />
      </div>
    </>
  );
};
