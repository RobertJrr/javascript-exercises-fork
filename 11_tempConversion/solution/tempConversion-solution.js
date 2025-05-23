const convertToCelsius = function (fahrenheit) {
  //example for 100
  //100 - 32 * 5/9 = 37.7778. 37.7778 * 10 = 377.778
  //Math.round(377.778) = 378. 378 / 10 = 37.8
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
