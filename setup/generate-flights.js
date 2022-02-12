const rawFlights = require("./rawFlights.json");
const { IATACodeToCityName, getRandomAircraft } = require("./helpers");
const { ElAlairlineLogo, ElAlName, NonStop } = require("consts");

const generateFlight = (rawFlight) => {
  const { flightNumber, originCode, destinationCode, FlightDuration } =
    rawFlight;

  const flight = {
    flightNumber,
    originCode,
    origin: IATACodeToCityName(originCode),
    destinationCode,
    destination: IATACodeToCityName(destinationCode),
    FlightDuration,
    airline: ElAlName,
    airlineLogo: ElAlairlineLogo,
    stops: NonStop,
    aircraft: getRandomAircraft(),
  };

  return flight;
};

console.log(generateFlight(rawFlights[0]));
