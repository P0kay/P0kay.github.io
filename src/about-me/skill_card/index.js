function SkillCard({ skill }) {
    return (
        <div className="bg-neutral-200 h-80 w-72 flex justify-evenly flex flex-col items-center text-center rounded-xl p-4">
            < img src={`icons/${skill.name}.svg`} alt="" className="h-24 w-24" />
            <p className="text-black text-2xl">{skill.name}</p>
            <p className="text-black">
                {skill.description}
            </p>
        </div>
    );
}

export default SkillCard;