import { useDispatch } from "react-redux";
import { Button } from "../components/input";
import { setAuthId, setIsCurrentlyAttemptingAuth } from "../store/auth/authSlice";
import { addingNewPost } from "../store/blog/blogSlice";
import { authenticateOut } from "../store/firebase";

export const SignInLink = (): JSX.Element => {

    const dispatch = useDispatch();

    const onClickHandler = (): void => {
        dispatch(setIsCurrentlyAttemptingAuth(true));
    };

    return (
        <div className="p-5 w-1/3 mx-auto">
            <Button
                onClick={onClickHandler}
                title="Create New"
            />
        </div>
    );
}

export const CreateNewLink = (): JSX.Element => {
    
    const dispatch = useDispatch();

    const createNewHandler = (): void => {
        dispatch(addingNewPost(true));
    }

    const signOutHandler = async (): Promise<void> => {
        await authenticateOut();
        dispatch(setAuthId(''));
    }
    
    return (
        <div className="w-full grid grid-cols-2 gap-4">
            <Button
                onClick={createNewHandler}
                title="Create New"
            />
            <Button
                onClick={signOutHandler}
                title="Sign Out"
            />
        </div>
    );
}
