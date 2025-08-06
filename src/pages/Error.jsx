import { Button } from "react-bootstrap";
import LottieComponent from "../components/common/lottie/LottieComponent";
import { Link } from "react-router-dom";
function Error() {
    return(
        <div className="flex justify-center items-center flex-col">
            <LottieComponent type="error404"/>
            <Link to="/">
                <Button className="bg-[#fced21] hover:bg-black outline-none w-[200px] text-[30px] font-bold rounded-[30px] border-none text-center">
                    Go Back
                </Button>
            </Link>
        </div>
    )
        
}

export default Error;