const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
	return false;
  }
  let num = parseFloat(sampleActivity, 10);
  if (sampleActivity === undefined || num === "NaN") {
	  return false;
  }
  if (num > 0 && num < 15) {
  	let act = MODERN_ACTIVITY / num;
  	let k = Math.log(2) / HALF_LIFE_PERIOD;
  	return Math.ceil(Math.log(act) / k);
  }
  return false;

};
