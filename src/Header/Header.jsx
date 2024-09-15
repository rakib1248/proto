import { Link } from "react-router-dom";
import { themes } from "../Data/Data";

const Header = () => {
  return (
    <>
      <div className="container mx-auto py-6 items-center">
        <div>
          <ul className=" flex justify-end gap-3 items-center text-sm">
            <li className="text-[#999] border-r px-3">
              <i className="fa-solid fa-angle-right mr-1 "></i>
              <Link className="hover:ml-2 transition-all  inline-block" to="/about">
                About Us
              </Link>
            </li>
            <li className="text-[#999] border-r px-3">
              <i className="fa-solid fa-angle-right mr-1 "></i>
              <Link className="hover:ml-2 transition-all " to="/contact">
                Contactc Us
              </Link>
            </li>
            <li className="text-[#999]">
              <Link to="tel:123 465 789">(123) 456-789</Link>
            </li>
            <li className="text-[#999]">
              <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <img src={themes.logo} alt="" />
          </div>
          <nav className="flex items-center">
            <ul className="flex">
              <li>
                <Link
                  className="active text-white py-2 px-3  text-lg bg-[#0088cc]"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" py-2 px-3 text-lg text-[#0088cc] hover:text-white hover:bg-[#0088cc]"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className=" py-2 px-3 text-lg text-[#0088cc] hover:text-white hover:bg-[#0088cc]"
                  to="/team"
                >
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  className=" py-2 px-3 text-lg text-[#0088cc] hover:text-white hover:bg-[#0088cc]"
                  to="/blog"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className=" py-2 px-3 text-lg text-[#0088cc] hover:text-white hover:bg-[#0088cc]"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex justify-center items-center shadow h-7 w-7 rounded-full hover:bg-[#0088cc] hover:text-white transition-all">
              <i className="fa-brands fa-facebook-f  "></i>
            </div>
            <div className="flex justify-center items-center shadow h-7 w-7 rounded-full ml-2  hover:bg-[#0088cc] hover:text-white transition-all">
              <i className="fa-brands fa-x-twitter  "></i>
            </div>
            <div className="flex justify-center items-center shadow h-7 w-7 rounded-full ml-2  hover:bg-[#0088cc] hover:text-white transition-all">
              <i className="fa-brands fa-linkedin-in  "></i>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
