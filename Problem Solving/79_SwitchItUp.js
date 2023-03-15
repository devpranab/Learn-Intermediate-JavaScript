//SwitchItUp

//when provided with a number between 0-9, retutn it in words.
//input :: 1
//output :: "One"
//if your language supports it, try using a switch statement,

function switchItUp(numbers){
    switch(number){
        case 0:
            return "zero";
            break;
        case 1:
            return "one";
            break;
        case 2:
            return "two";
             break; 
        case 3:
            return "three";
            break; 
        default:
            return "wrong number";    
     }
}
console.log(switchItUp(2));