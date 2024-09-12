const suits = ['hearts', 'diamonds', 'clubs', 'spades']
const symbols = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
let newDeck = []
symbols.forEach(symbol => {
    suits.forEach(suit => {
        newDeck.push({ suit, symbol })
    })
})
export default newDeck