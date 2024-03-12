// Fonction pour trouver le mot le plus long dans une phrase
function longestWord(phrase) {
    const words = phrase.split(" ");
    let findLongestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > findLongestWord.length) {
            findLongestWord = words[i];
        }
    }
    console.log("Le mot le plus long dans la phrase est:", findLongestWord);
}

const phrase = "Bonjour à tous, comment ça va aujourd'hui ?";
longestWord(phrase);
