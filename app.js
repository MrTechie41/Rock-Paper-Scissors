const ComputerChoiceDisplay = document.getElementById('Computer-Choice')
const UserChoiceDisplay = document.getElementById('User-Choice')
const ResultDisplay = document.getElementById('Result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    UserChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1 //or you can use possibleChoices.length
    
    if (randomNumber === 1) {
        ComputerChoice = 'Rock' 
    }
    if (randomNumber === 2) {
        ComputerChoice = 'Paper' 
    }
    if (randomNumber === 3) {
        ComputerChoice = 'Scissor' 
    }
    ComputerChoiceDisplay.innerHTML = ComputerChoice
}

function getResult() {
    if (ComputerChoice === userChoice) {
        result = 'its a Draw!'
    }
    if (ComputerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You Win!'
    }
    if (ComputerChoice === 'Rock' && userChoice === 'Scissor') {
        result = 'You Lost!'
    }
    if (ComputerChoice === 'Paper' && userChoice === 'Scissor') {
        result = 'You Win!'
    }
    if (ComputerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You Lost!'
    }
    if (ComputerChoice === 'Scissor' && userChoice === 'Rock') {
        result = 'You Win!'
    }
    if (ComputerChoice === 'Scissor' && userChoice === 'Paper') {
        result = 'You Lost!'
    }
    ResultDisplay.innerHTML = result
}