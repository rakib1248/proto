import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Home.css";
import "rsuite/dist/rsuite.css";
import Minislide from "../../components/Minislide/Minislide";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import { Panel, PanelGroup } from "rsuite";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Blogs, feature1, feature2, slider, testimonial } from "../../Data/Data";
import Pagehalmet from "../../components/Pagehalmet/Pagehalmet";

const Home = () => {
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
  const settingss = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="h-[670px]">
        <Pagehalmet title="Home Page"/>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slider.map((item) => {
            return (
              <div key={item}>
                <SwiperSlide>
                  <div
                    className="flex flex-col justify-center items-center text-white"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <h1 className="text-2xl font-semibold">{item.title}</h1>
                    <h2 className="text-6xl py-1">{item.subtitle}</h2>
                    <p className="font-light w-1/3 mx-auto">{item.pera}</p>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
      <div className="bg-[#0088cc] py-12">
        <div className=" container mx-auto flex justify-between items-center text-white">
          <div>
            <h1 className="text-2xl">
              The fastest way to grow your business with the leader
              <span className="font-thin"> inTechnology</span>
            </h1>
            <p className="font-light">
              Check out our options and features included.
            </p>
          </div>
          <div className="flex items-center">
            <button className="bg-[#212529] text-lg py-2 px-4 rounded hover:bg-slate-700">
              Get Started Now
            </button>
            <span className="ml-2 font-semibold">or </span>
            <p className="font-bold ml-1"> learn more.</p>
          </div>
        </div>
      </div>
      {/* Feature section */}
      <div className="container mx-auto py-12 border-b">
        <div className="flex">
          <div className="w-2/3">
            <h1 className="text-3xl">Our Features</h1>
            <div className="flex gap-2">
              <div className="w-1/2">
                {feature1.map((item) => {
                  return (
                    <div key={item} className="flex mt-6">
                      <div className="text-[#0088cc] text-3xl w-12 ">
                        <i className={item.icone}></i>
                      </div>
                      <div>
                        <h1 className="text-xl">{item.title}</h1>
                        <p className="font-light mt-1 w-4/5">{item.pera}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-1/2">
                {feature2.map((item) => {
                  return (
                    <div key={item} className="flex mt-6">
                      <div className="text-[#0088cc] text-3xl w-12 ">
                        <i className={item.icone}></i>
                      </div>
                      <div>
                        <h1 className="text-xl">{item.title}</h1>
                        <p className="font-light mt-1 w-4/5">{item.pera}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div>
              <h1 className="text-2xl mb-3">and more...</h1>
              <PanelGroup accordion defaultActiveKey={1}>
                <Panel
                  header={
                    <>
                      <div className="flex items-center gap-3 pl-4 ">
                        <i className="fa-thin fa-gem text-black"></i>
                        <h1>Creative Websites</h1>
                      </div>
                    </>
                  }
                  defaultActiveKey
                  eventKey={1}
                >
                  {/* <Placeholder.Paragraph /> */}
                  <div className="mt-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus blanorem ipsum dolor sit amet, consecte.
                    </p>
                    <p className="my-5">Adipiscing elit phasellus blanit ma…</p>

                    <li className="text-[#999] px-3 list-none">
                      <i className="fa-solid fa-angle-right mr-1 text-[9px] "></i>
                      <a
                        className="hover:ml-1 transition-all   inline-block"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </div>
                </Panel>
                <Panel
                  header={
                    <>
                      <div className="flex items-center gap-3 pl-4 ">
                        <i className="fa-light fa-comment text-black"></i>
                        <h1>Contact Forms</h1>
                      </div>
                    </>
                  }
                  eventKey={2}
                >
                  {/* <Placeholder.Paragraph /> */}
                  <div className="mt-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus blanorem ipsum dolor sit amet, consecte.
                    </p>
                    <p className="my-5">Adipiscing elit phasellus blanit ma…</p>

                    <li className="text-[#999] px-3 list-none">
                      <i className="fa-solid fa-angle-right mr-1 text-[9px] "></i>
                      <a
                        className="hover:ml-1 transition-all   inline-block"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </div>
                </Panel>
                <Panel
                  header={
                    <>
                      <div className="flex items-center gap-3 pl-4 ">
                        <i className="fa-regular fa-grid-2 text-black"></i>
                        <h1>Portfolio Pages</h1>
                      </div>
                    </>
                  }
                  eventKey={3}
                >
                  {/* <Placeholder.Paragraph /> */}
                  <div className="mt-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus blanorem ipsum dolor sit amet, consecte.
                    </p>
                    <p className="my-5">Adipiscing elit phasellus blanit ma…</p>

                    <li className="text-[#999] px-3 list-none">
                      <i className="fa-solid fa-angle-right mr-1 text-[9px] "></i>
                      <a
                        className="hover:ml-1 transition-all   inline-block"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </div>
                </Panel>

                {/* <Panel header="Panel 2" eventKey={2}>
                  <Placeholder.Paragraph />
                </Panel>
                <Panel header="Panel 3" eventKey={3}>
                  <Placeholder.Paragraph />
                </Panel> */}
              </PanelGroup>
            </div>
          </div>
        </div>
      </div>

      {/* carosel section */}
      <div className="container mx-auto py-10">
        <h1 className="text-center text-3xl">
          We're not the only ones happy
          <span className="bg-[#0088cc] mx-3 text-white py-2 px-3">
            {" "}
            excited{" "}
          </span>{" "}
          about Porto WordPress Theme...
        </h1>
        <p className="text-center text-[#0088cc] mt-5 text-xl">
          20,000 customers in 100 countries use Porto Template. Meet our
          customers.
        </p>

        <div className=" mt-10 h-14">
          <Minislide />
        </div>
      </div>
      <div
        className="container mx-auto h-[515px]"
        style={{
          backgroundImage: `url('https://www.portotheme.com/wordpress/porto/classic-original/wp-content/themes/porto/images/map.png')`,
          backgroundSize: "contant", // Optional: scales the image to cover the entire div
          backgroundPosition: "center",
        }}
      ></div>
      <div className="bgcolor py-11">
        <div className="flex container gap-3 mx-auto">
          <div className="w-[60%]">
            <h1 className="text-3xl mb-7">Latest Posts</h1>

            <div>
              <div className="slider-container">
                <Slider {...settings}>
                  {Blogs.map((item, index) => {
                    return (
                      <div key={item} className="flex">
                        <div className="flex gap-3">
                          <div className="w-16 text-center">
                            <p className="bg-white  py-3">{index + 10}</p>
                            <p className="bg-[#0088cc] m-0 py-1 text-white">
                              June
                            </p>
                          </div>

                          <div className="w-[80%] ">
                            <h1 className="text-xl mb-5 w-[90%]">
                              {item.title}
                            </h1>
                            <p className="w-[90%] font-light">{item.pera}</p>
                            <Link to={`/blog/${item.id}`} className="inline-block mt-3">Read More ...</Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <h1 className="text-3xl mb-7">What Client's Say</h1>

            <div>
              <div className="slider-container">
                <Slider {...settingss}>
                  {testimonial.map((item) => {
                    return (
                      <div key={item} className="flex">
                        <div className="testimonial relative flex gap-3 bg-[#0088cc] pl-3 py-10 text-white">
                          <div className="w-16 text-center text-4xl">
                            <i className="fa-regular fa-quote-left"></i>
                          </div>

                          <div className="w-[90%] ">
                            <p className="w-[90%] font-light text-lg">
                              {item.des}
                            </p>
                          </div>
                        </div>

                        <div className="flex mt-2 gap-3 items-start">
                          <div className="">
                            <img
                              className="object-cover mt-5 w-10 h-10 rounded-full"
                              src={item.photp}
                              alt=""
                            />
                          </div>
                          <div>
                            <h1 className="p-0 h-10 m-0">{item.name}</h1>
                            <p className="p-0 m-0 font-semibold">
                              {item.skill}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
