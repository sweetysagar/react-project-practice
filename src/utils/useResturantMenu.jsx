import { useEffect, useState } from "react"

export const useResturantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchdata();
    }, []);
    
    const fetchdata = async () => {
        const data = await fetch(`https://namastedev.com/api/v1/listRestaurantMenu/${resId}`)
        const response = await data.json();
        const updatedResponse = response.data;
        setResInfo(updatedResponse);
    };
    return resInfo;
    
}