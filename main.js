function printToDom(input, id){
    document.getElementById(id).innerHTML += input;
}


// _______________________________CHALLENGE1_______________________________

var div1 = document.getElementById("challenge-1");
var challenge1a = calculateYears(2000, 2010); // You are 10 years old.
var challenge1b = calculateYears(2000, 1995); // You will be born in 5 years.
var challenge1c = calculateYears(2000, 2000); // You were born this very year!

function calculateYears (birthYear, year) {
    if(year > birthYear){
        var currentAge = year - birthYear;
        return("You are " + currentAge + " years old.");
    } else if(birthYear > year){
        var yearsTillBirth = birthYear - year;
        return("You will be born in " + yearsTillBirth + " years.");
    } else if(birthYear = year){
        return("You were born this very year.");
    }
}

printToDom(challenge1a, "challenge-1");
printToDom(challenge1b, "challenge-1");
printToDom(challenge1b, "challenge-1");

div1.innerHTML = "<h3>Challenge1:</h3>" 
+ "<p>a) " + challenge1a + "</p>"
+ "<p>b) " + challenge1b + "</p>"
+ "<p>c) " + challenge1c + "</p>";

// _______________________________CHALLENGE2_______________________________

var div2 = document.getElementById("challenge-2");
var results = [];
// 1.  Is the number prime?
// 2,  Is the number even?
// 3.  Is the number a multiple of 10?

function testPrime(num){
    var results = [];
    if(num === 1){
        results.push(false);
    } else if(num === 2){
        results.push(true);
    } else{
        for(var i = 2; i < num; i++){
            if(num % i === 0){
                results.push(false);
            }
        } 
        results.push(true);
    }
    results.push();
    console.log(results);
}

function testEven(num){
    var results = [];
    if(num % 2 === 0){
        results.push(true);
    } else{
        results.push(false);
    }
    results.push();
    console.log(results);
}

function testMultiple(num){
    var results = [];
    if(num % 10 === 0){
        results.push(true);
    } else{
        results.push(false);
    }
    results.push();
    console.log(results);
}

function simpleMathTest(num){
    testPrime(num);
    testEven(num);
    testMultiple(num);
}

simpleMathTest(7);



