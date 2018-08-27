const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function(){

};

WordCounter.prototype.bindEvents = function(){
  PubSub.subscribe("InputView:words-inputted", (event) => {
    const inputtedWords = event.detail;
    const result = this.countWords(inputtedWords);
    PubSub.publish("WordCounter:result", result);
  })
}

WordCounter.prototype.countWords = function(words){
  word_array = words.split(' ');
  return word_array.length;
}

module.exports = WordCounter;
