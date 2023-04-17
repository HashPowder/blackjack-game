let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Would you like to draw another card?")
} else if (sum === 21) {
    console.log("Wohoo! You've got blackjack!")
} else {
    console.log("Oh no! You've gone Bust!")
}