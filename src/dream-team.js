const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== "object") return false;
  if (!Array.isArray(members)) return false;
  let str = '';
  for (let i = 0; i < members.length; i++) {
	if (typeof members[i] === "string") {
  	  str += members[i].trim().slice(0, 1);
	}
  }
  return str.toUpperCase().split('').sort().join('');
};

