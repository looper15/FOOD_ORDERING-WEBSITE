import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Item from "../components/Item";
import ResturantCard from "../components/ResturantCard";
import { useEffect, useState } from "react";
import { RESTURANT_API } from "../utils/constants";

const Home = () => {
  const [listOfResturant, setListOfResturant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(RESTURANT_API);

    const json = await data?.json();

    // console.log(json);

    setListOfResturant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  let box = document.querySelector(".itemcontainer");

  const handleItemPrev = () => {
    box.scrollLeft = box.scrollLeft - 250;
  };
  const handleItemNext = () => {
    box.scrollLeft = box.scrollLeft + 250;
  };

  let resturantBox = document.querySelector(".resturant-container");

  const handleResPrev = () => {
    resturantBox.scrollLeft = resturantBox.scrollLeft - 250;
  };
  const handleResNext = () => {
    resturantBox.scrollLeft = resturantBox.scrollLeft + 250;
  };

  return (
    <div className="max-w-6xl mx-auto my-3">
      {/* First Crousel */}
      <div className="flex flex-col border-b border-gray-500">
        <div className="flex justify-between items-center mb-1">
          <div className="font-bold text-2xl text-gray-900 ">
            What&apos;s on your mind?
          </div>
          <div className="flex gap-x-2">
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={handleItemPrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={handleItemNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="itemcontainer flex gap-x-8 mt-10 mb-20 overflow-x-hidden scroll-smooth ">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>

      {/* Second Crousel */}

      <div className="flex flex-col border-b border-gray-500 my-3">
        <div className="flex justify-between items-center mb-1">
          <div className="font-bold text-2xl text-gray-900 ">
            Top restaurant chains in Indore
          </div>
          <div className="flex gap-x-2">
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={handleResPrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-gray-200 p-2 rounded-full"
              onClick={handleResNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="resturant-container flex gap-x-9 mt-4 overflow-x-hidden scroll-smooth mb-14 ">






          {listOfResturant?.map((resturant) => (
            <ResturantCard key={resturant.info.id} resturantData={resturant} />
          ))}
        









        </div>
      </div>

      {/* Resturants List */}

      <div className="flex flex-col my-3 border-b border-gray-500">
        <h2 className="font-bold text-2xl text-gray-900 ">
          {" "}
          Resturants with online food delivery in Indore
        </h2>
        <div className="flex gap-x-2 my-3 mx-1">
          <button className="border border-solid border-gray-300 px-2 py-1 rounded-full shadow-sm font-semibold text-gray-700 text-sm hover:shadow-md duration-150">
            Ratings 4.0
          </button>
          <button className="border border-solid border-gray-300 px-2 py-1 rounded-full shadow-sm font-semibold text-gray-700 text-sm hover:shadow-md duration-150">
            Pure Veg
          </button>
          {/*veg key for veg*/}
          <button className="border border-solid border-gray-300 px-2 py-1 rounded-full shadow-sm font-semibold text-gray-700 text-sm hover:shadow-md duration-150">
            Fast Delivery
          </button>{" "}
          {/* if delivery time is less than 25 then fast */}
          <button className="border border-solid border-gray-300 px-2 py-1 rounded-full shadow-sm font-semibold text-gray-700 text-sm hover:shadow-md duration-150">
            Less then Rs. 300
          </button>
          {/** if cost for 2 is less than 300 */}
        </div>

        <div className="flex flex-wrap my-8 gap-7">
          <ResturantCard />
          <ResturantCard />
          <ResturantCard />
          <ResturantCard />
          <ResturantCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
