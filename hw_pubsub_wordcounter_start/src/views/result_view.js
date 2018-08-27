const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(){

}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe("WordCounter:result", (event) => {
    const result = event.detail;
    this.updateView(result);
  })
}

ResultView.prototype.updateView = function(result){
  const resultElement = document.querySelector('#result');
  const form = document.querySelector('#wordcounter-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    resultElement.textContent = `Word count = ${result}`;
  });
}

module.exports = ResultView;
