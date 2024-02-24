/* import {dictionaryPromise} from './retrieve_word.js'  */
/* import {getWordWithDefinition} from './retrieve_word.js'  */
/* import { callInPlayGame } from './text_to_speech.js'; */

let playerInput = document.getElementById("player-input"); //use #?
const submitButton = document.getElementById("player-submit")
const start = document.getElementById("start")


/* submitButton.addEventListener("click", () => {
    let isCorrect = true;
    while (isCorrect) {

        dictionaryPromise.then((dictionary) => {

            const gameWord = dictionary[0];
            let isCorrect = false;
            if (playerInput.value === gameWord){
                isCorrect = true
            } else {
                isCorrect = false
            }
            console.log(isCorrect)
            return isCorrect;
            
        }).then((isCorrect) => {
            if (!isCorrect) {
                console.log("GAMEOVER") //make alert and return to the home screen
            } else{
                console.log("continue game")
                
            }
        }).catch((err) => {
            console.log("rejected:", err)
        })
    }
}) */


/* start.addEventListener("click", () => {
    callInPlayGame().then((dictionary) => {
        const gameWord = dictionary[0]
        console.log("word is:", gameWord)
        if (playerInput.value === gameWord){
            console.log("correct")
        }
    })
}) */
