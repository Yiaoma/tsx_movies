import {useState} from "react";

export const useDropdown = () => {
    const [isDropped, setIsDropped] = useState(false);

    const handleDropdown = () => setIsDropped(!isDropped);

    return {isDropped, handleDropdown};
}