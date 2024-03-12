// Tableau en dur
const numbers = [10, 5, 20, 15, 30];

// Trouver le plus grand nombre
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

console.log("Le plus grand nombre dans le tableau est:", maxNumber);
