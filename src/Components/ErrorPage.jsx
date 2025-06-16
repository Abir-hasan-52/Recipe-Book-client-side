import React from 'react';
import error from "../assets/lottie/Error.json";
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div>
            <Lottie 
                animationData={error}
                loop={true}
                autoplay={true}
                className="w-full h-screen"
            />
        </div>
    );
};

export default ErrorPage;