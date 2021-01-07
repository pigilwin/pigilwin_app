import { useDispatch } from "react-redux";
import { setAuthId, setIsCurrentlyAttemptingAuth } from "../store/auth/authSlice";
import { addingNewBlog } from "../store/blog/blogSlice";
import { authenticateOut } from "../store/firebase";

export const SignInLink = (): JSX.Element => {

    const dispatch = useDispatch();

    const onClickHandler = (): void => {
        dispatch(setIsCurrentlyAttemptingAuth(true));
    };

    return (
        <button onClick={onClickHandler} className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded ripple hover:bg-blue-100 focus:outline-none">
            Create New
        </button>
    );
}

export const CreateNewLink = (): JSX.Element => {
    
    const dispatch = useDispatch();

    const createNewHandler = (): void => {
        dispatch(addingNewBlog(true));
    }

    const signOutHandler = async (): Promise<void> => {
        await authenticateOut();
        dispatch(setAuthId(''));
    }
    
    return (
        <div>
            <button onClick={createNewHandler} className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded ripple hover:bg-blue-100 focus:outline-none">
                Create New
            </button>
            <button onClick={signOutHandler} className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-red-700 uppercase transition bg-transparent border-2 border-red-700 rounded ripple hover:bg-blue-100 focus:outline-none">
                Sign Out
            </button>
        </div>
    );
}
