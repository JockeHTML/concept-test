import { Button } from "@material-ui/core";
import React, { useState } from "react";

const Calc = () => {
  const [numbers, setNumbers] = useState(0);

  //after 2s setting numbers after how many clicks i did. possible trough getting the prevNumbers.
  const handleDelay = () => {
    setTimeout(() => {
      setNumbers((prevNumbers) => {
        return prevNumbers + 1;
      });
    }, 2000);
  };

  return (
    <>
      <div
        style={{ display: "flex", paddingBottom: "10rem" }}
        className="buttons"
      >
        <div className="increase">
          <Button
            style={{ marginRight: "16px" }}
            variant="contained"
            color="primary"
            onClick={() => setNumbers(numbers + 1)}
          >
            INCREASE
          </Button>
        </div>
        <div className="decrease">
          <Button
            onClick={() => setNumbers(numbers - 1)}
            variant="contained"
            color="primary"
          >
            DECREASE
          </Button>
        </div>
        <div className="increase">
          <Button
            style={{ marginLeft: "16px" }}
            variant="contained"
            color="primary"
            onClick={handleDelay}
          >
            DELAY CLICKS
          </Button>
        </div>
        <h1 style={{ marginLeft: "16px" }}>{numbers}</h1>
      </div>
    </>
  );
};

export default Calc;
