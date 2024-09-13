// Exercise 1
function upperCase(str){
    let splitStr = str.split(" ");
    for(let i=0;i < splitStr.length;i++){
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
}
let str = "the quick brown fox";
console.log(upperCase(str));
console.log("---------------------------------")

//-------------------------------------------
// Exercise 2
function largestInt(...value){
    let largestVal = value[0];
    for(let i=0;i < value.length;i++){
        if(largestVal < value[i]){
            largestVal = value[i];
        }
    }
    return largestVal;
}
console.log(largestInt(1,0,1));
console.log(largestInt(0,-10,-20));
console.log(largestInt(1000,510,440));
console.log("---------------------------------")

//--------------------------------------------
// Exercise 3
function moveThreeChars(str){
    if(str.length >= 3){
        return str.slice(-3) + str.slice(0, -3); // slice last three char and concatenate to beginning. Remove last three chars of string. 
    }
    return str; // return string if str length is not greater than or equal to 3
}
console.log(moveThreeChars("Python"));
console.log(moveThreeChars("Javascript"));
console.log(moveThreeChars("Hi"));
console.log("---------------------------------")

//--------------------------------------------
// Exercise 4
function findGivenAngle(angle){
    let str = "";
    if(angle >= 0 && angle < 90){
        str = "Acute angle"
    }
    else if(angle == 90){ // 
        str = "Right angle"
    }
    else if(angle >= 90 && angle < 180){
        str = "Obtuse angle"
    }
    else if(angle == 180){ //
        str = "Straight angle"
    }
    else{
        str = "Invalid Value"
    }
    return str;
}
console.log(findGivenAngle(47));
console.log(findGivenAngle(90));
console.log(findGivenAngle(145));
console.log(findGivenAngle(180));
console.log("---------------------------------")

//--------------------------------------------
// Exercise 5
function maxSum(intArray){
    const newArr = [];
    for(let i=0;i<intArray.length;i++){
        newArr.push(intArray[i] + (intArray[i+1]));
    }
    let maxInt = newArr[0]
    for(let j=0;j<newArr.length;j++){
        if(maxInt < newArr[j]){
            maxInt = newArr[j];
        }
    }
    return maxInt;
}
console.log(maxSum([1,2,3,14,5],2))
console.log(maxSum([2,3,5,1,6],3))
console.log(maxSum([9,3,5,1,7],2))