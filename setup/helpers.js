const IATACodeToCityNameMap = require("./IATACodeToCityNameMap.json");

const IATACodeToCityName = (IATACode) => {
  return IATACodeToCityNameMap[IATACode];
};

module.exports = { IATACodeToCityName };
