export class Player {
    username = ""
    stack = 0
    hand = []
    bet = 0
    constructor(username) {
        this.username = username
    }
    addCard(card) {
        this.hand.push(card)
    }
    call(currentBet) {
        if (this.stack >= currentBet) {
            this.bet = currentBet
            this.stack -= currentBet
        }
        else {
            this.bet = this.stack
            this.stack = 0
        }
        return this.bet
    }
    fold(currentBet) {

    }
    raise(raiseValue) {
        this.bet = raiseValue
        this.stack -= raiseValue
        return this.bet
    }
    check(currentBet) {
        return currentBet === 0
    }
}