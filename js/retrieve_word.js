export {getWordWithDefinition} 

const randWordURL = 'https://random-word-api.herokuapp.com/word';

const randomWordGenerator = async () => {
    const response = await fetch(randWordURL);
    if (!response.ok){
        throw new Error('Cannot fetch the data');
    }
    //const data = await response.json
    return response.json(); //RETURN DATA INSTEAD??
};

const getWordWithDefinition = () => randomWordGenerator()
    .then((randWord) =>{
        return fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randWord}?key=fd0ae288-678d-4cd4-a1f2-03babf606d0c`)
        //UNCOMMENT THIS
    })
    .then((response) =>{
        let dataObject = response.json()
        //console.log(dataObject)
        return dataObject
    })
    .then((dataObject) => {
        console.log(dataObject) //Entire json obkect

        //Chat GPT in if statement --> no clue how question marks here work
        if (!Array.isArray(dataObject) || dataObject.length === 0 || !dataObject[0].meta?.id || !dataObject[0].shortdef?.[0] || !dataObject[0].date) {
            console.log("Conditions not met. Returning from the function.");
            return getWordWithDefinition();
        }

        console.log("After conditional check. Proceeding with the rest of the logic.");
        let dictWord = dataObject[0].meta.id;
        if (dictWord.includes(":")){
            dictWord = dictWord.split(":")[0] //removes everything after a colon if it shows up
        }

        const dictDef = dataObject[0].shortdef[0];
        const dictCreationYear = dataObject[0].date; //has weird symbols after it sometimes //could delete too. Add in place of origin
        const returnArr = [dictWord, dictDef, dictCreationYear]
        //console.log("Word:", dictWord);
        //console.log("Definition:", dictDef);
        //console.log("Creation Year:", dictCreationYear);
        
        return returnArr;
    })
    .catch((err) => console.log('Rejected', err.message));

export const dictionaryPromise = getWordWithDefinition(); 






