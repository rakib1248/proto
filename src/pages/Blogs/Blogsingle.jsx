import { useParams } from "react-router-dom";
import Breackcam from "../../components/Breackcam/Breackcam";
import { Blogs } from "../../Data/Data";
import Pagehalmet from "../../components/Pagehalmet/Pagehalmet";

const Blogsingle = () => {
  const { id } = useParams();

  const single = Blogs.find((item) => item.id == id);

  return (
    <>
      <Breackcam title="Blogs" link="/blog" />

      <div className="flex py-10  container mx-auto gap-3">
      <Pagehalmet title={single.title}/>
        <div className="w-2/3">
          <img
            className="w-full h-[540px] object-cover"
            src={single.image}
            alt=""
          />
          <h1 className="text-4xl text-[#0080cb] mt-2">{single.title}</h1>
          <p className="font-light py-10">{single.pera}</p>
          <p className="font-light"> {single.longpera}</p>
        </div>
        <div className="w-1/3">
          <div className="w-[90%] ml-auto">
            <div className="border pl-3 flex justify-between items-center rounded">
              <input
                type="search"
                className="w-full focus:outline-none"
                placeholder="search..."
              />
              <i className="fa-light fa-magnifying-glass bg-black text-white px-4 py-3 rounded"></i>
            </div>
            <div>
              <h1> About </h1>
              <p className="font-light text-lg ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda deleniti sapiente, Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Praesentium, dignissimos odit vero
                eius consequatur impedit consectetur amet libero esse
                reprehenderit? est enim nostrum voluptatem impedit reiciendis
                nulla inventore qui!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogsingle;
