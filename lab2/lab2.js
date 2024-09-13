// Exercise 1
const gretter = (myArray, counter) =>{
    let greetText = 'Hello';
    for (let index=0; index < myArray.length; index++){
        console.log(`greetText ${myArray[index]}`);
    }
}
gretter(['Randy Saveage', 'Ric Flair', 'Hulk Hogan']);
console.log('--------------------------------');


// Exercise 2
function capitalize(value){
    const [l1, ...name] = value;
    return l1.toUpperCase() + name.join('');
}
console.log(capitalize('foobar'));
console.log(capitalize('nodeJs'));
console.log('--------------------------------');


// Exercise 3
function capitalizedColors(colors){
    return colors.map((n) => capitalize(n));
}

const colors = ['red','green','blue'];
const capitalizedArr = capitalizedColors(colors);
console.log(capitalizedArr);
console.log('--------------------------------');
  

// Exercise 4
const filterArray = num => {
    return num.filter(value => value < 20);
}
var numArray = [1,60,34,30,20,5];
const filter = filterArray(numArray)
console.log(filterArray(filter));


// Exercise 5
const calculateSum = value => {
    const sum = value.reduce((accumulator, currentValue) => accumulator + currentValue
    );
    return sum;
}

const calculateProduct = value => {
    
    const product = value.reduce((accumulator, currentValue) => accumulator * currentValue
    );
    return product;
}
var numArray = [1,2,3,4];
console.log(calculateSum(numArray));
console.log(calculateProduct(numArray));
console.log('--------------------------------');


// Exercise 6
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model}, ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());