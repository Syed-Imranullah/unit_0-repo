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
untilNum(5)
untilNum(9)
untilNum(42)
