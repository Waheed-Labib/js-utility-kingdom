const capitalizeFirstLetter = (word) => {
    const letters = word.split('')

    const firstLetter = letters.shift();
    const firstLetterCapitalized = firstLetter.toUpperCase();

    const newLetters = [firstLetterCapitalized, ...letters]
    const newWord = newLetters.join('')

    return newWord
}

export default capitalizeFirstLetter;