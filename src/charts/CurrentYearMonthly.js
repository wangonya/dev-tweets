import React from "react";
import axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

import { Line } from "react-chartjs-2";

import { apiUrl, date, months } from "../utils";

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

class CurrentYearMonthly extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.getData().catch(e => console.log(e));
  }

  getData = async () => {
    let res = await axios.get(apiUrl);
    let { data } = res;
    this.setState({ data: data });
  };

  render() {
    const { classes } = this.props;

    let values = [];
    for (const key of Object.keys(this.state.data)) {
      values.push(this.state.data[key]["all_tweets"]);
    }
    let labels = Object.keys(this.state.data);

    labels = labels.map(label => `${months[date.getMonth()]} ${label}`);
    const chartData = {
      labels,
      datasets: [
        {
          label: "2019",
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
              Monthly totals per year
            </Typography>
            {this.state.data.length === 0 ? (
              <Skeleton variant="rect" height={200} />
            ) : (
              <Line data={chartData} />
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(CurrentYearMonthly);
