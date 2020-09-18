import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FakedataContext } from "../../App";
import { bookingStyle } from "./BookingStyle";

const Booking = () => {
  // calling fake data from context
  const data = useContext(FakedataContext);
  // booking page style
  const classes = bookingStyle();
  const { name } = useParams();
  const body = document.querySelector("body");
  body.style.height = "125vh";

  return (
    <Container className={`container ${classes.bookingContainer}`}>
      <Grid container>
        <Grid item md={6} xm={12}>
          <Paper component="div" className={classes.hotelContainer}>
            <Typography variant="h6" display="block" gutterBottom>
              Stay in {name}
            </Typography>
            {data.hotels.map((hotel) => (
              <Grid container key={hotel.id}>
                <Grid item md={6} xs={12}>
                  <img src={hotel.img} className={classes.hotelImg} alt="Rectangle-27" />
                </Grid>
                <Grid item md={6} xs={12} className={classes.hoteldiscription}>
                  <Typography variant="h6" display="block" gutterBottom>
                    {hotel.name}
                  </Typography>
                  <Paper component="div" className={classes.hoteldetail}>
                    <Typography variant="caption" display="block" gutterBottom>
                      {hotel.guests} guests {hotel.bedrooms} bedrooms {hotel.bed} beds {hotel.bath} baths
                    </Typography>
                    <Typography variant="body1" display="block" gutterBottom>
                      Wif Air conditioning Kitchen
                    </Typography>
                    <Typography variant="body1" display="block" gutterBottom>
                      Cancellation fexibility availiable
                    </Typography>
                  </Paper>
                  <Paper component="div" className={classes.hotelrateandPrice}>
                    <Typography variant="body1" display="block" gutterBottom>
                      <FontAwesomeIcon icon={faStar} className={classes.star} />
                      <span>
                        {hotel.rateing} ({hotel.numberofpeopleRate})
                      </span>
                    </Typography>

                    <Typography variant="body1" display="block" gutterBottom>
                      <span>
                        ${hotel.singlePrice}/<span>Night</span>
                      </span>
                    </Typography>
                    <Typography variant="body1" display="block" gutterBottom>
                      <span>
                        ${hotel.total} <span>Total</span>
                      </span>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Grid>
        <Grid item md={6} xm={12}></Grid>
      </Grid>
    </Container>
  );
};

export default Booking;
