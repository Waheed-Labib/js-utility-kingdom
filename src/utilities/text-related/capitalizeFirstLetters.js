import capitalizeFirstLetter from "./capitalizeFirstLetter";

const capitalizeFirstLetters = (text) => {
    const words = text.split(' ');

    const capitalizedWords = words.map(word => capitalizeFirstLetter(word))

    const newText = capitalizedWords.join(' ')

    return newText;
}
