export default function Footer() {
    return (
        <div className="flex w-[80%] justify-between px-[40px] p-4 items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-t-lg fixed bottom-0 left-[40px] right-0 bg-white sm:hidden">
            <div className="bg-red-500 text-white p-2 rounded-[20px]">
                <i className="fa-solid fa-compass text-[1.4rem]"></i>
                <span>MEET ME</span>
            </div>
            <i className="fa-solid fa-gamepad text-[1.4rem]"></i>
            <i className="fa-solid fa-comment text-[1.4rem]"></i>
            <i className="fa-solid fa-user text-red-500 text-[1.4rem]"></i>
        </div>
    )
}