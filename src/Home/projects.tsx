export const Projects = (): JSX.Element => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 p-4">
            <ProjectItem title="Synopsis" link="https://synopsis.pigilwin.com/#/"/>
            <ProjectItem title="Sounds" link="https://sounds.pigilwin.com/#/"/>
            <ProjectItem title="Blizzard" link="https://blizzard.pigilwin.com/#/"/>
        </div>
    );
}

interface ProjectItemProps {
    title: string;
    link: string;
}
const ProjectItem = ({title, link}: ProjectItemProps): JSX.Element => {
    return (
        <div className="w-full p-4 rounded-lg shadow-lg bg-gray-500 text-center">
            <a href={link} className="text-2xl font-bold text-white hover:text-green-500">{title}</a>
        </div>
    );
}