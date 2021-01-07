import { formatDate } from "../store/blog/blogSlice";

interface LeftItemProps {
    index: number;
    title: string;
    date: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export const LeftItem = ({index, title, date, onClick}: LeftItemProps): JSX.Element => {
    return (
        <div onClick={onClick} className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline cursor-pointer">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">{index}</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">{title}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">{formatDate(date)}</p>
            </div>
        </div>
    );
}

interface RightItemProps {
    index: number;
    title: string;
    date: string;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export const RightItem = ({index, title, date, onClick}: RightItemProps): JSX.Element => {
    return (
        <div onClick={onClick} className="mb-8 flex justify-between items-center w-full right-timeline cursor-pointer">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{index}</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">{formatDate(date)}</p>
            </div>
        </div>
    );
}