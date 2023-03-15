//sentenceSmash

//write a function that takes an array of words and smashes them together into a sentence and returns the sentence, you can ignore any need to sanitize words or add punctuation, but you should ass spaces between each word, be careful, there shouldn't be space at the beginning or the end of the sentence!

function sentenceSmash(words){
    return words.join("");
}
console.log(sentenceSmash(["I", "am", "a", "programmer"]));
//Iamaprogrammer
