import Navbar from '../components/Navbar';
import CardProducts from '../components/CardProducts';
import ConsoleProducts from '../components/ConsoleProducts';
import Footer from '../components/Footer';


export default function IndexMain() {
    return (
        <div className="p-4">
            {/* Header  */}
            <Navbar />
            {/* Section Card  */}
            <section className="pt-[20px] font-poppins">
                <div className="flex justify-between font-poppins">
                    <p className="font-[700]">Popular Products</p>
                    <p className="text-red-500">View All</p>
                </div>
            </section>
            {/* Product  */}
            <CardProducts />
            {/* END OF CARD CONTENT  */}
            <div className="flex justify-between font-poppins pt-[10px]">
                <span className="font-black">Recomended</span>
                <span className="text-red-700">View all</span>
            </div>
            {/* START CONSOLE CONTENT  */}
            <ConsoleProducts />
            {/* END OF CONSOLE 
    FIXED NAVBAR   */}
            <Footer/>
        </div>
    );
}
