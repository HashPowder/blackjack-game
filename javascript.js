let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let message = ""

if (sum < 21) {
    message = "Would you like to draw another card?"
} else if (sum === 21) {
    message = "Wohoo! You've got blackjack!"
} else {
    message = "Oh no! You've gone Bust!"
}