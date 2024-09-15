import Breackcam from "../../components/Breackcam/Breackcam";
import { Link } from "react-router-dom";
import { Teams } from "../../Data/Data";
import Pagehalmet from "../../components/Pagehalmet/Pagehalmet";

const Team = () => {
  return (
    <>
      <Breackcam title="Team" link="/team" />
      <div className="py-10 container mx-auto">
      <Pagehalmet title="Team page"/>
        <h1 className="text-3xl">Meet the Team</h1>
        <div className="flex mt-3 flex-wrap gap-[3%]">
          {Teams.map((item) => {
            return (
              <div key={item} className="w-[22%] mt-8">
                <div className="card w-[90%] overflow-hidden ">
                  <Link to={`/team/${item.id}`}>
                  
                  <img
                    className="transition-all hover:scale-110  "
                    src={item.photo}
                    alt=""
                  />
                  </Link>
                  <h1 className="leading-7 text-2xl mt-7">{item.name}</h1>
                  <p className="font-semibold">{item.skill}</p>
                  <p className="font-light">{item.pera}</p>
                  <div className="flex mt-5">
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
