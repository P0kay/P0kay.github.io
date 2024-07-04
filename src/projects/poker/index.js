import { useEffect, useRef, useState } from "react"
import Card from "./Card"
import { Player } from "./Player"
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
        symbols.forEach(symbol => {
            suits.forEach(suit => {
                setDeckOfCards(prev => [...prev, { suit, symbol }])
            })
        })
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
        console.log(players[0])
    })
    return (
        <div className={`flex flex-col items-center h-full pb-28 xl:pb-0`}>
            <p className="text-5xl text-center lg:fixed absolute top-0 z-20 flex items-center h-20 max-lg:m-6 z-20">Texas Hold'em Poker</p>

            <div className="flex flex-wrap relative w-full min-h-[inherit] bg-no-repeat bg-poker-table overflow-hidden bg-center">
                <div className="absolute left-[45%] top-16">
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
                    </div>
                }
                <div className="static [&>div]:absolute">
                    <div className="player2 bottom-[25%] left-[15%]">
                        player 2
                            {/* <HiddenCard className='absolute -rotate-12 scale-75' />
                            <HiddenCard className='absolute left-14 top-6 rotate-6 scale-75' /> */}
                    </div>
                    {players.length > 2 &&
                        <div className="player3 top-[25%] left-[15%]">
                            player 3
                        </div>}
                    {players.length > 3 &&
                        <div className="player4 top-[10%] left-[50%]">
                            player 4
                        </div>}
                    {players.length > 4 &&
                        <div className="player5 top-[25%] right-[15%]">
                            player 5
                        </div>}
                    {players.length > 5 &&
                        <div className="player6 bottom-[25%] right-[15%]">
                            player 6
                        </div>}
                </div>
                <div className="flex justify-center items-center left-[39em] top-[24em] w-full  justify-center items-center">
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