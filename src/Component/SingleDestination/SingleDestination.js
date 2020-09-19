import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FakedataContext } from "../../App";
import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { SingleDestinationStyle } from "./SingleDestinationStyle";

const SingleDestination = () => {
  const classes = SingleDestinationStyle();
  const { name } = useParams();
  const data = useContext(FakedataContext);
  const allDestination = data.destinations;
  const targetDestination = allDestination.find((destination) => destination.name === name);
  const history = useHistory();
  let locationValue = "";
  let fromDateValue = "";
  let toDateValue = "";

  const LocationChange = (e) => {
    locationValue = e.target.value;
  };
  const FromDateChange = (e) => {
    fromDateValue = e.target.value;
  };
  const ToDateChange = (e) => {
    toDateValue = e.target.value;
  };
  const gotoBooking = (e) => {
    const bookPath = `/booking/${name}/hotel`;
    if (locationValue !== "" && fromDateValue !== "" && toDateValue.length !== "") {
      history.push(bookPath);
    } else {
      history.push();
    }
    e.preventDefault();
  };
  return (
    <Container className={classes.SingleDestinationContianer}>
      <Grid container direction="row">
        <Grid item xs={12} md={6}>
          <Paper component="div" className={classes.destinationText} key={targetDestination.id}>
            <Typography variant="h1">{targetDestination.name}</Typography>
            <Typography variant="body1">{targetDestination.BigDiscription}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <form className={classes.root} onSubmit={gotoBooking}>
            <Paper component="div" className={classes.formContainer}>
              <Typography variant="caption" display="block" gutterBottom className={classes.title}>
                Origin
              </Typography>
              <TextField
                className={classes.input}
                onChange={LocationChange}
                required
                type="text"
                label="Your location"
                variant="outlined"
                name="Location"
              />
              <Typography variant="caption" display="block" gutterBottom className={classes.title}>
                Destination
              </Typography>
              <TextField
                type="text"
                className={classes.input}
                label="The place you want to go"
                value={targetDestination.name}
                variant="outlined"
                name="Destination"
                required
              />
              <Grid container spacing={2}>
                <Grid item xm={6}>
                  <Typography variant="caption" display="block" gutterBottom className={classes.title}>
                    From
                  </Typography>
                  <TextField
                    className={classes.input}
                    required
                    variant="outlined"
                    onChange={FromDateChange}
                    type="date"
                    format="yyyy-MM-dd"
                    name="From Date"
                  />
                </Grid>
                <Grid item xm={6}>
                  <Typography variant="caption" display="block" gutterBottom className={classes.title}>
                    To
                  </Typography>
                  <TextField
                    className={classes.input}
                    onChange={ToDateChange}
                    required
                    variant="outlined"
                    format="yyyy-MM-dd"
                    type="date"
                    name="To Data"
                  />
                </Grid>
                <Grid item xm={12}>
                  <Button variant="contained" type="submit" className={`logInBtn ${classes.StartBookingBtn} `}>
                    Start Booking
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleDestination;
