import { useSelector } from "react-redux"
import { removeItems, clearCart } from "../redux/cartSlice"
import { useDispatch } from "react-redux";

const Cart = () => {

    const selectItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    console.log(selectItem, 'cart');

    const deleteItem = (e) => {
        dispatch(removeItems());
    }
    const removeAllItems = () => {
        dispatch(clearCart())
    }

    return (
    <div className="bg-amber-600 font-bold flex container">
        <div>{selectItem.map((item) => (
            <div key={item.card.info.id} className="container flex">
                 <div>{item.card.info.name}</div>
                 <div>{item.card.info.price}</div>
                  <button className="m-4 bg-amber-300" onClick={deleteItem}>Remove Item</button>
            </div>
         ))}</div>
          <button className="m-2 bg-amber-300 rounded-b-sm" onClick={removeAllItems}>Clear Cart</button>
    </div>
    )
}
export default Cart;