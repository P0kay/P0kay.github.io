import { useEffect, useRef, useState } from "react"
import { Player } from "./PlayerClass"
import HiddenCard from "./components/HiddenCardComponent"
import newDeck from "./CreateDeck"
import PlayerSetup from "./components/PlayerSetup"
import Card from "./components/CardComponent"

function Poker() {
    const SMALL_BLIND = 10
    const BIG_BLIND = 20
    const STARTING_STACK = 1000
    const [shuffledDeckOfCards, setShuffledDeckOfCards] = useState([])
    const [smallBlind, setSmallBlind] = useState(0)
    const [players, setPlayers] = useState([])
    const [gameData, setGameData] = useState({
        turn: 0,
        currentBet: 0,
        playerTurn: 0,
        lastBetter: 0,
        smallBlind: 0,
        bigBlind: 0,
        pot: 0,
        inGameCards: []
    })
    const [raiseValue, setRaiseValue] = useState(0)
    const [raiseMenuOpen, setRaiseMenuOpen] = useState(false)
    const numberOfPlayersRef = useRef(null)
    const position = [
        ['player1 absolute left-[46%] bottom-60',
            [
                'absolute -rotate-12',
                'absolute left-6 top-2 rotate-6'
            ]],
        ['player2 bottom-[15%] left-[10%]',
            [
                'absolute -top-36 left-24 rotate-[45deg] scale-50',
                'absolute -top-32 left-24 rotate-[60deg] scale-50'
            ]],
        ['player3 top-[15%] left-[10%]',
            [
                'absolute -top-16 left-28 rotate-[125deg] scale-50',
                'absolute -top-16 left-24 rotate-[140deg] scale-50'
            ]],
        ['player4 top-[2%] left-[50%]',
            [
                'absolute top-2 -left-9 -rotate-[195deg] scale-50',
                'absolute top-0 -left-12 -rotate-[180deg] scale-50'
            ]],
        ['player5 top-[15%] right-[10%]',
            [
                'absolute -top-12 -left-44 -rotate-[125deg] scale-50',
                'absolute -top-12 -left-40 -rotate-[140deg] scale-50'
            ]],
        ['player6 bottom-[15%] right-[10%]',
            [
                'absolute -top-40 -left-40 -rotate-[55deg] scale-50',
                'absolute -top-36 -left-40 -rotate-[70deg] scale-50'
            ]]
    ]
    const isGameStartedRef = useRef(false)
    const shuffleDeck = () => {
        let tempDeckOfCards = [...newDeck]
        for (let i = tempDeckOfCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = tempDeckOfCards[i];
            tempDeckOfCards[i] = tempDeckOfCards[j];
            tempDeckOfCards[j] = temp;
        }
        setShuffledDeckOfCards(tempDeckOfCards)
    }
    const startGame = () => {
        setGameData({
            turn: 0,
            currentBet: 0,
            playerTurn: 0,
            lastBetter: 0,
            smallBlind: 0,
            bigBlind: 0,
            pot: 0,
            inGameCards: []
        })
        isGameStartedRef.current = false
        shuffleDeck()
    }
    const Call = () => {
        let bet = players[gameData.playerTurn].call(gameData.currentBet)
        setPlayers(players => [...players])
        setGameData(prevData => ({ ...prevData, pot: prevData.pot + bet, playerTurn: prevData.playerTurn + 1 === players.length ? 0 : prevData.playerTurn + 1 }))
    }
    const ShowRaiseMenu = () => {
        setRaiseMenuOpen(prev => !prev)
    }
    const Raise = (raiseValue) => {
        let bet = players[gameData.playerTurn].raise(raiseValue)
        if (raiseValue > gameData.currentBet && bet) {
            setPlayers(players => [...players])
            setGameData(prevData => ({ ...prevData, pot: prevData.pot + bet, lastBetter: prevData.playerTurn, playerTurn: prevData.playerTurn + 1 === players.length ? 0 : prevData.playerTurn + 1, currentBet: raiseValue }))
            setRaiseMenuOpen(prev => !prev)
        }
    }
    const Check = () => {
        setGameData(prevData => ({ ...prevData, playerTurn: prevData.playerTurn + 1 === players.length ? 0 : prevData.playerTurn + 1 }))
    }
    const Fold = () => {
        players[gameData.playerTurn].fold()
    }
    useEffect(() => {
        if (shuffledDeckOfCards.length > 0) {
            let tempPlayersArray = []
            for (let i = 0; i < numberOfPlayersRef.current?.value; i++) {
                let newPlayer = new Player(`player${i + 1}`)
                newPlayer.addCard(shuffledDeckOfCards.shift())
                newPlayer.addCard(shuffledDeckOfCards.shift())
                newPlayer.stack = STARTING_STACK
                tempPlayersArray.push(newPlayer)
            }
            let tempInGameCards = []
            for (let i = 0; i < 5; i++) {
                tempInGameCards.push(shuffledDeckOfCards.shift())
            }
            setGameData(prevData => ({ ...prevData, inGameCards: tempInGameCards }))
            setPlayers(tempPlayersArray)
        }
    }, [shuffledDeckOfCards])
    useEffect(() => {
        if (!isGameStartedRef.current && players.length > 0) {
            let smallBlind = Math.floor(Math.random() * (players.length))
            setSmallBlind(smallBlind)
            let bigBlind = smallBlind === players.length - 1 ? 0 : smallBlind + 1
            let playerTurn = bigBlind === players.length - 1 ? 0 : bigBlind + 1
            setGameData(prevData => ({ ...prevData, smallBlind: smallBlind, bigBlind: bigBlind }))
            players[smallBlind].call(SMALL_BLIND)
            players[bigBlind].call(BIG_BLIND)
            setGameData(prevData => ({ ...prevData, playerTurn: playerTurn, lastBetter: bigBlind + 1 === players.length ? 0 : bigBlind + 1, currentBet: BIG_BLIND, pot: SMALL_BLIND + BIG_BLIND }))
            isGameStartedRef.current = true
        }
    }, [players])
    useEffect(() => {

    }, [gameData.playerTurn])
    useEffect(() => {
        if (gameData.turn === 1) {

        }
        if (gameData.turn === 2) {

        }
        if (gameData.turn === 3) {

        }
        if (gameData.turn === 4) {

        }
    }, [gameData.turn])
    return (
        <div className={`flex flex-col items-center h-full pb-28 xl:pb-0`}>
            <p className="text-5xl text-center lg:fixed absolute top-0 z-20 flex items-center h-20 max-lg:m-6 z-20">Texas Hold'em Poker</p>

            <div className="flex flex-wrap relative w-full min-h-[inherit] bg-no-repeat bg-poker-table overflow-hidden bg-center bg-black items-center">
                <div className="absolute left-0 right-0 ms-auto me-auto w-fit top-10">
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
                {/* } */}
                <div className="player1 bottom-[1.5em] right-[3em] flex gap-4 [&>button]:h-16 [&>button]:w-40 text-2xl absolute">
                    <button className="btn" onClick={Fold}>Fold</button>
                    {gameData.currentBet > players[gameData.playerTurn]?.bet ?
                        <button className="btn" onClick={Call}>Call</button> :
                        <button className="btn" onClick={Check}>Check</button>}
                    <>
                        {players.length > 0 && raiseMenuOpen &&
                            <div className="flex flex-col items-center justify-center absolute bg-red-800 w-40 h-60 z-10 text-white right-0 bottom-16 rounded-t-lg">
                                <h1>
                                    ${raiseValue}
                                </h1>
                                <input type="range" min={gameData.currentBet + 20} max={players[gameData.playerTurn].stack + players[gameData.playerTurn].bet} step={20} className="" value={raiseValue} onInput={(e) => {
                                    setRaiseValue(e.target.value)
                                }} onMouseUp={(e) => {
                                    Raise(Number(e.target.value))
                                }} orient='vertical' />
                            </div>}
                        <button className="btn" onClick={ShowRaiseMenu}>Raise</button>
                    </>
                </div>

                <div className="[&>div]:absolute">
                    {players?.map((player, index) =>
                        <PlayerSetup key={index} position={position[index]} player={player} index={index} bigBlind={gameData.bigBlind} smallBlind={gameData.smallBlind} />
                    )}
                </div>
                <div className="flex justify-center scale-[70%]  left-[39em] top-[24em] w-full  justify-center  gap-4 text-4xl">
                    <>Pot: ${gameData.pot}</><br />
                    active: {gameData.playerTurn}<br />
                    turn: {gameData.turn}
                    {gameData.turn < 1 ?
                        <>
                            <HiddenCard className='' />
                            <HiddenCard className='' />
                            <HiddenCard className='' />
                        </> :
                        <>
                            {/* <Card suit={gameData.inGameCards[0].suit} symbol={gameData.inGameCards[0].symbol} />
                            <Card suit={gameData.inGameCards[1].suit} symbol={gameData.inGameCards[1].symbol} />
                            <Card suit={gameData.inGameCards[2].suit} symbol={gameData.inGameCards[2].symbol} /> */}
                        </>
                    }
                    <HiddenCard className='' />
                    <HiddenCard className='' />
                </div>
            </div>
        </div >
    );
}

export default Poker;