import { useRef } from "react";

function Card({ children }) {
    const cardRef = useRef(null)
    const Rotate = () => {
        cardRef.current.innerHTML = ''
        cardRef.current.animate([
            { transform: 'rotate3d(0,20,0,90deg)' },
        ],
            {
                duration: 250,
                iterations: 1,
                fill: 'forwards'
            })
        cardRef.current.animate([
            { backgroundImage:`url('https://today.uconn.edu/wp-content/uploads/2017/07/GettyImages-146798910-CubanTreeFrog.jpg')` }
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
    return (
        <div className="w-40 h-40 border-2 flex justify-center items-center rounded-xl cursor-pointer flex-col bg-cover" ref={cardRef}>
            <button onClick={Rotate}>Click</button>
            {children}
        </div>
    );
}

export default Card;