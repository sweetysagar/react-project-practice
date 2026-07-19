import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import { useResturantMenu } from "../utils/useResturantMenu";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";

export const ResturantMenu = () => {
    const [itemValue, setItemValue] = useState(null)
    const {resId} = useParams();
    const resturantmenu = useResturantMenu(resId);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (resturantmenu) {
           setItemValue(resturantmenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
        }
    }, [resturantmenu]);

    const categories = ""
    if (resturantmenu === null) {
        return <Shimmer />;
    }
    const handleAddItem = (data) => {
        // Dispatching an action through this function
        dispatch(addItems(data));
    }

    return (
        <div>
            <h1>{resturantmenu.name}</h1>
            <h2>{resturantmenu.costForTwo}</h2>
            <h2>{itemValue?.title}</h2>
            <ul>
                {itemValue?.itemCards?.map((item) => (
                    <div key={item.card.info.id}>
                    <li key={item.card.info.id} className="border bg-pink-300">{item.card.info.name}</li>
                    <button className="bg-blue-500 text-white w-10" onClick={() => handleAddItem(item)}>Add +</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}