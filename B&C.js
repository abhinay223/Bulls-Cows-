// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


function generateSecretCode() {
    let code = '';
    while (code.length < 4) {
        const digit = Math.floor(Math.random() * 10);
        if (!code.includes(digit.toString())) {
            code += digit;
        }
    }
    return code;
}


function calculateBullsAndCows(guess, secretCode) {
    let bulls = 0;
    let cows = 0;
     //let guessArray = guess.split('');
    //let guessArray = guess;
    //alert(guessArray);
    
    let secretArray = secretCode.split('');
    //let guessArray = guess1.split('');

    // Count bulls
    var input1 = document.getElementById('guess-input');
    var input2 = input1.value;
    
    for (let i = 0; i < 4; i++) {
        
        if (input2[i] === secretArray[i]) {
            bulls++;
            input2[i] = secretArray[i] = null; 
        }
    }

    // Count cows
    for (let i = 0; i < 4; i++) {
        if (input2[i] !== null && secretArray.includes(input2[i])) {
            cows++;
            secretArray[secretArray.indexOf(input2[i])] = null; 
        }
    }

    return { bulls, cows };
}

function playGame() {
    

    //const readline = require('readline');
    
    
    // const rl = readline.createInterface({
    //    input: process.stdin,
    //    output: process.stdout
    // });

    
    const secretCode = generateSecretCode();
    
    let attempts = 0;

    console.log("Welcome to Bulls and Cows!");
    console.log("Try to guess the 4-digit number with no repeating digits.");

   
    function askQuestion() {
        // rl.question('Enter your guess: ', (guess) => {
        //     guess = guess.trim();
        const readline = document.getElementById('guess-input');
        var input = readline.value;
        var guess = parseFloat(input);
       var guess1 = guess.toString();
        



            
            if (input.length !== 4 || isNaN(guess1) || new Set(guess1).size !== 4) {
                console.log('Invalid guess. Please enter a 4-digit number with no repeated digits.');
                //askQuestion();
                return;
            }
            

            attempts++;
            const { bulls, cows } = calculateBullsAndCows(guess, secretCode);
            console.log(`${bulls} Bulls, ${cows} Cows`);
            

           
            if (bulls === 4) {
                console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
                rl.close();
            } else {
                //askQuestion();
            }
        // });
        let outBulls = bulls ;
        document.getElementById("outbulls").innerHTML = outBulls; // Display the variable

        let outcows = cows ;
        document.getElementById("outcows").innerHTML = outcows; // Display the variable
    }

   askQuestion();
}

//playGame();
