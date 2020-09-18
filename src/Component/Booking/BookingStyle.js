import { makeStyles } from "@material-ui/core";

export const bookingStyle = makeStyles({
  hotelContainer: {
    width: "100%",
    height: "auto",
    padding: "15px",
  },
  bookingContainer: {
    marginTop: "-40px",
    marginBottom: "30px",
  },

  hotelImg: {
    width: "100%",
    marginBottom: "15px",
  },

  hoteldiscription: {
    padding: "10px",
    marginBottom: "15px",
  },

  hoteldetail: {
    border: "none",
    boxShadow: "none",
    color: "#6A6A6A",
  },

  hotelrateandPrice: {
    border: "none",
    boxShadow: "none",
    display: "flex",

    "& span": {
      fontWeight: 600,
      paddingLeft: "5px",

      "& span": {
        fontWeight: 400,
      },
    },
  },

  star: {
    color: "#FFAF38",
  },
});
