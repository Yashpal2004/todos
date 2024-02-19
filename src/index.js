import { newcard } from "./new_card";

let cards = []
let numCards = 0

const newButton = document.getElementById("new")
newButton.addEventListener("click", () => {
  cards[numCards] = newcard(numCards)
})




console.log("index")
