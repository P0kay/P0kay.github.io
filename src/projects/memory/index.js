import { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Memory() {
    const animalList = [
        { name: 'frog' },
        { name: 'fox' },
        { name: 'cat' },
        { name: 'dog' },
        { name: 'capibara' }]
    const [shuffledMemoryList, setShuffledMemoryList] = useState([])
    const startButtonRef = useRef(null)
    const [chosenCards, setChosenCards] = useState([])
    const [cardsGuessedCorretly, setCardsGuessedCorrectly] = useState(0)

    const startMemoryGame = () => {
        setShuffledMemoryList(shuffleArray(animalList))
        startButtonRef.current.remove()
    }

    const shuffleArray = (arr) => {
        arr = [...arr, ...arr]
        let tempArr = []
        for (let i = arr.length - 1; i >= 0; i--) {
            let idx = Math.floor(Math.random() * (i + 1))
            tempArr.push({ ...arr[idx], isEnabled: true })
            arr.splice(idx, 1)
        }
        return tempArr
    }

    const revealCardAnimation = ({ name, cardRef }) => {
        cardRef.current.innerHTML = ''
        cardRef.current.animate([
            { backgroundImage: `url("/animal_images/${name}.png")` }
        ],
            {
                duration: 250,
                iterations: 1,
                fill: 'forwards'
            }
        )
        cardRef.current.animate([
            { transform: 'rotate3d(0,20,0,180deg)' },
        ],
            {
                duration: 250,
                iterations: 1,
                fill: 'forwards'
            })
    }

    const hideCardAnimation = async (cardRef) => {
        await new Promise(r => setTimeout(r, 1000));
        cardRef.current.animate([
            { backgroundImage: 'none' }
        ],
            {
                duration: 250,
                iterations: 1,
                fill: 'forwards'
            }
        )
        cardRef.current.animate([
            { transform: 'rotate3d(0,20,0,0deg)' },
        ],
            {
                duration: 250,
                iterations: 1,
                fill: 'forwards'
            })
    }

    const revealCard = ({ name, cardRef, idx }) => {
        revealCardAnimation({ name, cardRef })
        shuffledMemoryList[idx].isEnabled = false
        setChosenCards(prev => [...prev, { cardRef, idx }])
        cardRef.current.classList.toggle('cursor-pointer')
    }

    useEffect(() => {
        if (chosenCards.length === 2) {
            if (chosenCards[0].cardRef.current.id === chosenCards[1].cardRef.current.id) {
                setCardsGuessedCorrectly(prev => prev + 1)
            }
            else {
                chosenCards.forEach(({ cardRef }) => {
                    hideCardAnimation(cardRef)
                })
            }
            // shuffledMemoryList.forEach((card) => {
            //     card.isEnabled = false
            // })
            // await new Promise(r => setTimeout(r, 1000));
            // shuffledMemoryList.forEach((card) => {
            //     card.isEnabled = true
            // })
            setChosenCards([])
        }
    }, [chosenCards])

    useEffect(() => {
        if (cardsGuessedCorretly === animalList.length) {
            console.log("You won")
        }
    }, [cardsGuessedCorretly])

    return (
        <div className="flex flex-col">
            <p className="text-5xl mb-14 text-center">Memory</p>
            <button className='text-3xl '
                onClick={() => {
                    startMemoryGame()
                }} ref={startButtonRef}>
                Start
            </button>
            <div className="flex gap-10 flex-wrap justify-center">
                {shuffledMemoryList.map(({ name, isEnabled }, idx) =>
                    <Card key={`${name}${idx}`} revealCard={revealCard} name={name} isEnabled={isEnabled} idx={idx}>
                        {name}
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Memory;