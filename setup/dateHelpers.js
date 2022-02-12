const { MILLISECONDS_IN_24_HOURS } = require("./consts");

const _getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const getRandomTimestamps = (startDate, endDate, amount) => {
  //all date values should be timestamps
  const dates = [];
  for (let i = 0; i < amount; i++) {
    const randomDate = _getRandomInt(startDate, endDate);
    dates.push(randomDate);
  }
  return dates;
};

const generateRandomDatesPer24hours = (startDate, endDate, frequency) => {
  let dates = [];
  let dayStart = startDate;
  console.log('generateRandomDates24h',startDate,endDate,frequency)
  while (dayStart < endDate) {
    let currentDayEnd = dayStart + MILLISECONDS_IN_24_HOURS
    const datesIn24H = getRandomTimestamps(
      dayStart,
      currentDayEnd,
      frequency
    );
     dates = dates.concat(datesIn24H);
    dayStart = currentDayEnd
  }
  return dates
};

// const today = Date.now()
// const tommorow = Date.now() + MILLISECONDS_IN_24_HOURS
// console.log(getRandomTimestamps(today,tommorow,2))
// console.log(generateRandomDatesPer24hours(today,tommorow,6).map(date => new Date(date)))

module.exports = {generateRandomDatesPer24hours}