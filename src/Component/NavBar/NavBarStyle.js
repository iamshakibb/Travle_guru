import { makeStyles } from "@material-ui/core/styles";

export const navstyle = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
    backgroundColor: "#ffffff33",
    border: "1px solid #fff",
  },

  // input icon style
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff",
  },
  iconButton: {
    padding: 10,
  },

  // navbar style
  navbar: {
    position: "relative",
    zIndex: 999,
    color: "#fff",
    display: "flex",
    paddingTop: "10px",
    marginBottom: "60px",
  },

  // search icon
  SearchIcon: {
    color: "#fff",
  },

  // logo
  logo: {
    width: "10%",
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "90%",
    },
  },

  // nav menu / link style
  navMenu: {
    width: "90%",
    display: "flex",
    justifyContent: "flex-end",

    "& ul": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      listStyle: "none",
      // marginRight: "30px",
      marginLeft: "30px",
    },

    "& ul li": {
      paddingRight: "30px",
      fontSize: "1em",
      fontWeight: "300",
    },
  },
  // logoin button style
  logInBtn: {
    backgroundColor: "#F9A51A",
    color: "#fff",
    width: "104px",
    height: "44px",
    boxShadow: "none",
    borderRadius: "5px",
    marginTop: "10px",

    "&:hover": {
      backgroundColor: "#F9A51A",
      boxShadow: "none",
    },
  },

  // mobile slide nav bar style
  menuSliderContainer: {
    width: "100vw",
    background: "#000",
    height: "30rem",
    color: "#fff",
    fontSize: " 1.5em",
  },

  sliderText: {
    textAlign: "center",
    paddingBottom: "15px",
  },

  sliderList: {
    paddingTop: "80px",
  },

  username: {
    fontWeight: 600,
    marginTop: "10px",
    marginRight: "25px",
    padding: "10px",
    border: "2px solid #fff",
  },
}));
