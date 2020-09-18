const { makeStyles } = require("@material-ui/core");

export const SingleDestinationStyle = makeStyles({
  SingleDestinationContianer: {
    position: "relative",
    zIndex: 999,
  },

  destinationText: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#fff",
    marginTop: "50px",
    "& h1": {
      fontFamily: "Bebas Neue",
    },
  },

  formContainer: {
    width: "470px",
    height: "440px",
    padding: "30px",
    marginLeft: "20px",
  },

  title: {
    color: "#818181",
    fontSize: "1em",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    marginBottom: "15px",
    "& input": {
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },

  StartBookingBtn: {
    backgroundColor: "#F9A51A",
    color: "#fff",
    width: "400px",
    height: "44px",
    boxShadow: "none",
    borderRadius: "5px",
  },
});
