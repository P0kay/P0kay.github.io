import { useRef } from "react";

function Card({ name, revealCard, isEnabled, idx }) {
    const cardRef = useRef(null)
    return (
        <div className="w-40 h-40 border-2 flex justify-center items-center rounded-xl cursor-pointer flex-col bg-cover" ref={cardRef} id={name}
            onClick={() => { isEnabled && revealCard({ name, cardRef, idx }) }}>
            {name}<br />
            {isEnabled.toString()}
        </div>
    );
}

export default Card;