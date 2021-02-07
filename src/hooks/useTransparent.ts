import {useState, useEffect} from "react";

/*
    Gives element a transparent background if window position is on top of the screen.
*/

export const useTransparent = () => {
    const [isTransparent, setIsTransparent] = useState(true);

    const handleTransparent = () => {
        if (window.pageYOffset > 0) setIsTransparent(false);
        else setIsTransparent(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleTransparent);

        return () => window.removeEventListener("scroll", handleTransparent);
    }, [handleTransparent]);

    return {isTransparent};
}