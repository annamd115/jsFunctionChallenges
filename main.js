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



