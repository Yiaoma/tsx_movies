import {useState} from "react";

export const useCollapse = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollapse = () => setIsCollapsed(!isCollapsed);

    return {isCollapsed, handleCollapse};
}