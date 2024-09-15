import Breackcam from "../../components/Breackcam/Breackcam";
import Slider from "react-slick";
import { testimonial } from "../../Data/Data";
import Pagehalmet from "../../components/Pagehalmet/Pagehalmet";

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <Breackcam title="About Us" link="/about" />
      <div className="container mx-auto py-10">
      <Pagehalmet title="About Us"/>
        <div className="text-center">
          <h1 className="text-4xl">
            We are Porto, We{" "}
            <span className="bg-[#0088cc]  text-white py-2 px-3 mr-1">
              {" "}
              Create{" "}
            </span>
            BuildDevelop Solutions
          </h1>
          <p className="font-light w-3/5 mt-5 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            elementum, nulla vel pellentesque consequat, ante nulla hendrerit
            arcu, ac tincidunt mauris lacus sed leo.
          </p>
        </div>
        <div className="flex py-5 mt-3 ">
          <div>
            <h1 className="text-xl">OUR MISSION</h1>
            <p className="mt-4 w-4/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              elementum, nulla vel pellentesque consequat, ante nulla hendrerit
              arcu.
            </p>
          </div>
          <div>
            <h1 className="text-xl">OUR VISION</h1>
            <p className="mt-4 w-4/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              elementum, nulla vel pellentesque consequat, ante nulla hendrerit
              arcu.
            </p>
          </div>
          <div>
            <h1 className="text-xl">WHY US</h1>
            <p className="mt-4 w-4/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              elementum, nulla vel pellentesque consequat, ante nulla hendrerit
              arcu.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0088cc] text-white py-10">
        <div className="container mx-auto">
          <div className="flex justify-evenly">
            <div>
              <p className="text-xl">
                <i className="fa-light fa-user"></i>
              </p>
              <h1 className="text-4xl">30000+</h1>
              <p className="font-semibold">Happy Clients</p>
            </div>
            <div>
              <p className="text-xl">
                <i className="fa-thin fa-ribbon"></i>
              </p>
              <h1 className="text-4xl">15</h1>
              <p className="font-semibold">Years In Business</p>
            </div>
            <div>
              <p className="text-xl">
                <i className="fa-solid fa-chart-line-up"></i>
              </p>
              <h1 className="text-4xl">178</h1>
              <p className="font-semibold">High Score</p>
            </div>
            <div>
              <p className="text-xl">
                <i className="fa-regular fa-mug-hot"></i>
              </p>
              <h1 className="text-4xl">352</h1>
              <p className="font-semibold">Cups of Coffee</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] h-[510px] flex items-center py-9">
        <div className="container mx-auto flex items-center">
          <div className="w-2/4">
            <h1 className="text-xl">Who We Are</h1>
            <p className="text-lg font-light w-5/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit massa
              enim. Nullam id varius nunc.
            </p>
            <p className="text-lg font-light w-5/6 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc. Vivamus bibendum magna
              ex, et faucibus lacus venenatis eget
            </p>
          </div>
          <div className="w-2/4 relative">
            <img
              className=""
              src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/generic-corporate-3-1.jpg"
              alt=""
            />
            <img
              className="absolute top-[-130px] left-[108px] z-10"
              src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/generic-corporate-3-2.jpg"
              alt=""
            />
            <img
              className="absolute top-[-1rem] left-52 z-20"
              src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/generic-corporate-3-3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 flex gap-4">
        <div className="w-2/6">
          <div className="slider-container">
            <Slider {...settings}>
              {testimonial.map((item) => {
                return (
                  <div key={item} className="flex">
                    <div className="flex mt-2 gap-1 flex-col items-start">
                      <div className="">
                        <img
                          className="object-cover mt-5 w-36 h-36 "
                          src={item.photp}
                          alt=""
                        />
                      </div>
                      <div>
                        <h1 className="p-0 h-10 m-0">{item.name}</h1>
                        <p className="p-0 m-0 font-light ">{item.skill}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-4/6">
          <h1 className="text-2xl">Meet Our Team</h1>
          <p className="text-lg font-light w-5/6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit massa enim.
            Nullam id varius nunc.
          </p>
          <p className="text-lg font-light w-5/6 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            blandit massa enim. Nullam id varius nunc. Vivamus bibendum magna
            ex, et faucibus lacus venenatis eget
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
