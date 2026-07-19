import {LOGO_URL} from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => { 
    const [btnName, setBtnName] = useState('login')
    const { loggedInUser } = useContext(UserContext);
    // cart is subscribing to a selector to read updated value from store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
    <div className="flex">
        <div className="logo-container">
            <img src= {LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>{loggedInUser}</li>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/contact'}>Contact Us</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/cart"}> Cart ({cartItems.length} items)</Link></li>
                <button className="w-100 px-3 py-6 border-2 box-content m-2" onClick={() => {
                    setBtnName((prev) => prev === 'login' ? 'logout' : 'login');
                }} >{btnName}</button>
            </ul>
        </div>
    </div>
)}

export default Header;