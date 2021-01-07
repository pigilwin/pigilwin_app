import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface BlogState {
    blogs: string[];
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
        setBlogs(state, action: PayloadAction<string[]>) {
            const newState = state;
            newState.blogs = action.payload;
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
    addingNewBlog
} = authSlice.actions;

export const areWeAddingANewBlogSelector = (state: RootState) => state.blogReducer.addingNewBlog;