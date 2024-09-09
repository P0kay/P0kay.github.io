import { useEffect, useRef, useState } from "react"
import Card from "./Card"
import { Player } from "./PlayerClass"
import HiddenCard from "./HiddenCard"

function Poker() {
    const [deckOfCards, setDeckOfCards] = useState([])
    const [shuffledDeckOfCards, setShuffledDeckOfCards] = useState([])
    const [players, setPlayers] = useState([])
    const [gameData, setGameData] = useState({ turn: 1, currentBet: 0, playerTurn: 0 })
    const numberOfPlayersRef = useRef(null)
    const createDeck = () => {
        let suits = ['hearts', 'diamonds', 'clubs', 'spades']
        let symbols = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
        let tempDeckOfCards = []
        symbols.forEach(symbol => {
            suits.forEach(suit => {
                tempDeckOfCards.push({ suit, symbol })
            })
        })
        setDeckOfCards(tempDeckOfCards)
    }
    const shuffleDeck = () => {
        let tempDeckOfCards = [...deckOfCards]
        for (let i = tempDeckOfCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = tempDeckOfCards[i];
            tempDeckOfCards[i] = tempDeckOfCards[j];
            tempDeckOfCards[j] = temp;
        }
        setShuffledDeckOfCards(tempDeckOfCards)
    }
    const startGame = () => {
        shuffleDeck()
    }
    useEffect(() => {
        createDeck();
    }, [])
    useEffect(() => {
        if (shuffledDeckOfCards.length > 0) {
            let tempPlayersArray = []
            for (let i = 0; i < numberOfPlayersRef.current?.value; i++) {
                let newPlayer = new Player(`player${i + 1}`)
                newPlayer.addCard(shuffledDeckOfCards.shift())
                newPlayer.addCard(shuffledDeckOfCards.shift())
                tempPlayersArray.push(newPlayer)
            }
            setPlayers(tempPlayersArray)
        }
    }, [shuffledDeckOfCards])
    useEffect(() => {
        console.log(players)
    })
    return (
        <div className={`flex flex-col items-center h-full pb-28 xl:pb-0`}>
            <p className="text-5xl text-center lg:fixed absolute top-0 z-20 flex items-center h-20 max-lg:m-6 z-20">Texas Hold'em Poker</p>

            <div className="flex flex-wrap relative w-full min-h-[inherit] bg-no-repeat bg-poker-table overflow-hidden bg-center">
                <div className="absolute left-[45%] top-[30%] z-10">
                    <button onClick={startGame}>
                        Start the game
                    </button>
                    <select name="number of players" id="number of players" className="text-black" ref={numberOfPlayersRef}>
                        <option value="2">2 players</option>
                        <option value="3">3 players</option>
                        <option value="4">4 players</option>
                        <option value="5">5 players</option>
                        <option value="6">6 players</option>
                    </select>
                </div>
                <div className="player1 bottom-[1.5em] right-[3em] flex gap-4 [&>button]:h-16 [&>button]:w-40 text-2xl absolute">
                    <button className="btn">Fold</button>
                    <button className="btn">Check</button>
                    <button className="btn">Raise</button>
                </div>

                {players.length !== 0 &&
                    <div className="absolute left-[46%] bottom-60">
                        <Card suit={players[0].hand[0].suit} symbol={players[0].hand[0].symbol} className='absolute -rotate-12' />
                        <Card suit={players[0].hand[1].suit} symbol={players[0].hand[1].symbol} className='absolute left-6 top-2 rotate-6' />
                        <div className="absolute font-[Bitter] w-20 h-8 -right-96 bottom-0 bg-white text-black rounded-2xl border-2 border-black flex justify-center items-center font-bold text-xl">
                            ${players[0].stack}
                        </div>
                    </div>
                }
                <div className="static [&>div]:absolute">
                    {players.length > 0 &&
                        <div className="player2 bottom-[15%] left-[10%]">
                            {players[1].username}
                            <HiddenCard className='absolute -top-36 left-24 rotate-[45deg] scale-50' />
                            <HiddenCard className='absolute -top-32 left-24 rotate-[60deg] scale-50' />
                        </div>
                    }
                    {players.length > 2 &&
                        <div className="player3 top-[15%] left-[10%]">
                            {players[2].username}
                            <HiddenCard className='absolute -top-16 left-28 rotate-[125deg] scale-50' />
                            <HiddenCard className='absolute -top-16 left-24 rotate-[140deg] scale-50' />
                        </div>}
                    {players.length > 3 &&
                        <div className="player4 top-[2%] left-[50%]">
                            {players[3].username}
                            <HiddenCard className='absolute top-2 -left-9 -rotate-[195deg] scale-50' />
                            <HiddenCard className='absolute top-0 -left-12 -rotate-[180deg] scale-50' />
                        </div>}
                    {players.length > 4 &&
                        <div className="player5 top-[15%] right-[10%]">
                            {players[4].username}
                            <HiddenCard className='absolute -top-12 -left-44 -rotate-[125deg] scale-50' />
                            <HiddenCard className='absolute -top-12 -left-40 -rotate-[140deg] scale-50' />
                        </div>}
                    {players.length > 5 &&
                        <div className="player6 bottom-[15%] right-[10%]">
                            {players[5].username}
                            <HiddenCard className='absolute -top-40 -left-40 -rotate-[55deg] scale-50' />
                            <HiddenCard className='absolute -top-36 -left-40 -rotate-[70deg] scale-50' />
                        </div>}
                </div>
                <div className="flex justify-center scale-[70%] items-center left-[39em] top-[24em] w-full  justify-center items-center gap-4">
                    <HiddenCard className='' />
                    <HiddenCard className='' />
                    <HiddenCard className='' />
                    <HiddenCard className='' />
                    <HiddenCard className='' />
                </div>
            </div>
        </div>
    );
}

export default Poker;