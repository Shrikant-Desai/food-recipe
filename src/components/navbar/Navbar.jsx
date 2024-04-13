import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);


  return (
    <nav className=" rounded-md flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 bg-gray-800 px-5">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}><img width="100" height="100" src="https://img.icons8.com/clouds/100/food-bar.png" alt="food-bar"/></NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 text-black rounded-full outline-none lg:w-96 shadow-lg shadow-black-100 focus:shadow-black-200"
        />
      </form>
      <ul className="flex gap-5 space-x-4 me-5 pe-5">
        <li>
          <NavLink
            to={"/"}
            className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium" aria-current="Home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium" aria-current="page"
          >
            favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
