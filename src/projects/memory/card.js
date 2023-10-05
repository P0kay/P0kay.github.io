import { useRef } from "react";

function Card({ children, revealCard }) {
    const cardRef = useRef(null)
    return (
        <div className="w-40 h-40 border-2 flex justify-center items-center rounded-xl cursor-pointer flex-col bg-cover" ref={cardRef}
            onClick={() => { revealCard({ children, cardRef }) }}>
            {children}
        </div>
    );
}

export default Card;