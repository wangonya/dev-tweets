import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(6)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ toggleTheme }) => {
  const classes = useStyles();

  return <div className={classes.root}>Header here</div>;
};

export default Header;
