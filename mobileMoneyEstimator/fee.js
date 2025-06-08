
//prompt the user for input
function estimateTransactionFee(amountToSend){

//validate input
/*if ('amountToSend is >= 500 && >= 2000 && >= 10000'){
    console.log('This is the estimated amount');
}*/

//calculate base fee(1.5%)
const rate = 0.015;   
const minFee = 10;
const maxFee = 70;

//calculate transaction fee
const transactionFee = amountToSend * rate
let fee;
if (transactionFee < 10){
    fee = 10;
}else if  (transactionFee > 70){
    fee = 70;
}else (
    fee = transactionFee
)

//calculate total amount debited
const totalDebited = amountToSend + transactionFee;
//print results to the console
console.log(`KeS ${amountToSend}`);
console.log(`calculated transaction fee: KES ${transactionFee}`)
console.log(`Total amount to be debited:KES ${totalDebited}`)
console.log('Send money securely!')
}

const amount =Number(prompt('Unatuma pesa ngapi? (KES):'));
estimateTransactionFee(amount);