import { useState } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

export const CreateNew = (): JSX.Element => {
    
    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });

    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const generateMarkdownPreview = (markdown: string): Promise<JSX.Element> => {
        return Promise.resolve(markdownPreview(converter.makeHtml(markdown)));
    };
    
    return (
        <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto">
            <div className="w-full rounded-lg shadow-2xl opacity-75 my-4">
                <ReactMde
                    value={value}
                    onChange={setValue}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={generateMarkdownPreview}
                />
            </div>
        </div>
    );
}

const markdownPreview = (html: string): JSX.Element => {
    return (
        <div>
            
        </div>
    );
}