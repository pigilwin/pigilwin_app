import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Button } from "../components/input";
import { isAuthenticatedSelector } from "../store/auth/authSlice";
import {
    currentPostBeingEditedSelector, 
    editPost, 
    formatDate, 
    postsSelector
} from "../store/blog/blogSlice";
import { Blog } from "../store/blog/blogTypes";
import { converter } from "./converter";
import { Editor } from "./Editor";

export const ViewPost = (): JSX.Element | null => {

    /**
     * Fetch the post id from the params
     */
    const { id } = useParams<{id: string}>();

    /**
     * Load the hooks and selector
     */
    const dispatch = useDispatch();
    const blogs = useSelector(postsSelector);
    const isCurrentlyAuthed = useSelector(isAuthenticatedSelector);
    const currentlyEditingBlog = useSelector(currentPostBeingEditedSelector);
    const history = useHistory();

    /**
     * Find the current blog by the id from the url
     */
    const blog = blogs.find((blog: Blog) => {
        return blog.id === id;
    });

    /**
     * If the blog is not found then go back to the list of blogs
     */
    if (blog === undefined) {
        history.replace('/blog');
        return null;
    }

    /**
     * Show the editor if the current blog is being edited
     */
    if (isCurrentlyAuthed && currentlyEditingBlog.length > 0 && currentlyEditingBlog === id) {
        return <Editor
            blog={blog}
        />
    }

    const html = converter.render(blog.content);

    /**
     * If we are currently authenticated, show the edit button
     */
    let editButton: JSX.Element | null = null;
    if (isCurrentlyAuthed) {

        const onEditClickHandler = (): void => {
            dispatch(editPost(blog.id));
        };

        editButton = <div className="w-1/2 mx-auto">
            <Button
                title="Edit"
                onClick={onEditClickHandler}
            />
        </div>
    }


    return (
        <article className="py-12 px-4 h-auto dark:text-white">
            <h1 className="text-4xl text-center mb-4 font-semibold font-heading">{blog.title}</h1>
            <p className="text-center"><span>{formatDate(blog.date)}</span></p>
            <div className="max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: html}}></div>
            {editButton}
        </article>
    );
}