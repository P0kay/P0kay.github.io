import { useEffect, useRef, useState } from "react";
import Card from "./Card";

function Memory() {
    const animalList = ['frog', 'fox', 'cat', 'dog', 'capibara', 'owl']
    const [shuffledMemoryList, setShuffledMemoryList] = useState([])
    const startButtonRef = useRef(null)
    const cardContainerRef = useRef(null)
    const timeRef = useRef(null)
    const [chosenCards, setChosenCards] = useState([])
    const [cardsGuessedCorretly, setCardsGuessedCorrectly] = useState(0)
    const [startDate, setStartDate] = useState(null)

    const startMemoryGame = () => {
        setShuffledMemoryList(shuffleArray(animalList))
        startButtonRef.current.remove()
        setStartDate(new Date())
    }

    const shuffleArray = (arr) => {
        arr = [...arr, ...arr]
        let tempArr = []
        for (let i = arr.length - 1; i >= 0; i--) {
            let idx = Math.floor(Math.random() * (i + 1))
            tempArr.push({ name: arr[idx], isEnabled: true })
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

    const hideCardsAnimation = async (cardRefs) => {
        await new Promise(r => setTimeout(r, 1000));
        new Promise((resolve, reject) => {
            cardRefs.forEach((cardRef) => {
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
                cardRef.current.innerHTML = 'M'
            })
            resolve()
        })
    }

    const revealCard = ({ name, cardRef, idx }) => {
        shuffledMemoryList[idx].isEnabled = false
        revealCardAnimation({ name, cardRef })
        setChosenCards(prev => [...prev, cardRef])
    }

    useEffect(() => {
        if (chosenCards.length === 2) {
            if (chosenCards[0].current.id === chosenCards[1].current.id) {
                setCardsGuessedCorrectly(prev => prev + 1)
            }
            else {
                shuffledMemoryList.forEach((memoryCard) => {
                    memoryCard.isEnabled = false
                })
                hideCardsAnimation(chosenCards)
                    .then(() => {
                        const tempShuffledMemoryList = [...shuffledMemoryList]
                        tempShuffledMemoryList.forEach((memoryCard) => {
                            memoryCard.isEnabled = true
                        })
                        setShuffledMemoryList(tempShuffledMemoryList)
                    })
            }
            setChosenCards([])
        }
    }, [chosenCards])


    useEffect(() => {
        if (cardsGuessedCorretly === animalList.length) {
            cardContainerRef.current.replaceChildren()
        }
    }, [cardsGuessedCorretly])

    useEffect(() => {
        let interval
        if (startDate !== null) {
            interval = setInterval(() => {
                let currentDate = new Date()
                let timePassed = currentDate.getTime() - startDate.getTime()
                let millisecondsPassed
                let secondsPassed
                let minutesPassed
                if (timePassed % 1000 < 100) {
                    millisecondsPassed = `0${Math.floor((timePassed % 1000) / 10)}`
                }
                else {
                    millisecondsPassed = `${Math.floor((timePassed % 1000) / 10)}`
                }
                if (Math.floor(timePassed / 1000) % 60 < 10) {
                    secondsPassed = `0${Math.floor(timePassed / 1000) % 60}`
                }
                else {
                    secondsPassed = `${Math.floor(timePassed / 1000) % 60}`
                }
                if (Math.floor(timePassed / 60000) < 10) {
                    minutesPassed = `0${Math.floor(timePassed / 60000)}`
                }
                else {
                    minutesPassed = `${Math.floor(timePassed / 60000)}`
                }
                timeRef.current.innerHTML = `${minutesPassed}:${secondsPassed}:${millisecondsPassed}`
            }, 10)
        }
        return () => {
            clearInterval(interval)
        }
    }, [startDate])

    return (
        <div className="flex flex-col items-center">
            <p className="text-5xl mb-14 text-center fixed top-0 z-20 mt-3">Memory</p>
            <button className='text-6xl hover:text-red-700 mt-96'
                onClick={() => {
                    startMemoryGame()
                }} ref={startButtonRef}>
                Start
            </button>
            <div ref={timeRef} className="mt-32 absolute"></div>
            <div className="grid xl:grid-cols-4 sm:grid-cols-3 justify-items-center gap-12 mt-32" ref={cardContainerRef}>
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