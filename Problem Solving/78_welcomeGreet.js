//welcomeGreet

//the task
//think of a way to score the languages as a database (eg an object).
//the languages are listed below so you can copy and paste!
//write a 'welcome' function that takes a parameter 'language' (always a string),
//and returns a greeting - if you have it in your database.
//it should default to English if the language is not in the database, or in the event of an invalid input.

//solution
//create the object for the database
//check if the language exist in the database
//if exist return the welcome with the language
//if no exist return the default language which is English

function greeting(language){
 let languages = {
    english: "Welcome",
    french: "Welcome1",
    danish: "Welcome2",
    german: "Welcome3",
    bengali: "Welcome4",
 }
 if(languages.hasOwnProperty(language)){
    return languages[language];
 }else{
    return languages["english"];
 }
}
console.log(greeting("french"));