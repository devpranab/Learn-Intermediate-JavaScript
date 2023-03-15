//TransportationOnVacation

//solution
//define the price
//check if the days less than 3 return the price
//check if the days are more than 7 return the price - 50
//else price - 20

function rentalCarCost(d){
 let price = 40 * d;
 if(d < 3) return price;
 if(d >= 7) {
    return price - 50;
 }else{
    return price - 20;
 }
}
console.log(rentalCarCost(7));//230