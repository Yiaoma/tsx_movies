import {useState, useEffect} from "react";

export const useHide = () => {
    const [prevPosition, setPrevPosition] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const handleScroll = () => {
        const currPosition = window.pageYOffset;

        if (currPosition > prevPosition) setIsHidden(true);
        if (currPosition < prevPosition) setIsHidden(false);

        setPrevPosition(currPosition);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })

    return {isHidden} as const;
}