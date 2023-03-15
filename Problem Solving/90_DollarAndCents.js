//DollarAndCents

//the company you work for has just been awarded a contract to build a payment gateway, in order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
//the rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (you don't have to worry about a dangling perlod).

//5.3210 becomes $5.32

function formatMoney(amount){
    //formatting code here
    return `$${amount.toFixed(2)}`;
}
console.log(formatMoney(5.3210));//$5.32