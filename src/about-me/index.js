import Jakub from './jakub.png'
function AboutMe() {
  return (
    <div className='flex flex-col'>
      <p className="text-6xl mt-8 text-center mt-16 mb-16">
        Hi, I'm Jakub
      </p>
      <section className='flex justify-center gap-8 w-3/5 self-center p-12'>
        <img src={Jakub} alt="Jakub Szymański" className='w-64 h-64 object-cover rounded-full justify-self-center' />
        <div className='flex flex-col items-center'>
          <p className="bg-gradient-to-r from-red-900 to-red-700 lg:text-4xl h-max w-max p-2 shadow-custom shadow-red-900 rounded-md">FRONT-END DEVELOPER</p>
          <h1 className='mt-4 mx-8'>I'm a web developer and </h1>
        </div>
      </section>
    </div >
  );
}

export default AboutMe;