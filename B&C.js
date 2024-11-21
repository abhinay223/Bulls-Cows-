var secretCode = '0000';
var input1 = '';
var x = document.getElementById("guess-section");
x.style.display = 'none';
var y = document.getElementById("reset-div");
y.style.display = 'none';

function generateSecretCode() {

    var z = document.getElementById('new-game');
  z.style.display = 'none';
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
  
    
    let secretArray = secretCode.split('');
   

    // Count bulls
     input1 = document.getElementById('guess-input');
    input1.disable = true;
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

    // const secretCode = generateSecretCode();
    
    let attempts = 0;

  

   
    function askQuestion() {
     
        const readline = document.getElementById('guess-input');
        var input = readline.value;
        var guess = parseFloat(input);
       var guess1 = guess.toString();
        



            
            if (input.length !== 4 || isNaN(guess1) || new Set(guess1).size !== 4) {
                console.log('Invalid guess. Please enter a 4-digit number with no repeated digits.');
                alert('Number is invalid, Please enter the number');
               
                return;
            }
            

            attempts++;

            const { bulls, cows } = calculateBullsAndCows(guess, secretCode);
            console.log(`${bulls} Bulls, ${cows} Cows`);
            

           
            if (bulls === 4) {
                console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
               
            } else {
               
            }
    
        let outBulls = bulls ;
        document.getElementById("outbulls").innerHTML = outBulls; 

        let outcows = cows ;
        document.getElementById("outcows").innerHTML = outcows; 
    }

   askQuestion();
}

function newGame(){
    console.log("Welcome to Bulls and Cows!");
    console.log("Try to guess the 4-digit number with no repeating digits.");
    secretCode = generateSecretCode();
    x.style = 'block';
  
  y.style = 'block';
    console.log('secret code'+secretCode);

    document.getElementById("outbulls").innerHTML = 0; 
    document.getElementById("outcows").innerHTML = 0; 

    

}


