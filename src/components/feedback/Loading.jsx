import LottieComponent from '../common/lottie/LottieComponent'
import PropTypes from "prop-types";

const Loading = () => {
    
    if(status === "pending"){
        return <LottieComponent type="loadingAnimation"/>
    }else if(status === "rejected") {
        return <LottieComponent type="eror404"/>
    }
     
}

Loading.propTypes = {
    status: PropTypes.string.isRequired
}

export default Loading;
