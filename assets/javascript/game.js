/*

Logic for the Hangman Game
Matthew Womack, Jan 2018.
Last updated Jan 22nd, 2018.

*/


/* get random word and return as an array object */

function wordRandom () {

    /* string arrays */
    var testArray = ["one","two","three","four","five"];
    var testArray2 = ["pizza","hotdogs","hamburgers","tacos","pasta","salad","sandwich","sushi"];
    
    /* internal function to return a random string from the above arrays */
    function randomArray (paramArray) 
        {
             return paramArray[Math.floor(Math.random() * paramArray.length)];
        }
    /* assign random word*/

    var getRandomWord = randomArray(testArray2);
    
    /* return random word as a array object */
    return getRandomWord.split("");

    }

function keyPressed (event) {
    return event.key;
}

function initWord(wordPassed) {
    var i , wordTest = [];

    for (i = 0; i < wordPassed.length ; ++i)
    {
       wordTest[i] = "false";    
       console.log(wordTest[i]); 
    }
    wordTest[wordPassed.length] = wordPassed.toString();
    return wordTest;
}

function initGameBoard () {
    var wordTest = "hootdogs".split("");

    for (var x=0; x < wordTest.length; ++x) {
        interestsRefId.innerHTML += "_";
       }

}

//var wordTest = wordRandom();
var wordTest = "hootdogs".split("");
var tries = 5;

function checkMatch () {

console.log(wordTest);

while (tries > 0 && wordTest.length > 0 ) {

var keyPressed = prompt("Enter a key. You have " + tries + " left. To stop the game, type 'stop'. ");

function recursiveRemove (tempKey) {
    var index = wordTest.indexOf(tempKey);
    wordTest.splice(index,1);
    console.log("It exists!", tempKey, wordTest); 
}

if (wordTest.includes(keyPressed) == true)

    {
       /* internal function to handle removing singular values and multiple values */ 

            recursiveRemove(keyPressed);

           /* after removing the first occurrance of keyPressed, remove all other occurrences also */
           
            while (wordTest.includes(keyPressed) == true) 
                {
                    recursiveRemove(keyPressed);
                }
    }     

else if (keyPressed == "stop")

    {
        console.log("stopping...bye :( ");
        break;
    
    } 

else if ((wordTest.includes(keyPressed) == false) && (tries > 0))
    {
        console.log("Does not exist - try again! ", wordTest);
        tries--;
    }


else if (tries > 0 && wordTest.length == 0)

    {
        console.log("congrats, you've won!");
        break;
    
    }

else if (tries == 0 && wordTest.length > 0)

    {
        console.log("game over man... game over!");

    }
    
}

// Check final state - either you've won... or lost!

    if (tries == 0 && wordTest.length > 0)

    {

    console.log("game over man... game over!");

    }

else if (tries > 0 && wordTest.length == 0)

    {

console.log("congrats, you've won!");
    
    }
    
}

