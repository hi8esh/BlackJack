// let firstCard = 10
// let secondCard = 4
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard] //array
let player = {
     name: "Per",
     chips: 200
  }

let cards = []
// let sum = firstCard + secondCard 
let sum =0
let hasBlackJack = false  
// let isAlive = true
let isAlive=false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips

// if (sum <= 20) {
//   console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//   console.log("Wohoo! You've got Blackjack!")
//     hasBlackJack = true
// }else  {
//   console.log("You're out of the game!")
//   isAlive = false
// }
// let sumEl = document.querySelector("#sum-el")

function getRandomCard() {
  // return 5
  // return Math.floor( Math.random()*13) + 1
  // so there're 13 cards a is represented as 11 and the q,j and k are 10 instead of 11,12 and 13 it must come out as 10
  let randomNumber = Math.floor(Math.random()*13) + 1 
  if (randomNumber > 10 ) {
    return 10
  } else if ( randomNumber === 1) {
    return 11 
  } else {
    return randomNumber
  }
}


  function startGame () {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()
    cards =[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame() 
  }


function renderGame() {
  // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
  cardsEl.textContent = "Cards: " 
  for (let i =0; i < cards.length; i++) {
    cardsEl.textContent  += cards[i] + " "
  }
  sumEl.textContent ="Sum: "  + sum
      if (sum <= 20) {
        message = "Do you want to draw a new card?"
      } else if (sum === 21) {
        message=  "You've got Blackjack!"
          hasBlackJack = true
      } else  {
        message= "You're out of the game!"
        // isAlive = false
        isAlive= true 
      }

      messageEl.textContent = message
}



function newCard () {
   if (isAlive === true && hasBlackJack === false) {
//let card = 6  
let card = getRandomCard()
sum += card
cards.push(card)
renderGame()
   }
}