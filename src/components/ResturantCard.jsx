import Food from "../assets/food.jpg";
import Rate from "../assets/star-icon.png";
const ResturantCard = (props) => {

    // const {name} = props?.resturantData?.info;
    console.log(props);

  return (
    <div className=" max-w-64 min-w-64  min-h-72 max-h-72 cursor-pointer hover:scale-95 duration-200 ">
      <div className="mb-2">
        <img
          className="max-w-64 min-w-64  min-h-44 max-h-44 rounded-2xl object-cover"
          src={Food}
        />
        {/* <span className="absolute">Offers written</span> */}
      </div>
      <div className="px-1">
        <h2 className="font-bold text-lg text-gray-800">
          name
        </h2>
        <div className="flex gap-x-1 items-center">
          <img className="object-contain" src={Rate} />
          <span className="font-bold text-base text-gray-800">
            Rating . Delivery Time
          </span>
        </div>
        <div className="text-gray-600 font-semibold text-sm">Cusines</div>
        <div className="text-gray-600 font-semibold text-sm">Place</div>
      </div>
    </div>
  );
};

export default ResturantCard;
