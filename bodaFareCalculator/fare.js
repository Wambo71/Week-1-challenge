function calculateBodaFare(distanceInKm){



//converts input into a number
// let distanceInKm = 5
//if ('distanceInKm is === 5'){
   // console.log('Reach destination')


//calculates total estimated fare
const baseFare = 50;
const perKmCharge = 15;
const distanceFare = distanceInKm * perKmCharge;
const totalFare = baseFare + distanceFare;
//prints the results into console
console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
console.log(`Mpaka Uko: KES ${distanceFare}`);
console.log(`Total: KES ${totalFare}\n`);
console.log(`Panda Pikipiki!`);
}
const distance =Number(prompt('Unafika wapi Mkubwa?Kilometer ngapi?:'));
calculateBodaFare(distance);

