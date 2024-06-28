// import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <div className="flex justify-between items-center max-w-6xl mx-auto my-3">
        <div>
          <h1 className="font-bold text-3xl text-orange-400">The Food Batch</h1>
          <address>
            Created by Ankit Jindal
            <br />
            Visit us at :{" "}
            <a
              className="font-bold"
              href="https://www.linkedin.com/in/ankit-jindal-65b957232/"
            >
              Profile
            </a>
            <br />
            Raipur, C.G.
            <br />
            INDIA
          </address>
        </div>
        {/* <div className="flex flex-col gap-y-1">
          <NavLink className={() => `font-semibold text-md text-gray-600`}>
            Home
          </NavLink>
          <NavLink className={() => `font-semibold text-md text-gray-600`}>
            Resturant
          </NavLink>
          <NavLink className={() => `font-semibold text-md text-gray-600`}>
            Contact
          </NavLink>
          <NavLink className={() => `font-semibold text-md text-gray-600`}>
            About
          </NavLink>
        </div> */}
  
        <div></div>
      </div>
    );
  };
  
  export default Footer;
  