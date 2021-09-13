import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const Header = () => {
  const useStyles = makeStyles({
    heading: {
      color: "#ccc",
      fontWeight: "300",
      textAlign: "center",
      margin: "50px 20px 60px 20px",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.heading}>
      <Typography variant="h2">Task Manager</Typography>
    </div>
  );
};

export default Header;
