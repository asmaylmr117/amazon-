import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import amazonlogo from "../../assets/images/Amazon.png";
import indiaFlag from "../../assets/images/India.png";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Footer = ()=> {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
        return(
        <div className="flex flex-col">
                <div className="font-gujarati  bg-upFooter text-white  text-center  py-[1.781rem] hover:cursor-pointer" onClick={scrollToTop}>Back to Top</div>
                <footer className="flex flex-col w-full">
                        <section className="us w-full bg-[#232F3E] text-amber-50 pb-4">
                                <ul className="grid grid-cols-2 md:grid-cols-4  gap-4 line- 
                                px-[10%] py-5 w-full">
                                        <li><strong>Get to know Us</strong>
                                                <ul>
                                                        <li>About Us</li>
                                                        <li>Careers</li>
                                                        <li>Press Releases</li>
                                                        <li>Amazon Science</li>
                                                </ul>
                                        </li>
                                        <li><strong>Connect with Us</strong>
                                                <ul>
                                                        <li>Facebook</li>
                                                        <li>Twitter</li>
                                                        <li>Instagram</li>
                                                </ul>
                                        </li>
                                        <li><strong>Make Money with Us</strong>
                                                <ul>
                                                        <li>Sell on Amazon</li>
                                                        <li>Sell under Amazon Accelerator</li>
                                                        <li>Protect and Build Your Brand</li>
                                                        <li>Amazon Global Selling</li>
                                                        <li>Supply to Amazon</li>
                                                        <li>Become an Affiliate</li>
                                                        <li>Fulfillment by Amazon</li>
                                                        <li>Advertise Your Products</li>
                                                        <li>Amazon Pay on Merchants</li>
                                                </ul>
                                        </li>
                                        <li><strong>Let Us Help You</strong>
                                                <ul>
                                                <li>Your Account</li>
                                                <li>Returns Center</li>
                                                <li>Recalls and Product Safety Alerts</li>
                                                <li>100% Purchase Protection</li>
                                                <li>Amazon App Download</li>
                                                <li>Help</li>
                                                </ul>
                                        </li>
                                </ul>
                                <hr />
                                <div className="p-3 flex items-center justify-center gap-3">
                                        <Link to="/" className='' > 
                                                <img src={amazonlogo} alt="logo" className=""/>
                                        </Link>
                                        <div className="text-footerdark  flex  gap-3">
                                                <div className="country flex gap-x-[0.625rem] p-[0.625rem] border rounded-[3px] border-footerdark">
                                                        <Globe></Globe>
                                                        <span className="">English</span>
                                                        <div className="updownicons flex flex-col items-center justify-center">
                                                        <FontAwesomeIcon icon={faCaretUp} className="text-lightfont w-[0.5rem] h-[0.4rem]" /> 
                                                        <FontAwesomeIcon icon={faCaretDown} className="text-lightfont  w-[0.5rem] h-[0.4rem]" />
                                                        </div>
                                                </div>

                                                <div className="language flex items-center gap-x-[0.625rem] border rounded-[3px] border-footerdark w-[6.875rem] p-[0.625rem] ">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" alt="Egypt Flag" className="w-[1.125rem] h-[1.125rem]"/>
                                                <span>EGYPT</span>
                                                </div>     
                                        </div>
                                </div>
                        </section>
                        <section className="details bg-[#131A22] w-full 
                        text-amber-50 flex flex-col gap-14 py-5 ">
                                <ul className="grid grid-cols-2 md:grid-cols-4 px-[10%] gap-x-6 gap-y-4">
                                        <li><strong>AbeBooks</strong>
                                                <ul>
                                                        <li>Books, art & collectibles</li>
                                                </ul>
                                        </li>
                                        <li><strong>Shopbop</strong>
                                                <ul>
                                                        <li>Designer Fashion Brands</li>
                                                </ul>
                                        </li>
                                        <li><strong>Amazon Web Services</strong>
                                                <ul>
                                                        <li>Scalable Cloud Computing Services</li>
                                                </ul>
                                        </li>
                                        <li><strong>Amazon Business</strong>
                                                <ul>
                                                        <li>Everything For Your Business</li>
                                                </ul>
                                        </li>
                                        <li><strong>Audible</strong>
                                                <ul>
                                                        <li>Download Audio Books</li>
                                                </ul>
                                        </li>
                                        <li><strong>Prime Now</strong>
                                                <ul>
                                                        <li>2-Hour Delivery on Everyday Items</li>
                                                </ul>
                                        </li>
                                        <li><strong>IMDb</strong>
                                                <ul>
                                                        <li>Movies, TV & Celebrities</li>
                                                </ul>
                                        </li>
                                        <li><strong>Amazon Prime Music</strong>
                                                <ul>
                                                        <li>100 million songs, ad-free</li>
                                                        <li>Over 1.5 million podcast episodes</li>
                                                </ul>
                                        </li>
                                </ul>
                                <div className="w-full text-center px-4 text-sm">
                                        <ul className="flex justify-center gap-4">
                                                <li>Conditons of Use & Sale</li>
                                                <li>Privacy Notice</li>
                                                <li>Interset-Based Ads</li>
                                        </ul>
                                        <p>1996-2024, Amazon.com, Inc. or its affiliates</p>
                                </div>
                        </section>
                </footer>
        </div>
        );
}
export default Footer ;