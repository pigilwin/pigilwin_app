import { useSelector } from "react-redux";
import { 
    isAttemptingAuthSelector, 
    isAuthenticatedSelector 
} from "../store/auth/authSlice";
import { areWeAddingANewBlogSelector } from "../store/blog/blogSlice";
import { SignInLink, CreateNewLink } from './links';
import { SignInPage } from './signIn';
import { Editor } from './Editor';
import { Blog as BlogType } from "../store/blog/blogTypes";

export const Blog = (): JSX.Element => {

    const isCurrentlyAttemptingAuth = useSelector(isAttemptingAuthSelector);
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const areWeAddingANewBlog = useSelector(areWeAddingANewBlogSelector);

    if (isCurrentlyAttemptingAuth) {
        return <SignInPage/>;
    }

    if (areWeAddingANewBlog) {
        const emptyBlogWithId: BlogType = {
            id: '',
            title: '',
            content: '',
            date: ''
        };
        return <Editor blog={emptyBlogWithId}/>
    }

    let element: JSX.Element = <SignInLink/>;
    if (isAuthenticated) {
        element = <CreateNewLink/>;
    }


    return (
        <div className="container mx-auto h-auto">
            <h1 className="text-2xl text-center p-4 text-black dark:text-white">Blog</h1>
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