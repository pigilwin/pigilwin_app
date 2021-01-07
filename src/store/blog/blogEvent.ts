import { createPost } from "../firebase";
import { AppDispatch, AppThunk } from "../store";
import { addBlog, addingNewBlog } from "./blogSlice";
import { BlogWithoutId } from "./blogTypes";

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