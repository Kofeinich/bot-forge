import React from "react";
import Lottie from "react-lottie";

interface AnimationProps {
    animationData: any;
    w: number,
    h: number
}

export const Animation: React.FC<AnimationProps> = ({ animationData, w, h }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return <Lottie
        options={defaultOptions}
        height={h}
        width={w}
    />
};
