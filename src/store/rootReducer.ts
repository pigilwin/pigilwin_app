import { combineReducers } from '@reduxjs/toolkit';
import { reducer as themeReducer } from './theme/themeSlice';

export const rootReducer = combineReducers({
    themeReducer
});
export type RootState = ReturnType<typeof rootReducer>;
export type RootStateHook = () => RootState;