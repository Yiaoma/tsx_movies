import {useState, useEffect} from "react";
import {BASE} from "../constants/urls";

export const useData = (path: string) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const URL = `${BASE}${path}?api_key=${process.env.API_KEY}`;
            const response = await fetch(URL);
            const json = await response.json();
            setData(json.results);
            setIsLoading(false);
        })();
    }, []);

    return {data, isLoading};
}