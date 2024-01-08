export const Projects = (): JSX.Element => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 p-4">
            <ProjectItem title="Blizzard" link="https://github.com/pigilwin/blizzard"/>
            <ProjectItem title="Better Steam Achivements" link="https://github.com/pigilwin/better_steam_achivements"/>
            <ProjectItem title="Fireworks" link="https://github.com/pigilwin/fireworks"/>
            <ProjectItem title="Solitaire" link="https://solitaire.pigilwin.com/#/"/>
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