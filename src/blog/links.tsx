import { useDispatch } from "react-redux";
import { setIsCurrentlyAttemptingAuth } from "../store/auth/authSlice";

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
    return (
        <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded ripple hover:bg-blue-100 focus:outline-none">
            Create New
        </button>
    );
}
