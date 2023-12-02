import Star from "../../IconComponents/Star";

function TechnologiesCard({ technology }) {
    const MAX_LEVEL = 6
    return (
        <div className="h-[380px] w-[360px] flex justify-evenly flex flex-col items-center text-center p-8 relative font-[CascadiaCode] text-lg gap-4 bg-gradient-to-r  from-neutral-300/25 to-neutral-100/25 rounded-xl max-lg:h-[600px] max-lg:w-[550px]">
            <img src={`icons/${technology.path}.svg`} alt="" className="h-24 w-24" />
            <p className="text-2xl max-lg:text-5xl font-black">{technology.name}</p>
            <div className="flex justify-center">
                {[...Array(technology.level)].map((star, index) =>
                    <Star color='white' fill='white' a={`${technology.name}${index}`} key={`${technology.name}${index}`} className='h-4 max-lg:h-8'/>
                )}
                {[...Array(MAX_LEVEL - technology.level)].map((star, index) =>
                    <Star color='white' fill='none' key={`${technology.name}${index+technology.level}`} className='h-4 max-lg:h-8'/>
                )}
            </div>
            <div className='text-neutral-300 max-lg:text-3xl max-lg:px-8'>
                {technology.description}
            </div>
        </div>
    );
}

export default TechnologiesCard;