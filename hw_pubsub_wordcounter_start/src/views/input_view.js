const PubSub = require('../helpers/pub_sub.js');

const InputView = function(){

}

// InputView.prototype.bindEvents = function(){
//   const input = document.querySelector('#text');
//   input.addEventListener('input', (event) => {
//     const inputtedWords = event.target.value;
//     PubSub.publish('InputView:words-inputted', inputtedWords);
//   })
// }

InputView.prototype.bindEvents = function(){
  const form = document.querySelector('#wordcounter-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputtedWords = event.target.text.value;
    PubSub.publish('InputView:words-inputted', inputtedWords);
  })
}

module.exports = InputView;
