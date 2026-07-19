import ResturantCard, {withPromotedResturant} from './Resturant-Cards';
import { useEffect, useState, useContext } from 'react';
import { Shimmer } from './Shimmer';
import { Link } from 'react-router';
import About from './About';
import { useOnlineStatus } from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext';

const Body = () => {
    const [listOfResturant , setListOfResturant] = useState([]);
    const [filteredRest , setFilteredRest ] = useState([]);
    const [searchData , setSearchData] = useState('');
    const status = useOnlineStatus();
    const PromotedCard = withPromotedResturant(ResturantCard);
    const UserData = useContext(UserContext);

    const performSearch = (query) => {
        const q = query.trim().toLowerCase();
        if (!q) {
            setFilteredRest(listOfResturant);
            return;
        }

        const searchFilteredData = listOfResturant.filter((res) => {
            const name = res.info?.name?.toLowerCase() ?? '';
            const locality = res.info?.locality?.toLowerCase() ?? '';
            return name.includes(q) || locality.includes(q);
        });

        setFilteredRest(searchFilteredData);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            performSearch(searchData);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchData, listOfResturant]);

    useEffect(() => {
        fetchData();
        console.log("Use effect called");
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://namastedev.com/api/v1/listRestaurants');
        const jsonData = await data.json();
        const trimmedResponse = jsonData.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setListOfResturant(trimmedResponse);
        setFilteredRest(trimmedResponse);
    }
    if (!status) {
  return <h1>Something is wrong</h1>;
}

if (listOfResturant.length === 0) {
  return <Shimmer />;
}
    return (
      <div className="body">
        <input
          type="text"
          className="search-box"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <button
          className="bg-sky-500 hover:bg-sky-700"
          onClick={() => performSearch(searchData)}
        >
          Search
        </button>
        <div className="filter">
          <button
            className="filter-btn"
            onMouseOver={() => console.log("on mouse hover")}
            onClick={() => {
              console.log("hello");
              const filtered = listOfResturant.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setListOfResturant(filtered);
            }}
          >
            Top Restro
          </button>
          <label>Name</label>
          <input className='bo' type="text" value={UserData.loggedInUser}
            onChange={(e) => {
              UserData.setUserName(e.target.value);
            }}  />
        </div>
        <div className="res-container">
          {filteredRest.map((resturants) => (
            <Link
              to={`/menu/${resturants?.info?.id}`}
              key={resturants?.info?.id}
            >
             
                <ResturantCard
                  key={resturants?.info?.id}
                  resName={resturants}
                />
              
            </Link>
          ))}
          <About name={"Body Text"} />
        </div>
      </div>
    );};
export default Body;