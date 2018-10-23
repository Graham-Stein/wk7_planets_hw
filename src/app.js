const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const ListView = require('./views/list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);

  const listView = new ListView();
  listView.bindEvent();

  const solarSystem = new SolarSystem();
  solarSystem.bindEvent();

  console.log(planetsDataModel.planets);
  console.log(planetsDataModel.planets[0]);
});
