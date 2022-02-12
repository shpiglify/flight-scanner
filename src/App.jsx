import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Screens/Home/Home";
import FlightsResult from "./Screens/Flights-Results/FlightsResult";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Booking from "./Screens/booking/booking";
import ProviderWrapper from "./components/ProviderWrapper/ProviderWrapper";

import styles from "./App.module.css";

const App = () => {
  const [auth, setAuth] = useState(null);
  // const [radio, setRadio] = useState("roundTrip");
  const [userSelectionForRoundTrip, setUserSelectionForRoundTrip] = useState(
    []
  );
  const [userSelectionForOneWay, setUserSelectionForOneWay] = useState([]);

  return (
    <ProviderWrapper>
      <BrowserRouter>
        <div className={styles.app}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" />
            <Route
              exact
              path="/booking"
              component={() => (
                <Booking
                  setAuth={setAuth}
                  userSelectionForRoundTrip={userSelectionForRoundTrip}
                  userSelectionForOneWay={userSelectionForOneWay}
                />
              )}
            />
            <Route
              exact
              path="/flightsResult"
              component={() => (
                <FlightsResult
                  setUserSelectionForRoundTrip={setUserSelectionForRoundTrip}
                  setUserSelectionForOneWay={setUserSelectionForOneWay}
                />
              )}
            />
            <Route exact path="/contact" />
            <Route
              exact
              path="/login"
              component={() => <Login setAuth={setAuth} />}
            />
            <Route
              exact
              path="/register"
              component={() => <Register setAuth={setAuth} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </ProviderWrapper>
  );
};
export default App;
