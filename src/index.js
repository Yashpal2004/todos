
let cards = []

// Decalaration/Initialisation of DOM
const content = document.getElementById("content")
const allButton = document.getElementById("all")
const newButton = document.getElementById("new")


const form = document.createElement("form")
const tl = document.createElement("label")
tl.setAttribute("for", "title")
tl.setAttribute("class", "label")
tl.innerText = "Title"
const ti = document.createElement("input")
ti.setAttribute("type", "text")
ti.setAttribute("name", "title")
ti.setAttribute("id", "title")
const dl = document.createElement("label")
dl.setAttribute("for", "description")
dl.setAttribute("class", "label")
dl.innerText = "Description"
const di = document.createElement("input")
di.setAttribute("type", "text")
di.setAttribute("name", "description")
di.setAttribute("id", "description")
const submitButton = document.createElement("button")
submitButton.type = "button"
submitButton.innerText = "Submit"



//EventListners
allButton.addEventListener("click", allCards)
newButton.addEventListener("click", newCard)

allCards()

//functions
function newCard() {
  content.innerHTML = ""

  form.append(tl, ti, dl, di, submitButton)
  content.appendChild(form)

  submitButton.addEventListener("click", submitValues)
}

function submitValues() {
  let card = {title:ti.value, description:di.value}
  cards.push(card)
  allCards()
}

function allCards() {
  content.innerHTML = ""

  for (let i = 0; i < cards.length; i++) {
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    let cardTitle = document.createElement("p")
    cardTitle.setAttribute("class", "cardTitle")
    let cardDesc = document.createElement("p")
    cardDesc.setAttribute("class", "cardDesc")

    cardTitle.innerText = cards[i].title
    cardDesc.innerText = cards[i].description

    card.append(cardTitle, cardDesc)
    content.append(card)

  }
}
