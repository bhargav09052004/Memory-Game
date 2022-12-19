document.addEventListener('DOMContentLoaded',()=>{
    // card options
const cardArray=[

{ 
name:'Nani',
img:'images/nani.png'
},
{ 
name:'Nani',
img:'images/nani.png'
},
{
name:'Adivi Sesh',
img:'images/adivi sesh.png'
},
{
name:'Adivi Sesh',
img:'images/adivi sesh.png'
},
{
name:'Viswak Sen',
img:'images/viswak sen.png'

},
{
name:'Viswak Sen',
img:'images/viswak sen.png'
},
{
name:'Suhaas',
img:'images/suhaas.png'
},
{
name:'Suhaas',
img:'images/suhaas.png'
},
{
name:'Vijay Sethupati',
img:'images/vijay sethupati.png'
},
{
name:'Vijay Sethupati',
img:'images/vijay sethupati.png'
},
{
name:'DQ',
img:'images/DQ.png'
},
{
name:'DQ',
img:'images/DQ.png'
}
]
const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var  cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []
  cardArray.sort(() => 0.5 - Math.random())
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }


  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
    createBoard()
  })