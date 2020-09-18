import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { heroSectionStyle } from "./HeroSectionStyle";
import Slider from "react-slick";
import "./css.css";
import { FakedataContext } from "../../App";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";

const HeroSection = () => {
  const data = useContext(FakedataContext);
  // console.log(data.destination[0]);
  const classes = heroSectionStyle();

  // setting the slider state
  const [leftNav, setLeftNav] = useState(null);
  const [rightNav, setRightNav] = useState(null);

  let _leftSlider = [],
    _rightSlider = [];

  useEffect(() => {
    setLeftNav(_leftSlider);
    setRightNav(_rightSlider);
  }, [_leftSlider, _rightSlider]);

  return (
    <Container className={`HeroSection ${classes.HeroSection}`}>
      <Grid container direction="row" justify="center" alignItems="center">
        {/* this grid use for only for mobile */}
        <Grid item xs={12} className={`mobile ${classes.destinationImgslider}`}>
          <Slider
            asNavFor={leftNav}
            ref={(slider) => {
              _rightSlider = slider;
            }}
            slidesToShow={1}
            swipeToSlide={true}
          >
            {data.destinations.map((destination) => (
              <Paper component="div" className={classes.destinationImgContainer} key={destination.id}>
                <Link to={`/destination/${destination.name}`}>
                  <Paper
                    component="div"
                    style={{ backgroundImage: `url(${destination.img})` }}
                    className={`sliderImg ${classes.destinationimg}`}
                  ></Paper>
                </Link>
              </Paper>
            ))}
          </Slider>
        </Grid>
        <Grid item md={5} sm={5} xs={12}>
          <Slider
            asNavFor={rightNav}
            ref={(slider) => {
              _leftSlider = slider;
            }}
            arrows={false}
          >
            {data.destinations.map((destination) => (
              <Paper component="div" className={classes.destinationText} key={destination.id}>
                <Typography variant="h1" className="destinationName">
                  {destination.name}
                </Typography>
                <Typography variant="body1">{destination.smallDiscription}</Typography>
                <Link to={`/destination/${destination.name}`}>
                  <Button variant="contained" className={classes.bookingBtn} endIcon={<ArrowForward />}>
                    Booking
                  </Button>
                </Link>
              </Paper>
            ))}
          </Slider>
        </Grid>
        {/* this grid will show only desktop and some mediam size device */}
        <Grid item xs={5} className={`desktop imgSlider ${classes.destinationImgslider}`}>
          <Slider
            asNavFor={leftNav}
            ref={(slider) => {
              _rightSlider = slider;
            }}
            slidesToShow={1}
            swipeToSlide={true}
          >
            {data.destinations.map((destination) => (
              <Paper component="div" className={classes.destinationImgContainer} key={destination.id}>
                <Link to={`/destination/${destination.name}`}>
                  <Paper component="div" style={{ backgroundImage: `url(${destination.img})` }} className={classes.destinationimg}></Paper>
                </Link>
              </Paper>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
