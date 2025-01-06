// takes a text as parameter
// returns all the words of the text separated as array elements

export const getTextWordsInArray = (text) => {
    const textWordsInArray = text.split(' ');
    return textWordsInArray;
}