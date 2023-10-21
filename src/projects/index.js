import { NavLink } from "react-router-dom";
import Memory from '../images/memory.png'

function Projects() {
    const project_list = ['memory']
    return (
        <div className="flex w-full justify-evenly flex-wrap gap-40">
            {project_list.map(project =>
                <NavLink to={project} className='cursor-pointer pt-32'>
                    <div key='project' className="m-10 p-10 border rounded-lg w-80 h-80">
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