// takes a text as parameter
// returns all the words of the text separated as array elements

const getTextWordsInArray = (text) => {
    const textWordsInArray = text.split(' ');
    return textWordsInArray;
}

export default getTextWordsInArray;