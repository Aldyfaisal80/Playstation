// eslint-disable-next-line react/prop-types
const CardProducts = ({ Children }) => {
    return (
        <div
            className="shrink-0 border p-4 w-[200px] rounded-[10px] relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:border-2 hover:border-gray-300">
            {Children}
        </div>
    )
}


// eslint-disable-next-line react/prop-types
const Descriptions = ({ Title, Types }) => {
    return (
        <span>
            <p className="font-[700]">{Title}</p>
            <p className="text-gray-500">{Types}</p>
        </span>
    )   
}

// eslint-disable-next-line react/prop-types
const Prices = ({ Price }) => {
    return (
        <p className="text-red-700 font-[600]">{Price}</p>
    )
}

// eslint-disable-next-line react/prop-types
const Icons = ({ icon, className }) => {
    return (
        <div className={`flex justify-center items-center gap-[20px] absolute bottom-[-19px] ${className}`}>
            {icon}
        </div>
    )
}

CardProducts.Icons = Icons
CardProducts.Descriptions = Descriptions
CardProducts.Prices = Prices

export default CardProducts