function Projects() {
    const project_list = ['memory','sdada','sdada','sdada','sdada','sdada','sdada']
    return (
        <div className="flex w-full justify-evenly flex-wrap gap-40">
            {project_list.map(project =>
                <div key='project' className="m-10 p-10 border rounded-lg w-40 text-center">{project}</div>
            )}
        </div>
    );
}

export default Projects;