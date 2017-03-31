const fs = require('fs');
let d3 = require("d3");
const WordCounter = require('word-counter');

let wc = new WordCounter();

let text = fs.readFileSync('./tweets.txt',"utf-8");
let array = text.split(" ");
//console.log(array.length);
//console.log(array);

let hashtag = [];
let users = [];
let words = [];

for (var i = 0; i < array.length; i++)
{
  if(array[i].startsWith("#"))
  {
    hashtag.push(array[i]);
  }
  else if(array[i].startsWith("@"))
  {
    users.push(array[i]);
  }
  else
  {
    words.push(array[i]);
  }
}

wc.count(words.join(' '));
let report = wc.report();

let words_wordcloud = [];
for (i = 0; i < 100; i++) {
    words_wordcloud.push({
        text: report[i][0],
        size: report[i][1]
    });
}

let output = JSON.stringify(words_wordcloud);
fs.writeFileSync('./entrada_d3.json',output);
//console.log(output); ver el json
//console.log(report); ver el array de palabras y las veces que se repite
//console.log(words_wordcloud);


//console.log(words.length);
//console.log(hashtag.length);
//console.log(users.length);


