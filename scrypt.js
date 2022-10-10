// create an array of all images
const data = [
    {
        name:'2',
        img:'../assets/2.jpg'
    },
    {
        name:'3',
        img:'../assets/3.jpg'
    },
    {
        name:'4',
        img:'../assets/4.jpg'
    },
    {
        name:'5',
        img:'../assets/5.jpg'
    },
    {
        name:'6',
        img:'../assets/6.jpg'
    },
    {
        name:'7',
        img:'../assets/7.jpg'
    },
    {
        name:'8',
        img:'../assets/8.jpg'
    },
    {
        name:'9',
        img:'../assets/9.jpg'
    },
    {
        name:'10',
        img:'../assets/10.jpg'
    },
    {
        name:'ace',
        img:'../assets/ace.jpg'
    },
    {
        name:'jack',
        img:'../assets/jack.jpg'
    },
    {
        name:'queen',
        img:'../assets/queen.jpg'
    },
    {
        name:'king',
        img:'../assets/king.jpg'
    },
    {
        name:'joker',
        img:'../assets/joker.jpg'
    },
    {
        name:'2',
        img:'../assets/2.jpg'
    },
    {
        name:'3',
        img:'../assets/3.jpg'
    },
    {
        name:'4',
        img:'../assets/4.jpg'
    },
    {
        name:'5',
        img:'../assets/5.jpg'
    },
    {
        name:'6',
        img:'../assets/6.jpg'
    },
    {
        name:'7',
        img:'../assets/7.jpg'
    },
    {
        name:'8',
        img:'../assets/8.jpg'
    },
    {
        name:'9',
        img:'../assets/9.jpg'
    },
    {
        name:'10',
        img:'../assets/10.jpg'
    },
    {
        name:'ace',
        img:'../assets/ace.jpg'
    },
    {
        name:'jack',
        img:'../assets/jack.jpg'
    },
    {
        name:'queen',
        img:'../assets/queen.jpg'
    },
    {
        name:'king',
        img:'../assets/king.jpg'
    },
    {
        name:'joker',
        img:'../assets/joker.jpg'
    },

]

// get DOM reference
const gameContainer = document.querySelector('.game-container');
const playAgain = document.querySelector('.play-again')
const score = document.getElementById('score')
const moves = document.getElementById('moves')

score.innerHTML = 0;
moves.innerHTML = 0



// here store the name
let cardsChosen = [];
// here store the index
let cardsChosenId = [];

let lockBoard =  false;


// randomize list of img
data.sort (()=> Math.random() - 0.5)


function createGame() {
        playAgain.classList.add('hide')

        // use for loop to generate cards, create an id to each card.
    for (let index = 0; index < data.length; index++) {
        const cardContainer = document.createElement('div')
        const card = document.createElement('img');
        cardContainer.classList.add('card-container');
        card.setAttribute('src' , 'assets/backCard.jpg');
        card.setAttribute('data-id', index);
        card.addEventListener('click', flipCard);
        gameContainer.appendChild(cardContainer);
        cardContainer.appendChild(card);
    };
};

createGame()



// check for matches 
function checkForMatch () {

    const cards = document.querySelectorAll('img');
    let firstChoice = cardsChosenId[0]
    let secondChoice = cardsChosenId[1]

        // check matching condition
    if (cardsChosen[0] === cardsChosen[1]  && firstChoice !== secondChoice ) {
        cards[firstChoice].setAttribute('src', 'assets/image-found.png')
        cards[secondChoice].setAttribute('src', 'assets/image-found.png')

        // disable founded cards
        cards[firstChoice].classList.add('disableClick')
        cards[secondChoice].classList.add('disableClick');

        //  push score
        score.innerHTML ++
     
    }else {
        cards[firstChoice].setAttribute('src', 'assets/backCard.jpg')
        cards[secondChoice].setAttribute('src', 'assets/backCard.jpg')
        cards[firstChoice].classList.remove("flip"); 
        cards[secondChoice].classList.remove("flip")
    }

            
        // clear data
        cardsChosen = []
        cardsChosenId =[]
    
        moves.innerHTML ++ 
        lockBoard = false;


    // check if all image are found
    checkForFound()
     
}





function flipCard () {
 //if user already click 2 cards lock the bord
    if(lockBoard) return; 

    // push selected card to new array, to check condition later.
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(data[cardId].name)
    cardsChosenId.push(cardId)
    
    this.setAttribute('src', data[cardId].img)
    this.classList.add('flip')
    if (cardsChosen.length === 2 ) {
        lockBoard = true;
        setTimeout(checkForMatch, 1500)
    }

    
}


// funct check if all cards found
function checkForFound () {
    if (score.innerHTML == data.length/2) {
        gameContainer.classList.add('hide')
        const x = document.querySelector('.play-again')
        x.classList.remove('hide')
        const winMsg = document.querySelector('.h2');
        winMsg.textContent = `
        Congratulation, You found all ${data.length/2} images in ${moves.innerText} moves`
    }
}



// reset your game
const StartNewGame = () => {
    if(confirm(' You are sure you want to start a new game? All progress will be lost ! ')) {
        window.location.reload();
    } else {
       return
    }
}



