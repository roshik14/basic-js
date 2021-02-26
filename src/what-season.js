const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 if (date === undefined) return 'Unable to determine the time of year!';

 if (date.getTime() === undefined) throw new Error("THROWN");

 const month = date.getMonth();

 if (month === 11 || month <= 1) return 'winter';
 if (month >= 2 && month <= 4) return 'spring';
 if (month >=5 && month <= 7) return 'summer';
 if (month >= 8 && month <= 10) return 'autumn';

};
