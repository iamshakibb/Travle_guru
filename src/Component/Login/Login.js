import React, { useContext, useState } from "react";
import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { firebaseInit } from "../../Firebase/Firebase";
import { UserInfoContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import * as firebase from "firebase/app";
import { LoginStyle } from "./LoginStyle";

firebaseInit();

const Login = () => {
  // setting the body hight
  const body = document.querySelector("body");
  body.style.height = "110vh";

  // adding the style
  const classes = LoginStyle();
  const user = useContext(UserInfoContext);
  const { userInfo, setUserInfo } = user;
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // google login
  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const newuser = { ...userInfo };
        newuser.signupError = "";
        setUserInfo(newuser);
        const { displayName, email } = result.user;
        const info = {
          islogin: true,
          name: displayName,
          email: email,
        };
        setUserInfo(info);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorMessage = error.message;
        const info = {
          islogin: false,
        };

        setUserInfo(info);
        setUserInfo({ ...userInfo, signupError: errorMessage });
      });
  };
  // google login

  //facebook login
  const facebookLogin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const newuser = { ...userInfo };
        newuser.signupError = "";
        setUserInfo(newuser);
        const { displayName } = result.user;
        const info = {
          islogin: true,
          name: displayName,
          email: result.additionalUserInfo.profile.email,
        };
        setUserInfo(info);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorMessage = error.message;
        const info = {
          islogin: false,
        };

        setUserInfo(info);
        setUserInfo({ ...userInfo, signupError: errorMessage });
      });
  };
  //facebook login

  // Password and email validation
  const [isvalid, setIsvalid] = useState(false);
  /* eslint-disable */
  const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  /* eslint-enable*/

  const validdation = () => {
    if (passwordRegex.test(userInfo.password) && emailRegex.test(userInfo.email)) {
      if (userInfo.password === userInfo.rePassword) {
        setIsvalid(true);
        userInfo.signupError = "";
      } else {
        setUserInfo({ ...userInfo, signupError: "You Password didn't match " });
      }
    } else {
      setUserInfo({ ...userInfo, signupError: "You password or Email didn't meet with our condition" });
    }
  };
  // Password and email validation

  // setting the state is create account from open or not
  const [isCreateAccounntOpen, setIsCreateAccountOpen] = useState(true);

  // signUp or login with email and password
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isCreateAccounntOpen === true && isvalid === true) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(() => {
          userInfo.success = true;
          const newuser = { ...userInfo };
          newuser.signupError = "";
          setUserInfo(newuser);
          const user = firebase.auth().currentUser;

          user.updateProfile({
            displayName: userInfo.name,
          });
        })
        .catch(function (error) {
          userInfo.success = true;
          const errorMessage = error.message;
          setUserInfo({ ...userInfo, signupError: errorMessage });
        });
    }
    if (isCreateAccounntOpen === false) {
      firebase
        .auth()
        .signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then((res) => {
          const newuser = { ...userInfo };
          newuser.signupError = "";
          setUserInfo(newuser);
          const { displayName, email } = res.user;
          const info = {
            islogin: true,
            name: displayName,
            email: email,
          };
          setUserInfo(info);
          history.replace(from);
        })
        .catch(function (error) {
          const errorMessage = error.message;
          const info = {
            islogin: false,
          };

          setUserInfo(info);
          setUserInfo({ ...userInfo, signupError: error.message });
          console.log(errorMessage);
        });
    }
  };

  // conditon for which form are open
  const showCreateForm = () => {
    setIsCreateAccountOpen(true);
    const newuser = { ...userInfo };
    newuser.signupError = "";
    setUserInfo(newuser);
  };
  const showLoinForm = () => {
    setIsCreateAccountOpen(false);
    const newuser = { ...userInfo };
    newuser.signupError = "";
    newuser.success = "";
    setUserInfo(newuser);
  };

  // is password input focus or not to show the message
  const [isFocus, setIsFocus] = useState(false);

  // show password message
  const handlePasswordMessage = () => {
    setIsFocus(true);
  };
  return (
    <Container className={`container ${classes.container}`}>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={8} className={classes.LoginDivCenter}>
          <Grid container className={classes.LoginContainer}>
            <Grid item xs={12}>
              <Paper component="div" className={classes.LoginContainer}>
                <Typography variant="caption" display="block" gutterBottom className={classes.message}>
                  {userInfo.signupError}
                </Typography>

                {userInfo.success === true ? (
                  <Typography className={classes.success} variant="h5" display="block" gutterBottom>
                    Account created successfully
                  </Typography>
                ) : null}

                {isCreateAccounntOpen === true ? (
                  <Typography variant="h5" display="block" gutterBottom>
                    Create an account
                  </Typography>
                ) : (
                  <Typography variant="h5" display="block" gutterBottom>
                    LogIn
                  </Typography>
                )}

                <form onSubmit={handleFormSubmit}>
                  {isCreateAccounntOpen === true ? (
                    <TextField
                      type="text"
                      className={classes.input}
                      label="Your Username"
                      variant="outlined"
                      name="Username"
                      required
                      fullWidth
                      onBlur={(event) => {
                        const newuser = { ...userInfo, name: event.target.value };
                        setUserInfo(newuser);
                      }}
                    />
                  ) : null}

                  <TextField
                    type="email"
                    className={classes.input}
                    onBlur={(event) => {
                      userInfo.email = event.target.value;
                      validdation();
                    }}
                    label="Email"
                    variant="outlined"
                    name="email"
                    required
                    fullWidth
                  />

                  {isFocus === true ? (
                    <Typography variant="caption" display="block" gutterBottom className={classes.message}>
                      password must have to be 6 caracter long and you have to put at last 1 small ,capital carater and number
                    </Typography>
                  ) : null}
                  <TextField
                    type="password"
                    className={classes.input}
                    label="Password"
                    variant="outlined"
                    name="password"
                    required
                    fullWidth
                    onBlur={(event) => {
                      userInfo.password = event.target.value;
                      setIsFocus(false);
                      validdation();
                    }}
                    onFocus={handlePasswordMessage}
                  />

                  {isCreateAccounntOpen === true ? (
                    <TextField
                      type="password"
                      className={classes.input}
                      label="Re-Password"
                      variant="outlined"
                      name="re-password"
                      required
                      fullWidth
                      onBlur={(event) => {
                        userInfo.rePassword = event.target.value;
                        validdation();
                      }}
                    />
                  ) : null}

                  {isCreateAccounntOpen === true ? (
                    <>
                      <Button type="submit" variant="contained" className={classes.LoginwithBtn}>
                        Create an account
                      </Button>
                      <Typography variant="caption" display="block" align="center" gutterBottom>
                        Already have an account?{" "}
                        <span onClick={showLoinForm} className={classes.title}>
                          Login.
                        </span>
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Button type="submit" variant="contained" className={classes.LoginwithBtn}>
                        Login
                      </Button>
                      <Typography variant="caption" align="center" display="block" gutterBottom>
                        Don't have an account?{" "}
                        <span onClick={showCreateForm} className={classes.title}>
                          Create an account.
                        </span>
                      </Typography>
                    </>
                  )}
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper component="div" className={classes.LoginfbandgoogleContainer}>
                <Grid container direction="row">
                  <Grid item xs={12}>
                    <Button variant="contained" className={classes.LoginwithBtn} onClick={googleLogin}>
                      Google
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" className={classes.LoginwithBtn} onClick={facebookLogin}>
                      Facebook
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
