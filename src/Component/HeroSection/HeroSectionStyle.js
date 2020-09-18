import { makeStyles } from "@material-ui/core";

export const heroSectionStyle = makeStyles({
  HeroSection: {
    position: "relative",
    zIndex: 999,
  },
  // // destination text style
  destinationText: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#fff",
    "& h1": {
      fontFamily: "Bebas Neue",
    },
  },

  // booking btn style
  bookingBtn: {
    marginTop: "20px",
    width: "160px",
    height: "48px",
    backgroundColor: "#F9A51A",
    color: "#fff",

    "&:hover": {
      backgroundColor: "#F9A51A",
    },
  },

  // destination img slider arrows
  destinationImgslider: {
    "& .slick-prev": {
      top: "110%",
      transform: "translate(10%, -110%)",
      left: "-10%",
      zIndex: 999,
    },

    "& .slick-next": {
      bottom: "0px",
      top: "110%",
      transform: "translate(0, -110%)",
      right: "90%",
      zIndex: 999,
    },

    "& .slick-prev::before ": {
      fontSize: "40px",
    },
    "& .slick-next::before": {
      fontSize: "40px",
    },
  },

  // destination img contaienr style
  destinationImgContainer: {
    backgroundColor: "transparent",
    margin: "0 50px",
    border: "none",
    boxShadow: "none",
  },

  // destination img style
  destinationimg: {
    width: "270px",
    height: "416px",
    backgroundColor: "transparent",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "none",
    boxShadow: "none",
    marginLeft: "110px",
  },
});
