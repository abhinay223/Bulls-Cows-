<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulls and Cows Game</title>
    <link rel="stylesheet" href="B&C.css">
</head>
<body>
    <div class="game-container">
        <h1>Bulls and Cows Game</h1>
        <p>Guess the 4-digit number!</p>
        
        <div id="guess-section">
            <input type="number" id="guess-input" placeholder="Enter your guess" maxlength="4">
            <button id="guess-btn" onclick = "playGame()">Guess</button>
        </div>

        <div id="new-game">
            <!-- <input type="number" id="guess-input" placeholder="Enter your guess" maxlength="4"> -->
            <button id="new-btn" onclick = "newGame()">Start Game</button>
        </div>
        <div id = reset-div>
            <!-- <input type="number" id="guess-input" placeholder="Enter your guess" maxlength="4"> -->
            <button id="reset-game" onclick = "newGame()">Reset Game</button>
        </div>

        <div id="result-section">
            <p id="bulls-cows"></p>
        </div>

       

        <div id="game-over" style="display: none;">
            <p>You guessed the number! Well done!</p>
            <button id="restart-btn">Restart Game</button>
        </div>
        <div><h3>Bulls</h3><h3 id="outbulls"></h3><h3 id="outbulls">
            <h3>Cows</h3><h3 id="outcows"></h3 ></div>
       
    </div>
    

    <script src="./B&C.js"></script>
    
</body>
</html>
