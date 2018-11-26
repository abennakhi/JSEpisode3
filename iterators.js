/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
  // Your code here
  array.forEach(element => console.log(element));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function(temperatures) {
  // Your code here
  //var thereturn = [];
  //temperatures.array.forEach(element => {
  // thereturn.map((element - 32) * (5 / 9));
  //});
  return temperatures.map(element => (element - 32) * (5 / 9));
  //return thereturn;
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function(temperatures, threshhold) {
  // Your code here
  //var thereturn = [];
  //temperatures.array.forEach(element => {
  // if (element > threshhold) thereturn.push(element);
  //});
  return temperatures.filter(element => element > threshhold);
  //return thereturn;
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function(temperatures, threshhold) {
  // Your code here
  //var thereturn = [];
  // thereturn = toCelsius(hottestDays(temperatures, threshhold));
  //thereturn = toCelsius(thereturn);
  toCelsius(hottestDays(temperatures, threshhold)).forEach(element =>
    console.log(element)
  );
};

export { logger, toCelsius, hottestDays, logHottestDays };
