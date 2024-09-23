import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
    return (
        <header className="max-w-[1320px] mx-auto">
 <div className="navbar flex justify-between items-center bg-base-100">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm text-[#150B2BB3]  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl lg:text-3xl text-[#150b2b] font-bold">Recipe Calories</a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  
  <div className="flex items-center lg:gap-2">
    <div className="hidden md:flex items-center bg-gray-100 px-2 lg:px-6  rounded-[50px]">
      <div className=' flex left-20'>
      <HiMagnifyingGlass></HiMagnifyingGlass>
      </div>
      
      <input  type="text" placeholder="Search" className="input bg-gray-100 w-24 md:w-auto" />
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="text-2xl bg-[#0be58a] p-1 lg:p-3 rounded-full">
          <FaRegCircleUser></FaRegCircleUser>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </header>
    );
};

export default Header;