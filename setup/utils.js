const aircrafts = require("./aircrafts.json");
const elalRoutes = require("../public/data/elalRouts.json");

const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const IATACodeToCityName = (IATACode) => {
  let city;
  elalRoutes.forEach((route) => {
    if (route.iata_code === IATACode) {
      city = route.city;
    }
  });
  if (!city) {
    const errMsg = `city not found in 'IATACodeToCityName' function for IATA Code ${IATACode}`;
    throw new Error(errMsg);
  }
  return city;
};

const getRandomAircraft = () => {
  return getRandomElement(aircrafts);
};

module.exports = { IATACodeToCityName, getRandomAircraft };
