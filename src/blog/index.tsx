export const Blog = (): JSX.Element => {
    return (
        <div className="container bg-gray-200 mx-auto h-full">
            <h1 className="text-2xl text-center p-4">Blog</h1>
            <div className="relative wrap overflow-hidden p-10 h-full">
                <MiddleLine/>
            </div>
            <div className="text-center mx-auto my-4">
                <SignInLink/>
            </div>
        </div>
    );
}

const MiddleLine = (): JSX.Element => {
    return (
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-50"></div>
    );
}

const SignInLink = (): JSX.Element => {
    return (
        <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded ripple hover:bg-blue-100 focus:outline-none">
            Create New
        </button>
    );
}