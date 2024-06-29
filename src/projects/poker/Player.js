export class Player {
    username = ""
    stack = 1000
    hand = []
    bet = 0
    constructor(username) {
        this.username = username
    }
    addCard(card) {
        this.hand.push(card)
    }
    call(currentBet) {
        this.bet = currentBet
    }
    fold(currentBet) {

    }
    raise(currentBet) {

    }
    check(currentBet) {
        return currentBet === 0
    }
}