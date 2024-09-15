import { Link } from "react-router-dom";
import { themes } from "../Data/Data";
const Footer = () => {
  return (
    <>
      <div className="bg-[#212529] py-10">
        <div className="container mx-auto">
          <div className="flex justify-between ">
            <div className="w-[34%] ">
              <h5 className="text-white ">Newsletter</h5>
              <p className="text-[#555555] mt-3">
                Keep up on our always evolving product features and technology.
                Enter your e-mail address and subscribe to our newsletter.
              </p>
              <div className="bg-white pl-3 rounded-full flex justify-between mt-7">
                <input
                  type="email"
                  className="focus:outline-none rounded-full border-none"
                  placeholder="Email Address"
                />
                <button className="font-semibold transition-all hover:bg-[#5555551e] rounded-r-full  py-3 px-4 ">
                  Go!
                </button>
              </div>
            </div>
            <div className="">
              <h5 className="text-white">Top 5 FAQs</h5>
              <ul className="mt-3 flex flex-col gap-3">
                <li>
                  <Link to="/" className="text-[#555555] hover:text-white">
                    Technical support contacts?
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-[#555555] hover:text-white">
                    How do I know the date of my delivery?
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-[#555555] hover:text-white">
                    My product did not arrive?
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-[#555555] hover:text-white">
                    What are the payment methods?
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-[#555555] hover:text-white">
                    Product availability?
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h5 className="text-white">Contact Us</h5>
              <ul className="mt-3 flex flex-col gap-3">
                <li>
                  <i className="fa-regular fa-circle-dot text-[#116bb0] mr-2"></i>
                  <Link to="/" className="text-[#555555] hover:text-white">
                    234 Street Name, City Name
                  </Link>
                </li>
                <li>
                  <i className="fa-brands fa-whatsapp text-[#116bb0] mr-2"></i>
                  <Link to="/" className="text-[#555555] hover:text-white">
                    (800) 123-4567
                  </Link>
                </li>
                <li>
                  <i className="fa-regular fa-envelope text-[#116bb0] mr-2"></i>
                  <Link to="/" className="text-[#555555] hover:text-white">
                    mail@example.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h5 className="text-white mb-3">Follow Us</h5>
              <div className="flex">
                <div className="flex justify-center items-center shadow h-7 w-7 rounded-full bg-white text-black hover:bg-[#0088cc] hover:text-white transition-all">
                  <i className="fa-brands fa-facebook-f  "></i>
                </div>
                <div className="bg-white text-black flex justify-center items-center shadow h-7 w-7 rounded-full ml-2  hover:bg-[#0088cc] hover:text-white transition-all">
                  <i className="fa-brands fa-x-twitter  "></i>
                </div>
                <div className="bg-white text-black flex justify-center items-center shadow h-7 w-7 rounded-full ml-2  hover:bg-[#0088cc] hover:text-white transition-all">
                  <i className="fa-brands fa-linkedin-in  "></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1c2023] py-7">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" flex gap-2 items-center">
            <img src={themes.flogo} alt="" />
            <p className="text-[#555555]">
              © copyright 2024. Rakib All Rights Reserved.
            </p>
          </div>
          <div>
            <div>
              <ul className=" flex justify-end gap-3 items-center text-sm">
                <li className="text-[#999] px-3">
                  <i className="fa-solid fa-angle-right mr-1 text-[9px] "></i>
                  <a
                    className="hover:ml-1 transition-all   inline-block"
                    href="#"
                  >
                    FAQ's
                  </a>
                </li>
                <li className="text-[#999] px-3">
                  <i className="fa-solid fa-angle-right mr-1 text-[9px] "></i>
                  <a
                    className="hover:ml-1 transition-all   inline-block"
                    href="#"
                  >
                    Sitemap
                  </a>
                </li>
                <li className="text-[#999] px-3">
                  <i className="fa-solid fa-angle-right mr-1 text-[9px] "></i>
                  <a
                    className="hover:ml-1 transition-all   inline-block"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
