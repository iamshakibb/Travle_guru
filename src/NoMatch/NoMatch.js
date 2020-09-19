import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const noMatchStyle = makeStyles({
  heading: {
    color: "red",
  },
});
const NoMatch = () => {
  const classes = noMatchStyle();
  return (
    <Container>
      <Grid container alignItems="center" justify="center">
        <Grid item xm={10}>
          <Typography variant="h1" display="block" gutterBottom className={classes.heading}>
            Not find the page
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NoMatch;
