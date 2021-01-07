import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";

interface BlogState {
    blogs: string[];
}

const initialState: BlogState = {
    blogs: []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setBlogs(state, action: PayloadAction<string[]>) {
            const newState = state;
            newState.blogs = action.payload;
            return newState;
        }
    }
});

export const reducer = authSlice.reducer;
export const {
    setBlogs
} = authSlice.actions;
export const isAuthenticated = (state: RootState) => state.authReducer.authId.length > 0;