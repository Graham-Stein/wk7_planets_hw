const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function () {

};

PlanetInfoView.prototype.bindEvent = function () {
  PubSub.subscribe('SolarSystem:planet-info', (event) => {
    // console.log("PLANET INFO? ",event);
    // console.log("PLANET INFO? ",event.detail);
    // console.log("PLANET INFO? ",event.detail.name);
    const planetDisplayInfo = event.detail;
    this.displayResult(planetDisplayInfo);
  });
};

PlanetInfoView.prototype.displayResult = function (planet_details) {
  const resultElement = document.querySelector('#planet_data');
    // resultElement.textContent =
    console.log(planet_details);
    planet_details.forEach(function(detail) {
      console.log(detail);
      resultElement.textContent = detail;
    });
};

module.exports = PlanetInfoView;
