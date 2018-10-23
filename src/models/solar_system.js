const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvent = function () {
  PubSub.subscribe('ListView:planet-selection', (event) => {
    console.log("In Solar System => ",event);
  });
};


module.exports = SolarSystem;
