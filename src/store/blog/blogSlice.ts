import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { Blog } from "./blogTypes";

interface BlogState {
    blogs: Blog[];
    addingNewBlog: boolean;
}

const initialState: BlogState = {
    blogs: [],
    addingNewBlog: false
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
        }
    }
});

export const reducer = authSlice.reducer;
export const {
    setBlogs,
    addBlog,
    addingNewBlog
} = authSlice.actions;

export const areWeAddingANewBlogSelector = (state: RootState): boolean => state.blogReducer.addingNewBlog;
export const blogsSelector = (state: RootState): Blog[] => state.blogReducer.blogs;

export const formatDate = (date: string): string => {
    const unix = Date.parse(date);
    const instance = new Date(unix);
    return instance.toLocaleDateString("en-UK");
}