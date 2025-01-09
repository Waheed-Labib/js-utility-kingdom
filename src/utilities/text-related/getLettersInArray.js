// takes a word as parameter
// returns all the letters of the word separated as array elements

const getLettersInArray = (text) => {
    const lettersInArray = text.split('');
    return lettersInArray;
}

export default getLettersInArray;