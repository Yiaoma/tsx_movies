import {useState, useEffect} from "react";

/*
    Hides element if window is scrolled downwards.
*/

export const useHide = () => {
    const [prevPosition, setPrevPosition] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const handleHide = () => {
        const currPosition = window.pageYOffset;

        if (currPosition > prevPosition) setIsHidden(true);
        if (currPosition < prevPosition) setIsHidden(false);

        setPrevPosition(currPosition);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleHide);
        return () => window.removeEventListener("scroll", handleHide);
    }, [handleHide]);

    return {isHidden};
}