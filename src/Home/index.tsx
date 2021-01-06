import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { 
    Photo,
    Briefcase, 
    GitHub,
    Instagram,
    LinkedIn,
    Theme
} from "../components/components";
import { themeStateSelector } from "../store/themeSlice";
import { Proficiency } from "./proficiency";

export const Home = (): JSX.Element => {

    const usingDarkMode = useSelector(themeStateSelector);
    const classNames: string[] = [
        "font-sans",
        "antialiased",
        "leading-normal",
        "tracking-wider"
    ];

    if (usingDarkMode) {
        classNames.push("bg-gray-900");
    } else {
        classNames.push("bg-white");
    }

    return (
        <main className={classNames.join(" ")}>
            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto">
                <Photo/>
                <div id="profile" className="w-full rounded-lg shadow-2xl bg-white opacity-75">
                    <div className="p-4 md:p-12 text-center lg:text-left">
                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Tim Remnant</h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
                        <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                            <Briefcase/>
                            Software Developer
                        </p>
                        <Proficiency/>
                        <Links/>
                    </div>
                </div>
                <Theme/>
            </div>
        </main>
    );
}

const Links = (): JSX.Element => {

    interface LinkProps {
        link: string;
    }
    const Link = ({link, children}: PropsWithChildren<LinkProps>): JSX.Element => {
        return (
            <a href={link} rel="noreferrer" target="_blank" className="link">
                {children}
            </a>
        );
    }    

    return (
        <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <Link link="https://github.com/pigilwin">
                <GitHub/>
            </Link>
            <Link link="https://www.instagram.com/timremnant">
                <Instagram/>
            </Link>
            <Link link="https://www.linkedin.com/in/tim-remnant-420094106/">
                <LinkedIn/>
            </Link>
        </div>
    );
}