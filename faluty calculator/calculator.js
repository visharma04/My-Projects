// let's make faulty calculator
let a= prompt("enter first number");
let b= prompt("Enter the operator");
let c= prompt("enter second number");

let obj ={
    "+" :"-",
    "*" : "+",
    "-" : "/",
    "/" : "*",

}

let random = Math.random();
if (random> 0.1) {
    // perform correct calculation
    alert(`the calcultaion is ${eval(`${a} ${b} ${c}`)}`)
    
}
else{
    // perform wrong calculation
    c= obj[c]
    alert(`the calcultaion is ${eval(`${a} ${b} ${c}`)}`)
}