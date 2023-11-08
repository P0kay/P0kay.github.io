import { NavLink } from "react-router-dom";
import Memory from '../images/memory.png'

function Projects() {
    const project_list = ['memory']
    return (
        <div className="flex justify-evenly flex-wrap gap-40">
            {project_list.map(project =>
                <NavLink to={project} className='cursor-pointer' key={project}>
                    <div key='project' className="m-10 p-10 bg-gradient-to-r from-red-900 to-red-700 rounded-lg w-80 h-80 mt-32">
                        <img src={Memory} alt="Memory" />
                        <div className="text-center mt-5 text-3xl">
                            {project.toUpperCase()}
                        </div>
                    </div>
                </NavLink>
            )}
        </div>
    );
}

export default Projects;