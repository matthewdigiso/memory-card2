const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;

function flipCard(e) {
    let clickedCard = e.target; 
    if(clickedCard !== cardOne) {
        clickedCard.classList.add('flip');
        if(!cardOne) {
            // return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        
        let cardOneImg = cardOne.querySelector('img'),
        cardTwoImg = cardTwo.querySelector('img');
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        return console.log ("Card matched");
    }

    cardOne.classList.add('shake');
    cardTwo.classList.add('shake');
}

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});