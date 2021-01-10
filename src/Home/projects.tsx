export const Projects = (): JSX.Element => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 py-4 pt-0">
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
        <div className="w-full m-2 px-4 py-8 rounded-lg shadow-lg bg-gray-500">
            <a href={link} className="text-2xl font-bold text-center text-white hover:text-green-500">{title}</a>
        </div>
    );
}