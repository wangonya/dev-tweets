import React from "react";
import Grid from "@material-ui/core/Grid";

import CurrentMonthDaily from "./charts/CurrentMonthDaily";
import CurrentYearMonthly from "./charts/CurrentYearMonthly";

const Charts = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <CurrentMonthDaily />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CurrentYearMonthly />
      </Grid>
    </Grid>
  );
};

export default Charts;
