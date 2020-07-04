import React from "react";
import Button from "@material-ui/core/Button";
function Square(props) {
  return (
    <Button variant="outlined" color="secondary" onClick={props.onClick}>
      {props.value}
    </Button>
  );
}

export default Square;
