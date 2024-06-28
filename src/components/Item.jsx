import Reactsvg from "../assets/react.svg"
const Item = () => {
  return (
    <div className="flex flex-col items-center">
        <img className="min-w-28 max-w-28" src={Reactsvg}/>
        <span className="font-semibold text-xl mt-4 text-gray-500 text-center">Pizza</span>
    </div>
  )
}

export default Item