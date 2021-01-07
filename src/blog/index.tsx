export const Blog = (): JSX.Element => {
    return (
        <div className="container bg-gray-200 mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
                <MiddleLine/>
            </div>
        </div>
    );
}

const MiddleLine = (): JSX.Element => {
    return (
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-50"></div>
    );
}