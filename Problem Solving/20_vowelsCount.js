// find how many vowels have in a sentence
//find these: const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

function countVowels(sentence){
let count = 0;
const letters = Array.from(sentence);

letters.forEach(function(value){
    if(vowels.includes(value)){
        count++;
    }
});
return count;
}

const result = countVowels("I love javascript");
console.log(result);