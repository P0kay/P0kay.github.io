import { NavLink } from "react-router-dom";
import Memory from '../images/memory.png'

function Projects() {
    const project_list = ['memory','poker']
    return (
        <section className="flex justify-evenly flex-wrap gap-40 pt-16">
            {project_list.map(project =>
                <NavLink to={project} className='cursor-pointer' key={project}>
                    <div key='project' className="m-10 bg-red-800 rounded-lg w-80 h-80 mt-32">
                        <img src={Memory} alt="Memory" className="p-4 select-none"/>
                        <div className="text-center mt-4 text-3xl">
                            {project.toUpperCase()}
                        </div>
                    </div>
                </NavLink>
            )}
        </section>
    );
}

export default Projects;