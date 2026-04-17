"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type AnimationLottieProps = {
  animationPath: object;
  width?: string | number;
};

const AnimationLottie = ({
  animationPath,
  width = "95%",
}: AnimationLottieProps) => {
  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width }}
    />
  );
};

export default AnimationLottie;