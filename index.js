// Problem 1 Syed

function fiveToOneHundred (n) {
    for (let i = 5; i <= 100; i++){
        console.log(i)    
} 

} 
// fiveToOneHundred()

// Problem 2 Sanaa

function multiplesOfThree (n) {
    for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
    console.log(i) 
    }
}
}
// multiplesOfThree(100)

// Problem 3 Syed 

function multiplesOfThree (n) {
    for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
    console.log(i) 
    }
}
} 
// multiplesOfThree(100)

// Problem 4 Sanaa

function untilNum(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
    return n
}
//untilNum(5)
//untilNum(9)
//untilNum(42)

// Problem 5 Syed 

function multiply (num1, num2) {
    for (let i = 1; i <= 0  ; i ++) {
        let product = num1 * num2
        console.log(product)
    }   
}

//multiply (2, 4)
//multiply (10, -5)
//multiply (3, 7.5)

// Problem 6 Sanaa

function add(num1, num2) {
    let sum = num1 + num2
    if (num1 === num2) {
        console.log(sum * 3)
    } else {
        console.log(sum)
    }
}
//add(2, 4)     //returns 6
//add(10, -5)   //returns 5add(3, 7.5)   //returns 10.5
//add(5, 5)     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
//add(6, 6)     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that

//Probelem 7 Syed

function isNegative (n) {
    if (n < 0) {
        return true;
    } else {
        return false;
    }
}
//console.log(isNegative(3))
//console.log(isNegative(-2))
//console.log(isNegative(Math.Pi))

// Problem 8 Problem

function triangleArea(height, base) {
    let area = base / 2 * height
    console.log(area)
}
// triangleArea(5, 7)    //returns 17.5
// triangleArea(6, 8)    //returns 24
