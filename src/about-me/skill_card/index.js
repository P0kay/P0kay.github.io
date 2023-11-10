function SkillCard({ skill }) {
    return (
        <div className="bg-neutral-200 h-80 w-72 flex justify-evenly flex flex-col items-center text-center rounded-xl p-4 relative">
            {!Array.isArray(skill) &&
                <>
                    <img src={`icons/${skill.name}.svg`} alt="" className="h-24 w-24" />
                    <p className="text-black text-2xl">{skill.name}</p>
                    <p className="text-black">
                        {skill.description}
                    </p>
                </>
            }
            {Array.isArray(skill) &&
                skill.map((tool, index) =>
                    <>
                        <img src={`icons/${tool.name}.svg`} alt="" className={`h-24 w-24 absolute transform rotate-[${(index + 1) * 30}deg] left-[${(index+1)*8}px]`} />
                        {/* <p className="text-black text-2xl">{tool.name}</p>
                        <p className="text-black">
                            {tool.description}
                        </p> */}
                    </>
                )
            }
        </div>
    );
}

export default SkillCard;