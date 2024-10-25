const express = require('express');
const app = express();
const PORT = process.env.PORT || 4050;

// CORS middleware to allow requests from your frontend
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.static('public'));



function genRandomNumbers(n, min, max) {
    let setOfNumbers = new Set();
    while (setOfNumbers.size < n) {
        let newNumber = Math.floor(Math.random() * (max - min + 1) + min);
        setOfNumbers.add(newNumber);
    }
    return [...setOfNumbers].sort((a, b) => a - b);
}

app.get('/generate-bet', (req, res) => {
    const numbers = genRandomNumbers(5, 1, 50);
    const stars = genRandomNumbers(2, 1, 12);

    const newBet = {  
        timeStamp: new Date(),
        numbers: numbers,
        stars: stars, 
    };

    console.log(newBet);

    res.json(newBet);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
