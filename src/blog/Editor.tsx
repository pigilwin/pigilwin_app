import { useState } from "react";
import ReactMde, { Classes } from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import { Button, TextInput } from "../components/input";
import { useDispatch } from "react-redux";
import { Blog } from "../store/blog/blogTypes";
import { createPostAsync, updatePostAsync, deletePostAsync } from '../store/blog/blogEvent';
import { addingNewBlog, editBlog } from "../store/blog/blogSlice";
import { deepCopy } from "../store/deepClone";

interface EditorProps {
    blog: Blog;
}
export const Editor = ({blog}: EditorProps): JSX.Element => {
    
    const dispatch = useDispatch();

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });

    const [contentTitle, setContentTitle] = useState(blog.title);
    const [value, setValue] = useState(blog.content);
    
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

    const generateMarkdownPreview = (markdown: string): Promise<JSX.Element> => {
        return Promise.resolve(markdownPreview(converter.makeHtml(markdown)));
    };

    const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {currentTarget} = e;
        const {value} = currentTarget;
        setContentTitle(value);
    }

    const onChangeContent = (v: string): void => {
        setValue(v);
    }

    const saveClickHandler = (): void => {

        const savedBlog = deepCopy(blog);

        savedBlog.title = contentTitle;
        savedBlog.content = value;

        if (savedBlog.id.length === 0) {
            dispatch(createPostAsync(savedBlog.title, savedBlog.content));
        } else {
            dispatch(updatePostAsync(savedBlog));
        }
    }

    let deleteButton: JSX.Element | null = null;
    if (blog.id.length > 0) {
        const deleteClickHandler = (): void => {
            dispatch(deletePostAsync(blog));
        }
        deleteButton = <Button
            onClick={deleteClickHandler}
            title="Delete"
        />;
    }

    const goBackClickHandler = (): void => {
        if (blog.id.length === 0) {
            dispatch(addingNewBlog(false));
        } else {
            dispatch(editBlog(''));
        }
    }

    const classes: Classes = {
        preview: "bg-white"
    };
    
    return (
        <div className="max-w-4xl flex items-center h-screen flex-wrap mx-auto">
            <div className="w-full">
                <Button
                    onClick={goBackClickHandler}
                    title="Go Back"
                />
            </div>
            <TextInput
                placeholder="Title"
                onChangeHandler={onChangeTitleHandler}
                value={contentTitle}
            />
            <div className="w-full rounded-lg shadow-2xl opacity-75 my-4">
                <ReactMde
                    classes={classes}
                    value={value}
                    onChange={onChangeContent}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={generateMarkdownPreview}
                />
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
                <Button
                    onClick={saveClickHandler}
                    title="Save"
                />
                {deleteButton}
            </div>
        </div>
    );
}

const markdownPreview = (html: string): JSX.Element => {
    return (
        <div className="dark" dangerouslySetInnerHTML={{ __html: html}}></div>
    );
}