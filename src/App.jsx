import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About";
import FlightsResult from "./Screens/Flights-Results/FlightsResult";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Booking from "./Screens/booking/booking";
import ProviderWrapper from "./components/ProviderWrapper/ProviderWrapper";
import Context from "./components/context";
import { searchSameDayFlights } from "./services/flightsSearch";

import styles from "./App.module.css";

const exampleFlights = [
{
  id: '44852650-80f0-45f4-851f-b069a722bbf3',
  date: '18/02/2022',
  flightNumber: 'LY243',
  departure: 1645191428606,
  arrival: 1645195508606,
  originCode: 'TLV',
  origin: 'Tel Aviv',
  destinationCode: 'LCA',
  destination: 'Larnaca',
  flightDuration: 4080000,
  airline: 'Elal',
  airlineLogo: 'https://dealandgo.co.il/img/airlines/ELY.png',
  stops: 'non-Stop',
  aircraft: 'Airbus A330-200',
  price: 205
},
{
  id: 'eba09db1-9e17-4ced-8625-c52738bb7a32',
  date: '18/02/2022',
  flightNumber: 'LY243',
  departure: 1645150248081,
  arrival: 1645154328081,
  originCode: 'TLV',
  origin: 'Tel Aviv',
  destinationCode: 'LCA',
  destination: 'Larnaca',
  flightDuration: 4080000,
  airline: 'Elal',
  airlineLogo: 'https://dealandgo.co.il/img/airlines/ELY.png',
  stops: 'non-Stop',
  aircraft: 'Boeing 747 Freighter',
  price: 448
}]



const App = () => {
  const [auth, setAuth] = useState(null);
  const [userSelectionForRoundTrip, setUserSelectionForRoundTrip] = useState(
    []
  );
  const [userSelectionForOneWay, setUserSelectionForOneWay] = useState([]);
  const [flightResults,setFlightResults] = useState(exampleFlights)


  return (
    <Context.Provider value={{flightResults,setFlightResults}}>
    <ProviderWrapper>
      <BrowserRouter>
        <div className={styles.app}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/about" component={() => <About />} />
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
    </Context.Provider>
  );
};
export default App;
