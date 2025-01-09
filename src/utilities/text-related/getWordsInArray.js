// takes a text as parameter
// returns all the words of the text separated as array elements

const getWordsInArray = (text) => {
    const wordsInArray = text.split(' ');
    return wordsInArray;
}

export default getWordsInArray;