import { Link } from "react-router-dom";
import { Blogs } from "../../Data/Data";
import Breackcam from "../../components/Breackcam/Breackcam";
import Pagehalmet from "../../components/Pagehalmet/Pagehalmet";

const Blog = () => {
  return (
    <>
      <Breackcam title="Blogs" link="/blog" />
      <div className="container mx-auto py-10 flex ">
      <Pagehalmet title="Blog page"/>
        <div className="w-3/4 flex gap-3 flex-wrap ">
          {Blogs.map((item) => {
            return (
              <div key={item} className="w-[48%]  mt-10">
                <Link to={`/blog/${item.id}`} className="">
                  <img
                    className="h-[306px] w-full object-cover "
                    src={item.image}
                    alt=""
                  />
                </Link>
                <h1 className="text-3xl mt-2">{item.title}</h1>
                <p className="font-light mt-2 text-lg">{item.pera}</p>
                <p className="font-light mt-3 text-lg">
                  <i className="fa-duotone fa-solid fa-calendar-days mr-2 "></i>
                  : {item.time}
                </p>
                <Link
                  to={`/blog/${item.id}`}
                  className="font-light mt-3 inline-block border py-2 px-3 rounded shadow "
                >
                  Read more
                </Link>
              </div>
            );
          })}
        </div>
        <div className="w-1/4">
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
    </>
  );
};

export default Blog;
