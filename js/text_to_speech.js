
 import {dictionaryPromise} from './retrieve_word.js'
/* export {callInPlayGame} */
import {getWordWithDefinition} from './retrieve_word.js'
const sound = document.getElementById("sound")
//this is a function


/* function callInPlayGame(){ */

/*     getWordWithDefinition()
    .then((dictionary) => {
        console.log(dictionary)
        let speech = new SpeechSynthesisUtterance();
        let voices = [];
        let voiceSelect = document.querySelector("select");

        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            speech.voice = voices[0];
            voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
        }

        voiceSelect.addEventListener("change", () => {
            speech.voice = voices[voiceSelect.value]
        })

        //need to wait a second before pressing the sound button
        document.querySelector(".sound").addEventListener("click",  () => {
            speech.text = dictionary[0]
            console.log("word is:", dictionary[0])
            returnValue = dictionary[0] //returns just word
            
            //speech.text = "hello" //comment out so this works
            window.speechSynthesis.speak(speech);
        })
    }).then((dictionary) => {
        const gameWord = dictionary[0]
        console.log("word is:", gameWord)
        if (playerInput.value === gameWord){
            console.log("correct")
        }
    }) */
    
    
    /* .catch((err) => {
        console.log("error in TTS: ", err)
    }) */
    //return returnValue
/* } */


/* function callInPlayGame() {
    return getWordWithDefinition()
        .then((dictionary) => {
            console.log(dictionary);
            let speech = new SpeechSynthesisUtterance();
            let voices = [];
            let voiceSelect = document.querySelector("select");

            window.speechSynthesis.onvoiceschanged = () => {
                voices = window.speechSynthesis.getVoices();
                speech.voice = voices[0];
                voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
            }

            voiceSelect.addEventListener("change", () => {
                speech.voice = voices[voiceSelect.value];
            })

            // Need to wait a second before pressing the sound button
            return new Promise((resolve) => {
                sound.addEventListener("click", () => {
                    speech.text = dictionary[0];
                    console.log("word is:", dictionary[0]);

                    speech.onend = () => {
                        resolve(dictionary[0]);
                    };

                    // Uncomment the line below to make it work
                    // speech.text = "hello";
                    console.log(speech.text)
                    window.speechSynthesis.speak(speech);
                });
            });
        });
} 
 */
// Usage
/* start.addEventListener("click", () => {
    callInPlayGame()
        .then((dictionaryValue) => {
            const gameWord = dictionaryValue[0];
            console.log("word is:", gameWord);

            if (playerInput.value === gameWord) {
                console.log("correct");
            }
        })
        .catch((error) => {
            console.error("Error in callInPlayGame:", error);
            // Handle the error as needed
        });
}); */

// Can call word before start button, it just depends on how I want to approach this, it may be simpler
// This way rather than calling it after start button is clicked.
dictionaryPromise.then((dictionary) => {
    console.log(dictionary)
    let speech = new SpeechSynthesisUtterance();
    let voices = [];
    let voiceSelect = document.querySelector("select");

    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        speech.voice = voices[0];
        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    }

    voiceSelect.addEventListener("change", () => {
        speech.voice = voices[voiceSelect.value]
    })

    //need to wait a second before pressing the sound button
    document.getElementById("sound").addEventListener("click",  () => {
        speech.text = dictionary[0]
        console.log("word is:", dictionary[0])
        //speech.text = "hello" //comment out so this works
        window.speechSynthesis.speak(speech);
    })
}) 
