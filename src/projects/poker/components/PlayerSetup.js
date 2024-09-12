import HiddenCard from "./HiddenCardComponent";
import Card from "./CardComponent";
function PlayerSetup({ position, player, index, smallBlind, bigBlind }) {
    return (
        <div className={position[0]}>
            {index !== 0 ?
                <>
                <div className="absolute top-10 text-blue-400 right-0 text-2xl">
                    {player.username}
                </div>
                    <HiddenCard className={position[1][0]} />
                    <HiddenCard className={position[1][1]} />
                </>
                :
                <>
                    <Card suit={player.hand[0].suit} symbol={player.hand[0].symbol} className={position[1][0]} />
                    <Card suit={player.hand[1].suit} symbol={player.hand[1].symbol} className={position[1][1]} />
                </>}
            <div className="absolute flex flex-col items-center justify-center text-3xl">
                <div className='font-[Bitter] w-24 h-14 bg-white text-black rounded-3xl border-2 border-black flex flex-col justify-center items-center font-bold'>
                    <div className="text-xs text-gray-700">
                        {bigBlind === index && 'BIG BLIND'}
                        {smallBlind === index && 'SMALL BLIND'}
                    </div>
                    <div className="text-xl">
                        ${player.stack}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSetup;