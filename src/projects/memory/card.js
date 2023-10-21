import { useEffect, useRef } from "react";

function Card({ name, revealCard, isEnabled, idx }) {
    const cardRef = useRef(null)
    useEffect(() => {
        cardRef.current.fontFamily = 'Alex Brush'
    }, [])
    return (
        <div className={`w-60 h-60 border-8 border-red-900 bg-red-900 ${isEnabled && 'hover:bg-red-800'} ${isEnabled && 'hover:border-red-800'} flex justify-center items-center rounded-xl ${isEnabled && 'cursor-pointer'} flex-col bg-cover text-4xl memory-card`} ref={cardRef} id={name}
            onClick={() => { isEnabled && revealCard({ name, cardRef, idx }) }} >
            <span>M</span>
        </div>
    );
}

export default Card;