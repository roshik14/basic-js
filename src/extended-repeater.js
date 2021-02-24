const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string' || typeof options.addition !== 'string') {
    str = String(str);
    options.addition = String(options.addition);
  }
  function addRep(string) {
    let arr = [];
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        arr.push(string);
      }
    return arr;
  }
  function sepAdd(string = '|') {
    return addRep(options.addition).join(string);
  }
  function concat(string) {
    return string + sepAdd(options.additionSeparator);
  }
  function lastSep(string = '+') {
    let newArr = [];
      for (let i = 0; i < options.repeatTimes; i++) {
        newArr.push(concat(str));
      }
    return newArr.join(string);
  }
  return lastSep(options.separator);


};
