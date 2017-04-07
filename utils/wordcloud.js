exports.calculate = (inputJSON) => {

    var intermediate = [];
    var text = [];

    for (var i = 0; i < inputJSON.length; i++) {
        if (typeof inputJSON[i].text != 'undefined') {
            intermediate.push(inputJSON[i].text)
        }
    }

    text = intermediate.join('\n');

    const fs = require('fs');
    const WordCounter = require('word-counter');

    let wc = new WordCounter();
    let array = text.split(" ");
    let hashtag = [];
    let users = [];
    let words = [];


    for (var i = 0; i < array.length; i++) {
        if (array[i].startsWith("#")) {
            hashtag.push(array[i]);
        } else if (array[i].startsWith("@")) {
            users.push(array[i]);
        } else {
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

    return words_wordcloud;
}