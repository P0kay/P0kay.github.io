import Star from "../../Icons/Star";

function TechnologiesCard({ technology }) {
    const MAX_LEVEL = 6
    return (
        <div className="h-[380px] w-[360px] flex justify-evenly flex flex-col items-center text-center p-8 relative font-[CascadiaCode] text-lg gap-4 bg-gradient-to-r  from-neutral-300/25 to-neutral-100/25 rounded-xl max-lg:h-[480px] max-lg:w-[430px]">
            <img src={`icons/${technology.path}.svg`} alt="" className="h-20 w-20" />
            <p className="text-2xl max-lg:text-4xl font-black">{technology.name}</p>
            <div className="flex justify-center">
                {[...Array(technology.level)].map(star =>
                    <Star size={20} color='white' fill='white' />
                )}
                {[...Array(MAX_LEVEL - technology.level)].map(star =>
                    <Star size={20} color='white' fill='none' />
                )}
            </div>
            <div className='text-neutral-300 max-lg:text-xl'>
                {technology.description}
            </div>
        </div>
    );
}

export default TechnologiesCard;