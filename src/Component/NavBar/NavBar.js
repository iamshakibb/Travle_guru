import React, { useContext, useState } from "react";
import { Box, Button, Container, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@material-ui/core";
import LOGO from "../../Images/Logo.png";
import { navstyle } from "./NavBarStyle";
import MenuIcon from "@material-ui/icons/Menu";
import MobilLeftMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import { UserInfoContext } from "../../App";

const NavBar = () => {
  const classes = navstyle();

  // setting the state is nav bar open or not
  const [open, setopen] = useState({
    left: false,
  });

  // toggling the nav icon
  const toggleSlider = (slider, isopen) => {
    setopen({ ...isopen, [slider]: isopen });
  };

  // slide the navbar  in mobile
  const sliderSection = (slider) => (
    <Box className={classes.menuSliderContainer} component="div" onClick={() => toggleSlider(slider, false)}>
      <List className={classes.sliderList}>
        <ListItem button component={Link} to="/">
          <ListItemText className={classes.sliderText} primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/destination">
          <ListItemText className={classes.sliderText} primary="Destination" />
        </ListItem>
        <ListItem button component={Link} to="/blog">
          <ListItemText className={classes.sliderText} primary="Blog" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText className={classes.sliderText} primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  // userinfo
  const user = useContext(UserInfoContext);
  const { userInfo, setUserInfo } = user;

  const logoutBtn = () => {
    setUserInfo({
      islogin: false,
      name: "",
      email: "",
      photoURL: "",
    });
  };
  return (
    <Container>
      <nav className={classes.navbar}>
        <div className={`logo ${classes.logo}`}>
          <Link to="/">
            <img src={LOGO} alt="logo" />
          </Link>
        </div>
        <div className={classes.navMenu}>
          <ul className="desktop">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/destination">
              <li>Destination</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>

          {userInfo.islogin || userInfo.islogin === undefined ? (
            <>
              <Typography variant="body1" className={classes.username}>
                {userInfo.name}
              </Typography>
              <Button variant="contained" onClick={logoutBtn} className={`logInBtn ${classes.logInBtn} `}>
                Log out
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="contained" className={`logInBtn ${classes.logInBtn} `}>
                Login
              </Button>
            </Link>
          )}
          <Toolbar className="nav_icon mobile">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleSlider("bottom", true)}>
              <MenuIcon />
            </IconButton>
            <MobilLeftMenuSlider open={open.bottom} anchor="bottom" onClose={() => toggleSlider("bottom", false)}>
              {sliderSection("bottom")}
            </MobilLeftMenuSlider>
          </Toolbar>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
