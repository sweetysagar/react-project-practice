import UserContext from "../utils/userCOntext";
import { useContext } from "react";

const ResturantCard = ({ resName }) => {
  const data = useContext(UserContext);
  return (
  <div className="res-card">
    <h2>{data.loggedInUser}</h2>
    <h2 className="res-title"> {resName?.info?.name}</h2>
    <p className="res-location">{resName?.info?.locality}</p>
    <div className="res-rating">
      ⭐ {resName?.info?.avgRating || "N/A"}
    </div>
  </div>
)};

export const withPromotedResturant = (ResturantCard) => {
  return (props) => {
    <div>
    <label className="absolute rounded-b-lg font-black bg-white">Promoted</label>
    <ResturantCard {...props}/>
    </div>
  } 
}

export default ResturantCard;