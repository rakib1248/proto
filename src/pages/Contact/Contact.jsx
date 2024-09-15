import Breackcam from "../../components/Breackcam/Breackcam";
import Pagehalmet from "../../components/Pagehalmet/Pagehalmet";

const Contact = () => {
  return (
    <>
      <Breackcam title="Contact Us" link="/contact" />
      <div className="py-10 container mx-auto flex gap-1">
      <Pagehalmet title="Contact Us"/>
        <div className="w-2/4">
          <h1 className="text-3xl mb-2">Contact Us</h1>
          <p>Feel free to ask for details, don't save any questions!</p>
          <form action="" className="mt-10">
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="font-semibold text-lg" htmlFor="">
                  Your name <sup>*</sup>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="focus:outline-none rounded border w-full p-2 "
                />
              </div>
              <div className="w-1/2">
                <label className="font-semibold text-lg" htmlFor="">
                  Your email address <sup>*</sup>
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="focus:outline-none rounded border w-full p-2"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="font-semibold text-lg" htmlFor="">
                Subject <sup>*</sup>
              </label>{" "}
              <br />
              <input
                type="text"
                className="focus:outline-none rounded border w-full p-2"
              />
            </div>
            <div className="mt-5">
              <label className="font-semibold text-lg" htmlFor="">
                Your Message <sup>*</sup>
              </label>{" "}
              <br />
              <textarea
                name=""
                className="focus:outline-none h-36 rounded border w-full p-2"
                cols="40"
                id=""
              ></textarea>
            </div>
            <button className="bg-[#0088cc] text-white py-3 rounded hover:bg-[#0088cc67] mt-4 px-4 text-sm">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="w-2/4 pl-5">
          <h1 className="text-lg ">Our Office</h1>
          <p className="flex items-center mt-3">
            <span className="h-7 w-7 rounded-full border flex justify-center items-center">
              <i className="fa-light fa-location-dot"></i>
            </span>
            <span className="font-semibold mx-2">Address: </span>
            1234 Street Name, City Name, United States
          </p>
          <p className="flex items-center mt-3">
            <span className="h-7 w-7 rounded-full border flex justify-center items-center">
              <i className="fa-duotone fa-solid fa-phone-flip"></i>
            </span>
            <span className="font-semibold mx-2">Phone: </span>
            (123) 456-789
          </p>
          <p className="flex items-center mt-3">
            <span className="h-7 w-7 rounded-full border flex justify-center items-center">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <span className="font-semibold mx-2">Email: </span>
            mail@example.com
          </p>
          <div className="mt-10">
            <h1 className="text-lg">Business Hours</h1>
            <p className="flex items-center gap-3 mt-3">
              <span>
                <i className="fa-light fa-clock"></i>
              </span>{" "}
              Monday - Friday 9am to 5pm
            </p>
            <p className="flex items-center gap-3 mt-3">
              <span>
                <i className="fa-light fa-clock"></i>
              </span>{" "}
              Saturday - 9am to 2pm
            </p>
            <p className="flex items-center gap-3 mt-3">
              <span>
                <i className="fa-light fa-clock"></i>
              </span>{" "}
              Sunday - Closed
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-lg">Get in touch</h1>
            <p className="mt-5 w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget leo at velit imperdiet varius. In eu ipsum vitae velit congue
              iaculis vitae at risus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f7f7] py-20 text-center flex gap-10 justify-center">
        <p className="text-2xl">
          Porto is <span className="font-bold">everything</span> you need to
          create an <span className="font-bold">awesome</span> website! <br />{" "}
          <span className="text-lg">
            The Best Selling Woocommerce Theme on ThemeForest
          </span>
        </p>
        <button className="bg-black rounded text-white block text-lg px-6 py-0">
          Get Started Now
        </button>
      </div>
    </>
  );
};

export default Contact;
