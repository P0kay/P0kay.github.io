import { useEffect, useRef, useState } from 'react';
import Jakub from './jakub.png'
import TechnologiesCard from './technologies_card';
function AboutMe() {
  const [timeOfProgramming, setTimeOfProgramming] = useState('')
  const technologies = [
    {
      name: 'HTML',
      path: 'html',
      description: <p>{`<`}<span className='text-red-400'>p</span>{`>`}{` Markup language defines the meaning and structure of web content. `}{`</`}<span className='text-red-400'>p</span>{`>`}</p>,
      level: 4
    },
    {
      name: 'CSS',
      path: 'css',
      description: <p className='text-left'> <span className='text-amber-500'>p.description{`\{`}</span><br /><span>&nbsp;content:</span> <span className='text-lime-500'>'Style sheet &nbsp;language used for styling &nbsp;website written in HTML.'</span>;<span className='text-amber-500'><br />{`\}`}</span></p>,
      level: 4
    },
    {
      name: 'JavScript',
      path: 'javascript',
      description: <p className='text-left'><span className='text-fuchsia-400'>function</span> <span className='text-blue-400'>Description</span><span className='text-fuchsia-400'>(){`\{`}</span> <span className='text-yellow-400'>&nbsp;console</span>.<span className='text-blue-400'>log</span><span className='text-cyan-500'>(</span><span className='text-lime-500'>'High-level &nbsp;programming language used &nbsp;on client-side.'</span><span className='text-cyan-500'>)</span>; <span className='text-fuchsia-400'><br />{`\}`}</span></p>,
      level: 4
    },
    {
      name: 'TypeScript',
      path: 'typescript',
      description: <p><span className='text-fuchsia-400'>const</span> <span className='text-yellow-400'>description</span>: <span className='text-yellow-400'>string</span> <span className='text-cyan-500'>=</span> <span className='text-lime-500'>'TypeScript extends the capabilities of JavaScript with optional static typing.'</span></p>,
      level: 2
    },
    {
      name: 'React',
      path: 'react',
      description: <p className='text-left'> {`<`}<span className='text-yellow-400'>Description</span> <span className='text-amber-500'>content</span><span className='text-cyan-500'>=</span><span className='text-lime-500'>'JavaScript library which allows creating custom components, dynamically display content and much more.</span> {`/>`}</p>,
      level: 4
    },
    {
      name: 'Next.js',
      path: 'next',
      description: 'React framework used to create full-stack web applications and it also includes server-side rendering and generating static websites.',
      level: 3
    },
    {
      name: 'Tailwind',
      path: 'tailwind',
      description: 'CSS Framework that uses classes to build any design, directly in your markup.',
      level: 4
    },
    {
      name: 'Material UI',
      path: 'materialui',
      description: 'React component library that implements Google\'s Material Design.',

      level: 3
    },
    {
      name: 'Bootstrap',
      path: 'bootstrap',
      description: 'Front-end library for the creation of websites and web apps.',
      level: 3
    },
    {
      name: 'Node.js',
      path: 'node',
      description: 'Environment used to create server-side web applications',
      level: 3
    },
    {
      name: 'PHP',
      path: 'php',
      description: <p className='text-left'>
        <span className='text-red-500'>{`<?`}php</span> <br />
        <span className='text-red-400'>$description</span> <span className='text-cyan-500'>=</span> <span className='text-lime-500'>'Server-side &nbsp;programming language that &nbsp;can be used to create &nbsp;websites'</span>
        <br /><span className='text-red-500'>{`?>`}</span></p>,
      level: 2
    },
    {
      name: 'MYSQL',
      path: 'mysql',
      description: <p> <span className='text-fuchsia-500'>SELECT</span> <span className='text-fuchsia-400'>*</span> <span className='text-fuchsia-500'>FROM</span> Database <span className='text-fuchsia-500'>WHERE</span> description <span className='text-fuchsia-400'>=</span> <span className='text-red-500'>'Relational database management system'</span></p>,
      level: 3
    },
    {
      name: 'Git',
      path: 'git',
      description: <p><span className='text-amber-500'>git</span> commit <span className='text-neutral-400'>-m</span> <span className='text-cyan-400'>"Version control system used for tracking changes in computer files."</span></p>,
      level: 3
    }
  ]
  const startOfProgramming = new Date("2/1/21")
  const currentDate = new Date()
  useEffect(() => {
    let years = currentDate.getFullYear() - startOfProgramming.getFullYear()
    let months = currentDate.getMonth() - startOfProgramming.getMonth()
    setTimeOfProgramming(`${years} years and ${months} ${months > 1 ? 'months' : 'month'}`)
  }, [])
  return (
    <div className='flex flex-col'>
      <section className='flex self-center items-center justify-center flex-wrap max-lg:flex-col gap-8 p-12 mt-20 mb-40'>
        <div className='bg-gradient-to-r from-rose-700 to-fuchsia-900 max-lg:w-[28rem] max-lg:h-[28rem] h-56 w-56 flex justify-center items-center rounded-full justify-self-center order-1'>
          <img src={Jakub} alt="Jakub Szymański.png" className='max-lg:w-[26rem] max-lg:h-[26rem] h-52 w-52 object-cover rounded-full text-center' />
        </div>
        <div className='flex flex-col items-center order-2'>
          <h1 className="bg-gradient-to-r from-red-900 to-red-700 lg:text-4xl text-5xl h-max w-max p-2 shadow-custom shadow-red-900 rounded-md mb-8 font-black neon">FRONT-END DEVELOPER</h1>
          <h2 className="text-5xl text-center">
            Hi, I'm Jakub
          </h2>
          <p className='mt-4 mx-8 text-3xl'>I'm a web developer and I've been coding for {timeOfProgramming} now.</p>
        </div>
      </section>
      <h1 className='self-center mb-10 text-3xl'>
        My knowledge of technologies
      </h1>
      <section className='grid max-xl:grid-cols-2 grid-cols-3 justify-items-center gap-12 md:px-16 xl:px-24'>
        {technologies.map((technology) =>
          <TechnologiesCard
            technology={technology} key={technology.name} />
        )}
      </section>
    </div >
  );
}

export default AboutMe;