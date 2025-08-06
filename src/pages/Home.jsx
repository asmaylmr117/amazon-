import { Link } from "react-router-dom";
import CardsSection from "../components/ecommerce/home/cards/CardsSection";
import Landing from "../components/ecommerce/home/Landing";
import ProductsCards from "../components/ecommerce/home/productsCards/ProductsCards";
import ItemsCarousel from "../components/ecommerce/home/productsCarousel/ItemsCarousel";
import ClothesCarousel from './../components/ecommerce/home/productsCarousel/ClothesCarousel';

function Home() {
    return (
        <div className="bg-[#575757]">
            <Landing/>
             <CardsSection/>
            <div className="mt-[60px] bg-[#fff]">
            <h1 className="text-[30px] font-bold pt-[30px] ps-[30px]">Best Sellers in Clothing & Accessories</h1>
                <ClothesCarousel/>
            </div>
            <ProductsCards/>
            <div className="bg-[#fff]">
                <h1 className="text-[30px] font-bold pt-[30px] ps-[30px]">Min.50% off | Unique Kitchen Finds | Amazon Brands & more <Link to="/products" className=" text-[20px] font-normal ms-[7px] text-[#55acbb] ">See all</Link></h1>
                <ItemsCarousel/>
            </div>
        </div>
    )
}

export default Home;