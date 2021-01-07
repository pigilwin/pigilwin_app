import { useSelector } from "react-redux";
import { 
    isAttemptingAuthSelector, 
    isAuthenticatedSelector 
} from "../store/auth/authSlice";
import { SignInLink, CreateNewLink } from './links';
import { SignInPage } from './signIn';

export const Blog = (): JSX.Element => {

    const isCurrentlyAttemptingAuth = useSelector(isAttemptingAuthSelector);
    const isAuthenticated = useSelector(isAuthenticatedSelector);

    if (isCurrentlyAttemptingAuth) {
        return <SignInPage/>;
    }

    let element: JSX.Element = <SignInLink/>;
    if (isAuthenticated) {
        element = <CreateNewLink/>;
    }


    return (
        <div className="container bg-gray-200 mx-auto h-full">
            <h1 className="text-2xl text-center p-4">Blog</h1>
            <div className="relative wrap overflow-hidden p-10 h-full">
                <MiddleLine/>
            </div>
            <div className="text-center mx-auto my-4">
                {element}
            </div>
        </div>
    );
}

const MiddleLine = (): JSX.Element => {
    return (
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-50"></div>
    );
}