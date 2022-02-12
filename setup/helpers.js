const IATACodeToCityNameMap = require("./IATACodeToCityNameMap.json");
const aircrafts = require("./aircrafts.json");

const _getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const IATACodeToCityName = (IATACode) => {
  return IATACodeToCityNameMap[IATACode];
};

const getRandomAircraft = () => {
  return _getRandomElement(aircrafts);
};

module.exports = { IATACodeToCityName, getRandomAircraft };
