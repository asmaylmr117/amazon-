import Lottie from 'react-lottie';
import loadingAnimation from "../../../assets/lottiefiles/loadingAnimation.json";
import error404 from "../../../assets/lottiefiles/error404.json";
import PropTypes from "prop-types";


const lottieMap = {
  loadingAnimation,
  error404,
};

const LottieComponent = ({type}) => {
  const lottie = lottieMap[type];

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
        <div>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    )
}

LottieComponent.propTypes = {
  type: PropTypes.string.isRequired
}

export default LottieComponent;