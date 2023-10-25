import { useEffect, useRef, useState } from "react";
import Card from "./Card";


function Memory() {
    const animalList = ['frog', 'fox', 'cat', 'dog', 'capibara', 'owl', 'lion', 'parrot', 'panda', 'duck', 'turtle', 'sheep', 'penguin', 'kangaroo', 'rabbit', 'hippo', 'hedgehog', 'bear']
    const timeOfCardAnimation = 250
    const startButtonRef = useRef(null)
    const cardContainerRef = useRef(null)
    const timerRef = useRef(null)
    const timerInterval = useRef(null)
    const timeString = useRef(null)
    const [shuffledMemoryList, setShuffledMemoryList] = useState([]) // Array of objects with Type: {name: string ,isEnabled: boolean}
    const [chosenCards, setChosenCards] = useState([]) // Array of card refs
    const [cardsGuessedCorretly, setCardsGuessedCorrectly] = useState([]) // Array of strings (name of animals)
    const [startDate, setStartDate] = useState(null) // Date of start
    const [comparisons, setComparisons] = useState(0) // Number // Interval
    const [showModal, setShowModal] = useState(false);

    const startMemoryGame = () => {
        if (cardContainerRef.current.children.length > 0) {
            console.log(cardContainerRef.current.children)
        }
        startButtonRef.current.remove()
        setStartDate(new Date())
        setComparisons(0)
        setChosenCards([])
        setCardsGuessedCorrectly([])
        setShuffledMemoryList(shuffleArray(animalList))
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
                duration: timeOfCardAnimation,
                iterations: 1,
                fill: 'forwards'
            }
        )
        cardRef.current.animate([
            { transform: 'rotate3d(0,20,0,180deg)' },
        ],
            {
                duration: timeOfCardAnimation,
                iterations: 1,
                fill: 'forwards'
            })
    }

    const hideCardsAnimation = async (cardRefs) => {
        await new Promise(r => setTimeout(r, 1000));
        cardRefs.forEach(async (cardRef) => {
            cardRef.current.animate([
                { backgroundImage: 'none' }
            ],
                {
                    duration: timeOfCardAnimation,
                    iterations: 1,
                    fill: 'forwards'
                }
            )
            cardRef.current.animate([
                { transform: 'rotate3d(0,20,0,0deg)' },
            ],
                {
                    duration: timeOfCardAnimation,
                    iterations: 1,
                    fill: 'forwards'
                })
            await new Promise(r => setTimeout(r, timeOfCardAnimation / 2));
            cardRef.current.innerHTML = 'M'
        })
    }

    const revealCard = ({ name, cardRef, idx }) => {
        shuffledMemoryList[idx].isEnabled = false
        revealCardAnimation({ name, cardRef })
        setChosenCards(prev => [...prev, cardRef])
    }

    const confettiAnimation = () => {
        const duration = 3 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // since particles fall down, start a bit higher than random
            window.confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                })
            );
            window.confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                })
            );
        }, 250);
    }

    useEffect(() => {
        if (chosenCards.length === 2) {
            if (chosenCards[0].current.id === chosenCards[1].current.id) {
                setCardsGuessedCorrectly(prev => [...prev, chosenCards[0].current.id])
            }
            else {
                shuffledMemoryList.forEach((memoryCard) => {
                    memoryCard.isEnabled = false
                })
                hideCardsAnimation(chosenCards)
                    .then(() => {
                        const tempShuffledMemoryList = [...shuffledMemoryList]
                        tempShuffledMemoryList.forEach((memoryCard) => {
                            if (cardsGuessedCorretly.indexOf(memoryCard.name) === -1) {
                                memoryCard.isEnabled = true
                            }
                        })
                        setShuffledMemoryList(tempShuffledMemoryList)
                    })
            }
            setComparisons(prev => prev + 1)
            setChosenCards([])
        }
    }, [chosenCards])

    useEffect(() => {
        if (cardsGuessedCorretly.length === animalList.length) {
            clearInterval(timerInterval)
            confettiAnimation()
            new Promise(r => setTimeout(r, 1000)).then(() => {
                for (let i = 0; i < cardContainerRef.current.children.length; i++) {
                    cardContainerRef.current.children[i].animate([
                        { backgroundImage: 'none' }
                    ],
                        {
                            duration: timeOfCardAnimation,
                            iterations: 1,
                            fill: 'forwards'
                        }
                    )
                    cardContainerRef.current.children[i].animate([
                        { transform: 'rotate3d(0,20,0,0deg)' },
                    ],
                        {
                            duration: timeOfCardAnimation,
                            iterations: 1,
                            fill: 'forwards'
                        })
                    new Promise(r => setTimeout(r, timeOfCardAnimation / 2)).then(() => {
                        cardContainerRef.current.children[i].innerHTML = 'M'
                    })
                }
                setShowModal(true)
            })
        }
    }, [cardsGuessedCorretly])

    useEffect(() => {
        if (startDate !== null) {
            timerInterval.current = setInterval(() => {
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
                timeString.current = `${minutesPassed}:${secondsPassed}:${millisecondsPassed}`
                timerRef.current.innerHTML = `${minutesPassed}:${secondsPassed}:${millisecondsPassed}`
            }, 10)
        }
        return () => {
            clearInterval(timerInterval.current)
        }
    }, [startDate])

    return (
        <div className="flex flex-col items-center h-screen justify-center justify-center">
            <p className="text-5xl mb-14 text-center fixed top-0 z-20 lg:mt-3 mt-9">Memory</p>
            <button className='text-6xl hover:text-red-700'
                onClick={() => {
                    startMemoryGame()
                }} ref={startButtonRef}>
                Start
            </button>
            <div className="flex gap-4 mb-6 text-2xl">
                <div ref={timerRef}></div>
                {startDate && <div>Comparisons: {comparisons}</div>}
            </div>
            <div className="grid xl:grid-cols-6 sm:grid-cols-3 justify-items-center gap-12" ref={cardContainerRef}>
                {shuffledMemoryList.map(({ name, isEnabled }, idx) =>
                    <Card key={`${name}${idx}`} revealCard={revealCard} name={name} isEnabled={isEnabled} idx={idx}>
                        {name}
                    </Card>
                )}
            </div>
            {showModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-red-800 outline-none focus:outline-none w-[400px]">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        You won!!!
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Comparisons: {comparisons}
                                    </p>
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Time: {timeString.current}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Exit
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                            startMemoryGame()
                                        }}
                                    >
                                        Play again
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </>
            )}
        </div>
    )
}

export default Memory;