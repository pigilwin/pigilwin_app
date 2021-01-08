import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { Blog } from "./blogTypes";

interface BlogState {
    blogs: Blog[];
    addingNewBlog: boolean;
    editingBlogId: string;
}

const initialState: BlogState = {
    blogs: [],
    addingNewBlog: false,
    editingBlogId: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setBlogs(state, action: PayloadAction<Blog[]>) {
            const newState = state;
            newState.blogs = action.payload;
            return newState;
        },
        addBlog(state, action: PayloadAction<Blog>) {
            const newState = state;
            newState.blogs.push(action.payload);
            return newState;
        },
        addingNewBlog(state, action: PayloadAction<boolean>) {
            const newState = state;
            newState.addingNewBlog = action.payload;
            return newState;
        },
        editBlog(state, action: PayloadAction<string>) {
            const newState = state;
            newState.editingBlogId = action.payload;
            return newState;
        },
        updateBlog(state, action: PayloadAction<Blog>) {
            const newState = state;
            newState.blogs = newState.blogs.filter(blog => blog.id !== action.payload.id);
            newState.blogs.push(action.payload);
            return newState;
        },
        deleteBlog(state, action: PayloadAction<string>) {
            const newState = state;
            newState.blogs = newState.blogs.filter(blog => blog.id !== action.payload);
            return newState;
        }
    }
});

export const reducer = authSlice.reducer;
export const {
    setBlogs,
    addBlog,
    editBlog,
    updateBlog,
    deleteBlog,
    addingNewBlog
} = authSlice.actions;

export const areWeAddingANewBlogSelector = (state: RootState): boolean => state.blogReducer.addingNewBlog;
export const blogsSelector = (state: RootState): Blog[] => state.blogReducer.blogs;
export const currentBlogBeingEditedSelector = (state: RootState): string => state.blogReducer.editingBlogId;

export const formatDate = (date: string): string => {
    const unix = Date.parse(date);
    const instance = new Date(unix);
    return instance.toLocaleDateString("en-UK");
}