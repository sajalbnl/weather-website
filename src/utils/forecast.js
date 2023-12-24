const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=6f1a6f0f410744e8833104538232012&q=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "current temperature is " +
          body.current.temp_f +
          " but it feelslike " +
          body.current.feelslike_f
      );
    }
  });
};

module.exports = forecast;
