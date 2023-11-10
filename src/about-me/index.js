import Jakub from './jakub.png'
import SkillCard from './skill_card';
function AboutMe() {
  const skills = [
    { name: 'html', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'css', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'javascript', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'typescript', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'react', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'next', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'angular', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    [
      { name: 'tailwind', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
      { name: 'materialui', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
      { name: 'bootstrap', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    ],
    { name: 'node', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'csharp', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'go', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'php', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'mysql', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'github', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' },
    { name: 'git', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nemo, officia animi debitis!' }
  ]
  return (
    <div className='flex flex-col'>
      <section className='flex self-center items-center justify-center flex-wrap max-lg:flex-col gap-8 p-12 mt-20 mb-40'>
        <div className='bg-gradient-to-r from-rose-700 to-fuchsia-900 max-lg:w-[28rem] max-lg:h-[28rem] h-48 w-48 flex justify-center items-center rounded-full justify-self-center order-1'>
          <img src={Jakub} alt="Jakub Szymański.png" className='max-lg:w-[26rem] max-lg:h-[26rem] h-44 w-44 object-cover rounded-full text-center' />
        </div>
        <div className='flex flex-col items-center order-2'>
          <p className="bg-gradient-to-r from-red-900 to-red-700 lg:text-4xl text-5xl h-max w-max p-2 shadow-custom shadow-red-900 rounded-md mb-8">FRONT-END DEVELOPER</p>
          <h1 className="text-5xl text-center">
            Hi, I'm Jakub
          </h1>
          <p className='mt-4 mx-8 text-3xl font-mono description'>I'm a web developer and I've been coding for a few years now.</p>
        </div>
      </section>
      <h1 className='self-center mb-20 text-4xl'>
        My skills
      </h1>
      <section className='grid max-sm:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 justify-items-center px-32 gap-16'>
        {skills.map((skill) =>
          <SkillCard skill={skill} key={skill} />
        )}
      </section>
    </div >
  );
}

export default AboutMe;