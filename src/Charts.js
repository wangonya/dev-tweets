import React from "react";
import Grid from "@material-ui/core/Grid";

import { apiUrl } from "./utils";
import { useFetch } from "./hooks";

import CurrentMonthDaily from "./charts/CurrentMonthDaily";
import CurrentYearMonthly from "./charts/CurrentYearMonthly";

const Charts = () => {
  const data = useFetch(apiUrl);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <CurrentMonthDaily data={data} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CurrentYearMonthly data={data} />
      </Grid>
    </Grid>
  );
};

export default Charts;
