import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    minWidth: 275,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    fontSize: 14
  }
}));

const CurrentYearMonthly = data => {
  return <p>CurrentYearMonthly chart</p>;
};

export default CurrentYearMonthly;
