
// const myDeck = {
//   deck: [],
//   drawnCards: [],
//   suits: ['hearts', 'diamonds', 'spades', 'clubs'],
//   values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//   initializeDeck() {
//     const {
//       suits,
//       values,
//       deck
//     } = this;
//     for (let value of values.split(',')) {
//       for (let suit of suits) {
//         deck.push({
//           value,
//           suit
//         })
//       }
//     }
//   },
//   drawCard() {
//     const card = this.deck.pop();
//     this.drawnCards.push(card);
//     return card;
//   },
//   drawMultiple(numOfCards) {
//     const cards = [];
//     for (let i = 0; i < numOfCards; i++) {
//       cards.push(this.drawCard());
//     }
//     return cards;
//   },
//   shuffle() {
//     const { deck } = this;
//     for (let i = deck.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//   }
// }

const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
      const {
        suits,
        values,
        deck
      } = this;
      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
            value,
            suit
          })
        }
      }
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(numOfCards) {
      const cards = [];
      for (let i = 0; i < numOfCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  }
}

myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
console.log(myDeck.drawCard());
console.log(myDeck.drawCard());
console.log(myDeck.drawnCards);
myDeck.drawMultiple(6);
console.log(myDeck.drawnCards);

