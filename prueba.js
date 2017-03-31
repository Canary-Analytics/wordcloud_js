var WordCounter = require('word-counter');
//var wc = new WordCounter();

var wc = new WordCounter({
      mincount: 2,          
      minlength: 4,
      ignore: ['norf'],
      ignorecase: true
    });
    
var source = 'foo fubar fubar bar quux QuUx quux norf norf';

wc.count(source);

var report = wc.report();

console.log(report);
