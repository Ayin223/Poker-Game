
//creating variables

let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message= ''
let messageEl = document.getElementById('message-El')
//let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
// new way of grabbing element from html querySelector("#")
let sumEl = document.querySelector('#sum-el')
//let newCard = document.querySelector('.start-button')

let winsEl = document.getElementById('win-el')
let losesEl = document.getElementById('loses-el')

// if (){

// }else{

// }

let player = {
    name:'BGray',
    chips: 100,
    remainingCHips: [],
    wins: [],
    loses: []
}


let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips

// Functions
// my additions
function chipsLeft(){
    if( hasBlackJack===true ){
        player.remainingCHips.push(player.chips +=10)
    } else if ( isAlive=== false){
        player.remainingCHips.push(player.chips -=10)
    }
    playerEl.textContent = player.name + ': $' + player.remainingCHips
}



function renderGame(){
    cardEl.innerText = 'Cards: '
    
    for(let i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ' '
    }
    

    if(sum <= 20){
        isAlive= true
        message = ' Do you want to draw a new card? '
    } else if(sum === 21){
        hasBlackJack = true
        message = " Wow You've got Blackjack "
    } else {
        isAlive = false
        message = " You're out of the game"
    }
    messageEl.textContent= message
    sumEl.textContent = 'Sum: ' + sum
 

}

function startGame(){
    isAlive= true
    let firstCard= getRandoCard()
    let secondCard= getRandoCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

    // my additions
    if(isAlive==false || hasBlackJack==true){
        chipsLeft()
    }
    
    // if( isAlive== false){
    //     return player.wins +=
    //     player.wins.push(player.wins +=1)
    //     winsEl.textContent ='Wins: ' + player.wins 
    // }
}

function newCard(){
    if (isAlive===true && hasBlackJack===false){
        let nextCard= getRandoCard()
        sum += nextCard
        cards.push(nextCard)
        renderGame()
    }

    // my additions
    if(isAlive==false || hasBlackJack==true){
        chipsLeft()
    }
    

}

function getRandoCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1

    if( randomNumber === 1){
        return 11
    }else if( randomNumber >10){
        return 10
    } else{
        return randomNumber
    }
}


