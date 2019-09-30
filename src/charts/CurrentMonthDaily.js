import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

import { Line } from "react-chartjs-2";
import { date, months } from "../utils";

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

const CurrentMonthDaily = data => {
  const classes = useStyles();

  // data = data[date.getFullYear()];
  console.log("data ==>", data);
  let values = [];
  for (const key of Object.keys(data)) {
    values.push(data[key][date.getFullYear()]);
  }
  console.log("values ==>", values);
  let labels = Object.keys(data);
  labels = labels.map(label => `${months[date.getMonth()]} ${label}`);
  console.log("labels ==>", labels);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Total number of tweets",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: values
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Daily total tweets for {months[date.getMonth()]},{" "}
            {date.getFullYear()}
          </Typography>
          {data.length === 0 ? (
            <Skeleton variant="rect" height={200} />
          ) : (
            <Line data={chartData} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrentMonthDaily;
