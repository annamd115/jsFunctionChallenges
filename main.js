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
results = [];
// 1.  Is the number prime?
// 2,  Is the number even?
// 3.  Is the number a multiple of 10?
// simpleMathTest(7)  // ==> [true,  false, false] 
// simpleMathTest(10) // ==> [false, true,  true]

function testPrime(num){
    // if(num === 1){
    //     results.push(false);
    // } else if(num === 2){
    //     results.push(true);
    // } 
    for(var i = 2; i < num; i++){
        if((num % i) === 0){
            results.push(false);
        }
    } 
    results.push(true);
}

function testEven(num){
    if((num % 2) === 0){
        results.push(true);
    } else if((num % 2) !== 0){
        results.push(false);
    }
}

function testMultiple(num){
    if((num % '10') === 0){
        results.push(true);
    } else if((num % '10') !== 0){
        results.push(false);
    }
}

function simpleMathTest(number){
    var results = [];
    
    testPrime(number);
    // results.push(prime);
    
    testEven(number);
    // results.push(even);

    testMultiple(number);
    // results.push(multiple);

    // return results;
  
}
// simpleMathTest(7);
simpleMathTest(10);

console.log(results);

var mathTestString = "<h3>Challenge2:</h3>" 
+ "<p> [" + results[0] + ", " + results[1] + ", " + results[2] + "]</p>";

printToDom(mathTestString, "challenge-2"); 





