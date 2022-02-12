const rawFlights = require("./rawFlights.json");
const { IATACodeToCityName, getRandomAircraft } = require("./helpers");
const { ElAlairlineLogo, ElAlName, NonStop } = require("./consts");
const { v4: uuid } = require("uuid");

const generateFlight = (rawFlight, departure) => {
  const { flightNumber, originCode, destinationCode, flightDuration } =
    rawFlight;

  const arrival = departure + flightDuration;

  const flight = {
    flightNumber,
    departure,
    arrival,
    originCode,
    origin: IATACodeToCityName(originCode),
    destinationCode,
    destination: IATACodeToCityName(destinationCode),
    flightDuration,
    airline: ElAlName,
    airlineLogo: ElAlairlineLogo,
    stops: NonStop,
    aircraft: getRandomAircraft(),
  };

  return flight;
};

const generateFlightNumberFlights = (rawFlight,dateRange) => {
    
}

console.log(generateFlight(rawFlights[0], Date.now()));
