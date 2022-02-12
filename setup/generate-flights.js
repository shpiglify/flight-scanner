const rawFlights = require("./rawFlights.json");
const { IATACodeToCityName } = require("./helpers");

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
  };

  return flight;
};

console.log(generateFlight(rawFlights[0]));
