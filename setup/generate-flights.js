const rawFlights = require("./rawFlights.json");
const { originCodeToOrigin } = require("./helpers");

const generateFlight = (rawFlight) => {
  const { flightNumber, originCode, destinationCode, FlightDuration } =
    rawFlight;

  const flight = {
    ...rawFlight,
    origin: originCodeToOrigin(),
  };
  return rawFlight;
};

console.log(generateFlight(rawFlights[0]));
