// eslint-disable-next-line react/prop-types
const Bages = ({ children }) => {
    return (
        <div
            className="shrink-0 border p-4 w-[200px] rounded-[10px] relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:border-2 hover:border-gray-300">
            {children}
        </div>
    )
}


// eslint-disable-next-line react/prop-types
const Descriptions = ({ title, types,}) => {
    return (
        <div>
            <span className="mt-[-10px]">
                <p className="font-[600]">{title}</p>
                <p>{types}</p>
            </span>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const Prices = ({ price, amount, icon, className }) => {
    return (
        <div className="flex justify-between items-center">
            <span className="flex mt-[-10px]">
                <p className="text-red-700 font-[600]">{price}</p>
                <p>{amount}</p>
            </span>
            <div className={`flex justify-center items-center bg-gray-700 p-[2px] rounded-[5px] w-[50px] -translate-y-4 ${className}`}>
                {icon}
            </div>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const Icons = ({ icon, className }) => {
    return (
        <div className={`${className}`}>
            {icon}
        </div>
    )
}

Bages.Icons = Icons
Bages.Descriptions = Descriptions
Bages.Prices = Prices

export default Bages