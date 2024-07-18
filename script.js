// console. log('Session_1');

let admin = "Admin456";
if (admin === "Admin123") {
    console.log('Wellcome Admin');
} else if (admin === "Admin456"){
    console.log('Welcome User');
} else  {
    console.log('Unauthorized Access');

}



let bag = 100000;

let cash = prompt('Enter your cash: ');

if (cash > bag) {
    console.log('You have enough cash to buy the bag');
    alert ( cash - bag);
} else if (cash < bag) {
     alert ("You don't have enough cash to buy the bag");
     alert (bag - cash);
} else {
    console.log('The amount of cash is equal to the cost of the bag');
}
