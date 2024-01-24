let currentDeckId = "";

let cardArea = document.getElementById("card-area") 


const getApiUrl = (count, deck_id, shuffle) => {
  return `https://deckofcardsapi.com/api/deck/${deck_id ? deck_id : "new"}/${
    shuffle ? "shuffle" : "draw"
  }/?count=${count ? count : 1}`;
};

async function getCard() {
  // axios.get(getApiUrl(1, null, true)).then(function (result) {
  //   currentDeckId = result.data.deck_id;
  // }); 
  let data = await axios.get(getApiUrl(1, null, true))
  currentDeckId = data.data.deck_id;

}

async function getCardForDeck(deckId) {
    // // axios.get(getApiUrl(1, deckId, false)).then(function (result) {
    // //     const suit = result.data.cards[0].suit;
    // //     const value = result.data.cards[0].value;
    // //     console.log(`${value} of ${suit}`);
    // //     addCardToScreen(result.data.cards[0].image);
    //   });
      let data = await axios.get(getApiUrl(1, deckId, false))
     addCardToScreen(result.data.cards[0].image);
}


function addCardToScreen(imgUrl) {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.classList.add('card-img')

    img.style.rotate = `${Math.floor(Math.random() * 360)}deg`;

    cardArea.appendChild(img);
}

getCard(); 

document.getElementById("new-card").addEventListener("click", function () { getCardForDeck(currentDeckId) });

