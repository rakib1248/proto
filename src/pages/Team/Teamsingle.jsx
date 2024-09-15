import { useParams } from "react-router-dom";
import Breackcam from "../../components/Breackcam/Breackcam";
import { Teams } from "../../Data/Data";
import Pagehalmet from "../../components/Pagehalmet/Pagehalmet";

const Teamsingle = () => {
  const { id } = useParams();

  const single = Teams.find((item) => item.id == id);
  return (
    <>
      <Breackcam title="Team" link="/team" />

      <div className="container mx-auto flex justify-between gap-4 py-10">
      <Pagehalmet title={single.name}/>
        <div>
          <h1 className="text-4xl">{single.name}</h1>
          <p className="font-semibold text-[#0080cb] text-lg">{single.skill}</p>
          <p className="font-light text-xl">{single.pera}</p>
          <p className="font-light text-xl my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            laborum voluptatum veritatis eos suscipit quis reiciendis
            dignissimos, exercitationem sit quod. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati commodi quas sint nihil hic
            veritatis.
          </p>
          <hr />

          <div className="flex justify-between">
            <button className="my-10 bg-black text-white py-2 px-4 rounded">
              {" "}
              Get In Touch
            </button>
            <div className="flex items-center gap-3">
              <h1>Follow Me</h1>
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
        <div className="w-5/6">
          <img className="" src={single.photo} alt="" />
        </div>
      </div>
      <div className="bg-[#f4f4f4] py-14">
        <div className="container mx-auto flex justify-evenly">
          <div>
            <i className="fa-regular fa-tablet text-5xl ml-3 text-[#0088cc] "></i>
            <h1 className="my-5 leading-8 text-xl">Mobile Apps</h1>
            <p>
              Lorem ipsum dolor sit amet, coctetur <br /> adipiscing elit.
            </p>
          </div>
          <div>
            <i className="fa-regular fa-layer-group text-5xl ml-3 text-[#0088cc] "></i>
            <h1 className="my-5 leading-8 text-xl">Creative Websites</h1>
            <p>
              Lorem ipsum dolor sit amet, coctetur <br /> adipiscing elit.
            </p>
          </div>
          <div>
            <i className="fa-regular fa-magnifying-glass text-5xl ml-3 text-[#0088cc] "></i>
            <h1 className="my-5 leading-8 text-xl">SEO Optimization</h1>
            <p>
              Lorem ipsum dolor sit amet, coctetur <br /> adipiscing elit.
            </p>
          </div>
          <div>
            <i className="fa-light fa-desktop text-5xl ml-3 text-[#0088cc] "></i>
            <h1 className="my-5 leading-8 text-xl">Brand Solutions</h1>
            <p>
              Lorem ipsum dolor sit amet, coctetur <br /> adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamsingle;
