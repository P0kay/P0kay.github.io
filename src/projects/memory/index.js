import { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Memory() {
    const animalList = ['frog', 'fox', 'cat', 'dog', 'capibara']
    const [shuffledMemoryList, setShuffledMemoryList] = useState([])
    const startButtonRef = useRef(null)
    const [chosenCardsAmount, setChosenCardsAmount] = useState(0)
    const [chosenCards, setChosenCards] = useState([])

    const startMemoryGame = () => {
        setShuffledMemoryList(shuffleArray(animalList))
        startButtonRef.current.remove()
    }
    const shuffleArray = (arr) => {
        arr = [...arr, ...arr]
        let tempArr = []
        for (let i = arr.length - 1; i >= 0; i--) {
            let idx = Math.floor(Math.random() * (i + 1))
            tempArr.push(arr[idx])
            arr.splice(idx, 1)
        }
        return tempArr
    }
    const revealCardAnimation = ({ children, cardRef }) => {
        cardRef.current.innerHTML = ''
        cardRef.current.animate([
            { backgroundImage: `url("/animal_images/${children}.png")` }
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
    const revealCard = ({ children, cardRef }) => {
        revealCardAnimation({ children, cardRef })
        setChosenCards(prev => [...prev, cardRef])
    }
    useEffect(() => {
        console.log(chosenCardsAmount, chosenCards)
    }, [chosenCards])
    return (
        <div className="flex flex-col">
            <p className="text-5xl mb-14 text-center">Memory</p>
            <button className='text-3xl'
                onClick={() => {
                    startMemoryGame()
                }} ref={startButtonRef}>
                Start
            </button>
            <div className="flex gap-10 flex-wrap justify-center">
                {shuffledMemoryList.map((animal, idx) =>
                    <Card key={`${animal}${idx}`} revealCard={revealCard}>
                        {animal}
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Memory;