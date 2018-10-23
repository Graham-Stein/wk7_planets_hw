const PubSub = require('../helpers/pub_sub.js')


const ListView = function () {


  };

ListView.prototype.bindEvent = function () {
  const list = document.querySelector('#planets-menu');
  list.addEventListener('click', (event) => {
    console.log(event.target.id);
    console.log(list);

    const inputPlanet = (event.target.id);
    PubSub.publish('ListView:planet-selection', inputPlanet);

  });
};


module.exports = ListView;
