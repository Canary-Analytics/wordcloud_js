const fs = require('fs');
var inputJSON = require('./tweets.json');
var intermediate = [];
var output = [];

for (var i = 0; i < inputJSON.length; i++) {
  if (typeof inputJSON[i].text != 'undefined') {intermediate.push(inputJSON[i].text)}
}
console.log(intermediate);

output = intermediate.join('\n');

fs.writeFileSync('./tweets.txt',output);






