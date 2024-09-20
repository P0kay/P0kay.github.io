function Card({ suit, symbol, className }) {
    return (
        <div className={`border-2 bg-white w-[140px] h-[210px] rounded-xl flex flex-col p-1 text-4xl font-bold text-black font-[Bitter] ${(suit==='diamonds'||suit==='hearts')&&'text-red-500'} ${className}`}>
            <div className="flex w-full flex-2 justify-between">
                <div className="flex flex-col items-center">
                    <div>
                        {symbol}
                    </div>
                    <div>
                        <img src={require(`../../../images/${suit}.png`)} alt={suit} className="w-6" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        {symbol}
                    </div>
                    <div>
                        <img src={require(`../../../images/${suit}.png`)} alt={suit} className="w-6" />
                    </div>
                </div>
            </div>
            <div className="flex flex-1 w-full items-center justify-center">
                <img src={require(`../../../images/${suit}.png`)} alt={suit} className="w-20" />
            </div>
            <div className="flex w-full flex-2 justify-between rotate-180">
                <div className="flex flex-col items-center">
                    <div>
                        {symbol}
                    </div>
                    <div>
                        <img src={require(`../../../images/${suit}.png`)} alt={suit} className="w-6" />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        {symbol}
                    </div>
                    <div>
                        <img src={require(`../../../images/${suit}.png`)} alt={suit} className="w-6" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;