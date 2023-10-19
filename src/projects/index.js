import { NavLink } from "react-router-dom";

function Projects() {
    const project_list = ['memory']
    return (
        <div className="flex w-full justify-evenly flex-wrap gap-40">
            {project_list.map(project =>
                <NavLink to={project} className='cursor-pointer pt-32'>
                    <div key='project' className="m-10 p-10 border rounded-lg w-80 h-80">
                        <div className="bg-stone-500 h-[75%]" />
                        <div className="text-center mt-5">
                            {project}
                        </div>
                    </div>
                </NavLink>
            )}
        </div>
    );
}

export default Projects;