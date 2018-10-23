const PubSub = require('../helpers/pub_sub.js')
const planetsData = require('../data/planets.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvent = function () {
  PubSub.subscribe('ListView:planet-selection', (event) => {
    const planetDetails = planetsData.find((planet) => {
      return event.detail === planet.name;
    });
    PubSub.publish('SolarSystem:planet-info', planetDetails);
  });
};


module.exports = SolarSystem;
