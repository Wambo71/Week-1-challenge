
function calculateChaiIngredient(numberofcups){

//convert input to number
/*let numberofcups = 3
if ('number of cups is === 3'){
console.log('valid number of cups');
}*/
//calculate ingredients based on number of cups
//ingredients
let waterpercup = 200;
let milkpercup = 50;
let tealeavespercup = 1;
let sugarpercup = 2;
//ingredients based on numberofcups
let totalwater = waterpercup * numberofcups
let totalmilk = milkpercup * numberofcups
let totaltealeaves = tealeavespercup *numberofcups
let totalsugar = sugarpercup * numberofcups
//print results to console
console.log(`to make numberOfCups,you will need:`);
console.log(`water: ${totalwater} ml`);
console.log(`milk: ${totalmilk} ml`);
console.log(`Tea leaves(majani): ${totaltealeaves} tablespoons`);
console.log(`Sugar(sukari:) ${totalsugar} teaspoons`);
console.log('Enjoy your Chai Bora');

}
//get user input
let amount = Number(prompt('Karibu!How many cups of chai bora would you like to make?'));
calculateChaiIngredient(amount);

