import { createPost, loadPosts } from "../firebase";
import { AppDispatch, AppThunk } from "../store";
import { addBlog, addingNewBlog, setBlogs } from "./blogSlice";
import { BlogWithoutId } from "./blogTypes";

export const loadPostsAsync = (): AppThunk => async (dispatch: AppDispatch) => {
    const blogs = await loadPosts();
    dispatch(setBlogs(blogs));
} 

export const createPostAsync = (title: string, content: string): AppThunk => async (dispatch: AppDispatch) => {
    const blog: BlogWithoutId = {
        title: title,
        content: content,
        date: (new Date()).toISOString()
    };
    const blogWithId = await createPost(blog);
    dispatch(addBlog(blogWithId));
    dispatch(addingNewBlog(false));
};