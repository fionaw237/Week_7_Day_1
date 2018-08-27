const PubSub = require('../helpers/pub_sub.js');

const InputView = function(){

}

InputView.prototype.bindEvents = function(){
  const input = document.querySelector('#number');
  input.addEventListener('input', (event) => {
    const inputtedNumber = event.target.value;
    PubSub.publish('InputView:number-inputted', inputtedNumber);
  })
}

module.exports = InputView;
