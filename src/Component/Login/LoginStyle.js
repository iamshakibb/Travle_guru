import { makeStyles } from "@material-ui/core";

export const LoginStyle = makeStyles({
  container: {
    marginTop: "-65px",
  },

  LoginDivCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  LoginContainer: {
    width: "450px",
    padding: "20px",
  },

  LoginfbandgoogleContainer: {
    width: "420px",
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "30px",
  },

  LoginwithBtn: {
    width: "100%",
    marginBottom: "20px",
    backgroundColor: "#F9A51A",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#F9A51A",
    },
  },
  input: {
    border: "none",
    marginBottom: "20px",
  },

  title: {
    color: "#F9A51A",
    cursor: "pointer",
  },

  message: {
    color: "salmon",
    paddingBottom: "5px",
  },
});
