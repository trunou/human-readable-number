module.exports = function toReadable (number) {
    var first20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var dec = ['ten','twenty','thirty', 'forty', 'fifty', 'sixty','seventy','eighty','ninety'];
      if(number >= 0 && number < 20){
          return first20[number];
      } else if(number >= 20 && number < 100){
          if(number % 10 !== 0){
              return (`${(dec[Math.floor(number / 10) - 1])} ${first20[number % 10]}`);
          }else{
              return dec[Math.floor(number / 10) - 1];
          }
      } else if(number >= 100 && number < 1000){
          if(number % 100 === 0){
              return (`${(first20[Math.floor(number / 100)])} hundred`)
          } else if(number % 100 < 20){
              return `${(first20[Math.floor(number / 100)])} hundred ${first20[number % 100]}`
          } else if(number % 10 === 0){
              return `${(first20[Math.floor(number / 100)])} hundred ${dec[Math.floor(number % 100 / 10) - 1]}`
          } else {
          return `${(first20[Math.floor(number / 100)])} hundred ${dec[Math.floor(number % 100 / 10) - 1]} ${first20[Math.floor(number % 100 % 10)]}`
        }
      } 
  }