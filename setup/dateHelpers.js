const { MILLISECONDS_IN_24_HOURS } = require("./consts");

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const getRandomTimestamps = (startDate, endDate, amount) => {
  //all date values should be timestamps
  const dates = [];
  for (let i = 0; i < amount; i++) {
    const randomDate = getRandomInt(startDate, endDate);
    dates.push(randomDate);
  }
  return dates;
};

const generateRandomDatesPer24hours = (startDate, endDate, frequency) => {
  let dates = [];
  let dayStart = startDate;
  while (dayStart < endDate) {
    let currentDayEnd = dayStart + MILLISECONDS_IN_24_HOURS;
    const datesIn24H = getRandomTimestamps(dayStart, currentDayEnd, frequency);
    dates = dates.concat(datesIn24H);
    dayStart = currentDayEnd;
  }
  return dates;
};

module.exports = { generateRandomDatesPer24hours,getRandomInt };
