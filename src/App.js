import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Booking from "./Component/Booking/Booking";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import NavBar from "./Component/NavBar/NavBar";
import PrivateRouter from "./Component/PrivateRouter/PrivateRouter";
import SingleDestination from "./Component/SingleDestination/SingleDestination";
import FakeData from "./FakeData/FakeData.json";
import NoMatch from "./NoMatch/NoMatch";

export const FakedataContext = createContext();
export const UserInfoContext = createContext();
function App() {
  const Data = FakeData;

  const [userInfo, setUserInfo] = useState({
    islogin: false,
    name: "",
    email: "",
    photoURL: "",
  });
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <FakedataContext.Provider value={Data}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/destination/:name">
              <SingleDestination />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            {/* <Route path="/booking/:name/hotel">
              <Booking />
            </Route> */}
            <PrivateRouter path="/booking/:name/hotel">
              <Booking />
            </PrivateRouter>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </FakedataContext.Provider>
    </UserInfoContext.Provider>
  );
}

export default App;
