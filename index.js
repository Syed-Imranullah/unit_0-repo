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
// add(2, 4)     
// add(10, -5)   
// add(5, 5)     
// add(6, 6)     

// Probelem 7 Syed

function isNegative (n) {
    if (n < 0) {
        return true;
    } else {
        return false;
    }
}
// console.log(isNegative(3))
// console.log(isNegative(-2))
// console.log(isNegative(Math.Pi))

// Problem 8 Sanaa

function triangleArea(height, base) {
    let area = base / 2 * height
    console.log(area)
}
// triangleArea(5, 7)    
// triangleArea(6, 8)    

// Problem 9 Syed 

function betweenTwentyAndFourty (n) {
    return n > 20 && n < 40 
}
// console.log(betweenTwentyAndFourty(20))      
// console.log(betweenTwentyAndFourty(21))     
// console.log(betweenTwentyAndFourty(39))    
// console.log(betweenTwentyAndFourty(40)) 

// Problem 10 Sanaa

function largest(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3))
}
    
// largest(4, 6, 8)        
// largest(30, 22, 17)
// largest(41, 108, 86)

// problem 14 Syed 

function absoluteNineteen (n) {
    let diff
    if (n > 19){
        diff = n -19
        return diff * 3
    } else {
        diff = 19 - n;
        return diff;
    }
}
console.log(absoluteNineteen(10)); 
console.log(absoluteNineteen(20));
console.log(absoluteNineteen(25)); 

//USED AI HELP TO UNDERSTAND THE QUESTION "WHAT THEY WERE ASKING To do"

// problem 15 Syed 

function switchLetters(str) {
    if (str.length <= 1) return str;

    let first = str[0];
    let last = str[str.length - 1];
    let middle = str.slice(1, str.length - 1);

    return last + middle + first;
}

console.log(switchLetters("anne"));         
console.log(switchLetters("hello world")); 
console.log(switchLetters("a"));            
console.log(switchLetters(""));            
// largest(4, 6, 8)        
// largest(30, 22, 17)
// largest(41, 108, 86)

