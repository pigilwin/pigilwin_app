import { createPost, updatePost, loadPosts, deletePost } from "../firebase";
import { AppDispatch, AppThunk } from "../store";
import { addBlog, addingNewBlog, editBlog, setBlogs, updateBlog, deleteBlog } from "./blogSlice";
import { Blog, BlogWithoutId } from "./blogTypes";

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

export const updatePostAsync = (blog: Blog): AppThunk => async (dispatch: AppDispatch) => {
    await updatePost(blog);
    dispatch(updateBlog(blog));
    dispatch(editBlog(''));
};

export const deletePostAsync = (blog: Blog): AppThunk => async (dispatch: AppDispatch) => {
    await deletePost(blog.id);
    dispatch(deleteBlog(blog.id));
    dispatch(editBlog(''));
}