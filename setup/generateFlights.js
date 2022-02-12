const rawFlights = require("./rawFlights.json");
const { IATACodeToCityName, getRandomAircraft } = require("./helpers");
const { generateRandomDatesPer24hours } = require("./dateHelpers");
const {
  ElAlairlineLogo,
  ElAlName,
  NonStop,
  MILLISECONDS_IN_1_WEEK,
} = require("./consts");
const { v4: uuid } = require("uuid");

const getOppositeDirection = (rawFlight) => {
  const { flightNumber, originCode, destinationCode, flightDuration } =
    rawFlight;
  const oppositeFlight = {
    ...rawFlight,
    flightNumber: "E" + flightNumber,
    originCode: destinationCode,
    destinationCode: originCode,
    flightDuration,
  };
  return oppositeFlight;
};

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

const generateFlightNumberFlights = (
  rawFlight,
  startTimestamp,
  endTimestamp
) => {
  const departuresTimestamps = generateRandomDatesPer24hours(
    startTimestamp,
    endTimestamp,
    rawFlight.flightsPer24h
  );
  console.log("departuresTimestamps", departuresTimestamps);
  const flights = departuresTimestamps.map((departureTimestamp) =>
    generateFlight(rawFlight, departureTimestamp)
  );
  return flights;
};

const generateFlightNumberFlightsTwoWaysForNextWeek = (rawFlight) => {
  const today = Date.now();
  const nextWeek = Date.now() + MILLISECONDS_IN_1_WEEK;
  const oneWayFlights = generateFlightNumberFlights(rawFlight, today, nextWeek);
  const oppositeDirectionRawFlight = getOppositeDirection(rawFlight);
  const oppositeWayFlights = generateFlightNumberFlights(
    oppositeDirectionRawFlight,
    today,
    nextWeek
  );
  const twoWayFlights = [...oneWayFlights, ...oppositeWayFlights];
  return twoWayFlights;
};

console.log(generateFlightNumberFlightsTwoWaysForNextWeek(rawFlights[0]));
