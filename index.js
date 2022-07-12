function reverseWords(sentence) {
    //split sentence into an array of words
    const words = sentence.split(' ');
   
    //map through the words and split each word into an array of letters, keeping the words (arrays) in order
    // reverse the order of each array
    const wordArrays = words.map((word) => word.split('').reverse());
    // console.log(wordArrays);

    // join the letters and words back into a sentence
    const backwardsWords = wordArrays.map((wordArray) => wordArray.join(''));
    // console.log(backwardsWords);

    const backwardsSentence = backwardsWords.join(' ');
    // console.log(backwardsSentence);
    //return the sentence with reversed words

    return backwardsSentence;
}

function titleCase(sentence) {
    //make entire sentence lowercase
    const lowercase = sentence.toLowerCase();
    // console.log(lowercase);

    //split sentence into an array of words
    const words = lowercase.split(' ');
    // console.log(words);

    //loop through the words and capitalize the first letter, lowercase the rest 
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

module.exports = { reverseWords, titleCase };
