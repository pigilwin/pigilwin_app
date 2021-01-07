import { useSelector } from "react-redux";
import { themeStateSelector } from "../store/theme/themeSlice";

export const Photo = (): JSX.Element => {
    
    const usingDarkMode = useSelector(themeStateSelector);

    const imageClassNames: string[] = [
        "rounded-full",
        "border-4"
    ];

    if (usingDarkMode) {
        imageClassNames.push("border-white");
    } else {
        imageClassNames.push("border-black");
    }

    return (
        <div id="photo" className="w-full lg:w-2/5 mx-auto mt-4">
            <img src="https://drive.google.com/uc?id=16o3IBFWACQ8SkVc6LuwMJyXabJqeFA7h" className={imageClassNames.join(' ')} alt="Me"/>
        </div>
    );
}