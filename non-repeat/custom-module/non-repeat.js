var firstNonRepeatedCharacter = string => {
  for (let i = 0; i < string.length; i++) {
    let c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
};
module.exports = {
  nonRepeat: firstNonRepeatedCharacter
};
