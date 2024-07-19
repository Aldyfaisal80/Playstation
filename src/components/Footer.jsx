import { CiCompass1 } from "react-icons/ci";
import { FaGamepad } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex w-[80%] h-[80px] justify-between px-[40px] p-4 items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-t-lg fixed bottom-0 left-[40px] right-0 bg-white sm:hidden">
            <div className="flex gap-2 bg-red-500 text-white p-3 rounded-[20px]">
                <CiCompass1 className="text-[1.4rem]"/>
                <span>MEET ME</span>
            </div>
            <FaGamepad className="text-[1.4rem]"/>
            <FaComment className="text-[1.4rem]"/>
            <FaUser className="text-[1.4rem]"/>
        </div>
    )
}