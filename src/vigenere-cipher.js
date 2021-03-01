const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("No one of parameters");
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let fullKey = "";
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (this.mode === false) {
      message = message.split('').reverse().join('');
      key = key.split('').reverse().join('');
    }
    for (let cur = 0; key.length < message.length; cur++) {
      key += key[cur];
    }
    for (let i = 0, j = 0; i < message.length; i++, j++) {
      let c = 0;
      if (message[i] === " ") {
        fullKey += " ";
        j -= 1;
        continue;
      }
      if (!alphabet.includes(message[i])) {
        fullKey += message[i];
        continue;
      }
      c =
        (alphabet.indexOf(message[i]) + alphabet.indexOf(key[j])) %
        alphabet.length;
      fullKey += alphabet[c];
    }

    return fullKey;

  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined)
      throw new Error("No one of parameters");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let fullKey = "";
    key = key.toUpperCase();
    if (this.mode === false) {
      encryptedMessage = encryptedMessage.split('').reverse('').join('');
      key = key.split('').reverse('').join('');
    }
    for (let cur = 0; key.length < encryptedMessage.length; cur++) {
      key += key[cur];
    }
    for (let i = 0, j = 0; i < encryptedMessage.length; i++, j++) {
      let m = 0;
      if (encryptedMessage[i] === " ") {
        fullKey += " ";
        j -= 1;
        continue;
      }
      if (!alphabet.includes(encryptedMessage[i])) {
        fullKey += encryptedMessage[i];
        continue;
      }
      m =
        (alphabet.indexOf(encryptedMessage[i]) +
          alphabet.length -
          alphabet.indexOf(key[j])) %
        alphabet.length;
      fullKey += alphabet[m];
    }
    return fullKey;

  }
}

module.exports = VigenereCipheringMachine;
