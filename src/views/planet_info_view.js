const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function () {

};

PlanetInfoView.prototype.bindEvent = function () {
  PubSub.subscribe('SolarSystem:planet-info', (event) => {
    console.log("PLANET INFO? ",event);
    console.log("PLANET INFO? ",event.detail);
    console.log("PLANET INFO? ",event.detail.name);
    const planetDisplayInfo = event.detail;
    this.displayResult(planetDisplayInfo);
  });
};

PlanetInfoView.prototype.displayResult = function (planet_details) {
  const resultElement = document.querySelector('.planet-details');
    resultElement.textContent = planet_details
};

module.exports = PlanetInfoView;
