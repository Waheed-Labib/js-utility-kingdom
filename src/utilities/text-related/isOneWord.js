// takes a text as parameter
// returns true if the text has only one word
// returns false otherwise

const isOneWord = (text) => {

    if (text.length > 0 && text.split(' ').length === 1) return true

    else return false
}

export default isOneWord;