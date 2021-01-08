import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Showdown from "showdown";
import { blogsSelector, formatDate } from "../store/blog/blogSlice";
import { Blog } from "../store/blog/blogTypes";

export const ViewBlog = (): JSX.Element | null => {

    const { id } = useParams<{id: string}>();
    const blogs = useSelector(blogsSelector);
    const history = useHistory();

    const blog = blogs.find((blog: Blog) => {
        return blog.id === id;
    });

    if (blog === undefined) {
        history.goBack();
        return null;
    }

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });

    const html = converter.makeHtml(blog.content);

    return (
        <article className="py-12 px-4 h-auto dark:text-white">
            <h1 className="text-4xl text-center mb-4 font-semibold font-heading">{blog.title}</h1>
            <p className="text-center"><span>{formatDate(blog.date)}</span></p>
            <div className="max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: html}}>

            </div>
        </article>
    );
}