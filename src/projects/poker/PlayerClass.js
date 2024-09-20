export class Player {
    username = ""
    stack = 0
    hand = []
    bet = 0
    folded = false
    constructor(username) {
        this.username = username
    }
    addCard(card) {
        this.hand.push(card)
    }
    call(currentBet) {
        let betValue
        if (this.stack >= currentBet - this.bet) {
            betValue = currentBet - this.bet
            this.stack -= betValue
            this.bet = currentBet
        }
        else {
            betValue = this.stack
            this.bet += this.stack
            this.stack = 0
        }
        return betValue
    }
    fold() {
        this.folded = true
    }
    raise(raiseValue) {
        if (raiseValue <= this.stack + this.bet) {
            let betValue = raiseValue - this.bet
            this.stack -= betValue
            this.bet = raiseValue
            return betValue
        }
        return false
    }
    check(currentBet) {
        return currentBet === 0
    }
    newRound(){
        this.hand = []
        this.bet = 0
        this.folded = false
    }
}