import ds1 from '../../public/image/ds1.jpg'
import Bages from '../elemets/Bages'

// ! icons
import { FaShoppingCart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import { HiXMark } from "react-icons/hi2"

export default function CardProducts() {
    return (
        // Product Card
        <div className="flex overflow-x-scroll w-full gap-[20px] pb-[40px] ">
            <Bages>
                <img className="aspect-square mb-[30px]" src={ds1} alt="" />
                <Bages.Descriptions title="Solar Red Joystick" types="Accessories" />
                <Bages.Prices price="$233" amount="/Pcs" icon={<FaShoppingCart className='text-white p-[10px]' />} />
                <div className="flex justify-center items-center gap-[20px] absolute bottom-[-19px]">
                    <Bages.Icons icon={<HiXMark className="border-4 border-gray-300 rounded-full bg-white px-[6px] py-[4px]" />} />
                    <Bages.Icons icon={<FaStar className="border-gray-300 text-red-700 bg-white text-[1.2rem] rounded-full" />} />
                    <Bages.Icons icon={<FaCheck className="border-4 border-gray-300 rounded-full bg-white px-[6px] py-[4px]"
                    />} />
                </div>
            </Bages>
            <Bages>
                <img className="aspect-square mb-[30px]" src={ds1} alt="" />
                <Bages.Descriptions title="Solar Red Joystick" types="Accessories" />
                <Bages.Prices price="$233" amount="/Pcs" icon={<FaShoppingCart className='text-white p-[10px]' />} />
                <div className="flex justify-center items-center gap-[20px] absolute bottom-[-19px]">
                    <Bages.Icons icon={<HiXMark className="border-4 border-gray-300 rounded-full bg-white px-[6px] py-[4px]" />} />
                    <Bages.Icons icon={<FaStar className="border-gray-300 text-red-700 bg-white text-[1.2rem] rounded-full" />} />
                    <Bages.Icons icon={<FaCheck className="border-4 border-gray-300 rounded-full bg-white px-[6px] py-[4px]"
                    />} />
                </div>
            </Bages>
            <Bages>
                <img className="aspect-square mb-[30px]" src={ds1} alt="" />
                <Bages.Descriptions title="Solar Red Joystick" types="Accessories" />
                <Bages.Prices price="$233" amount="/Pcs" icon={<FaShoppingCart className='text-white p-[10px]' />} />
                <div className="flex justify-center items-center gap-[20px] absolute bottom-[-19px]">
                    <Bages.Icons icon={<HiXMark className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                    <Bages.Icons icon={<FaStar className="flex justify-center items-center w-[40px] h-[40px] bg-white text-[1.5rem] text-red-600 rounded-full border-4 border-gray-100" />} />
                    <Bages.Icons icon={<FaCheck className="flex justify-center items-center w-[20px] h-[20px] bg-white text-[0.8rem] text-gray-500 rounded-full border-2 border-gray-200" />} />
                </div>
            </Bages>
        </div>
        // End of Card Product
        // Start of Console Contents
    )
}