import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";

const Destination = () => {
  return (
    <Container>
      <Grid container alignItems="center" justify="center">
        <Grid item xm={10}>
          <Typography variant="h1" display="block" gutterBottom>
            This page is under development
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Destination;
