import { useRef } from "react";

function Card({ name, revealCard, isEnabled, idx }) {
    const cardRef = useRef(null)
    return (
        <div className={`w-48 h-48 border-2 flex justify-center items-center rounded-xl ${isEnabled && 'cursor-pointer'} flex-col bg-cover`} ref={cardRef} id={name}
            onClick={() => { isEnabled && revealCard({ name, cardRef, idx }) }}>
            {name}<br />
            {isEnabled.toString()}
        </div>
    );
}

export default Card;