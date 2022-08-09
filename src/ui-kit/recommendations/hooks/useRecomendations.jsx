import { useCallback, useEffect, useState } from "react";

const LINK = 'https://ecz4i9.a.searchspring.io/boost/ecz4i9/recommend?tags=customers-also-viewed&limits=5';

export const useRecommendations = () => {
    const [data, setData] = useState(null);

    const fetchRecommendations = useCallback(async () => {
        const resp = await fetch(LINK);
        const data = await resp.json();
        setData(data[0].results);
    }, []);


    useEffect(() => {
        fetchRecommendations();
    }, [fetchRecommendations])

    return data;
}