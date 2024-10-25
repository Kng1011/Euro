
document.addEventListener('DOMContentLoaded', (e) => {
    button = document.getElementById("genBtn");

    button.addEventListener('click', (e) => {
        genNewBet();
        // genJSONBet();
    });



    /*
    button.addEventListener('click', function (e) {
        console.log("same event, another handle");
    });
     button.addEventListener('click', addtext);
    */
});


function genRandomNumbers(n, min, max) {
    // return an array with n unique integers between min and max
    let setOfNumbers = new Set();
    while (setOfNumbers.size < n) {
        newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setOfNumbers.add(newNumber);
    }
    return [...setOfNumbers].sort((a,b) => a-b);
}

function genJSONBet() {

    let numbers = genRandomNumbers(5, 1, 50);
    let stars = genRandomNumbers(2, 1, 12);

    let newBet = {
        timeStamp: new Date(),
        numbers: numbers,
        stars: stars,
    }

    console.log(newBet);

    JSONBet = JSON.stringify(newBet);

    console.log(JSONBet);

    return JSONBet;

}

async function genNewBet() {
    try {
        const response = await fetch('https://euro-b1ya.onrender.com/generate-bet');
        const bet = await response.json();
        
        // Display numbers
        const theOLNumbers = document.getElementById('olMain');
        theOLNumbers.innerHTML = "";
        bet.numbers.forEach(number => {
            const newLi = document.createElement("li");
            newLi.innerHTML = number;
            theOLNumbers.appendChild(newLi);
        });

        // Display stars
        const theOLStars = document.getElementById('olStars');
        theOLStars.innerHTML = "";
        bet.stars.forEach(star => {
            const newLi = document.createElement("li");
            newLi.innerHTML = star;
            theOLStars.appendChild(newLi);
        });

    } catch (error) {
        console.error('Error fetching bet from server:', error);
    }
}




/*
function addtext() {
    listofnumbers = document.getElementById("olMain");
    listofnumbers.innerHTML = "";

    newli = document.createElement("li");
    newli.innerText= "99";

    listofnumbers.appendChild(newli);
}
*/

// Math.random() 0..1;
// Math.floor() turn a real into an integer

// Arrays
// indexOf() to check if an object exists in the array


