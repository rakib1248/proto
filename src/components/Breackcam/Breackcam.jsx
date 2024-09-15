import { Link } from "react-router-dom";
const Breackcam = (props) => {
  return (
    <>
      <div
        className="py-28 text-center text-white"
        style={{
          backgroundImage:
            "url('https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/page-header-about-us.jpg')",
          backgroundSize: "cover",
        }}
      >
        <p>
          <Link to="/"> Home</Link> / <Link to={props.link}> {props.title} </Link>
        </p>
        <h1 className="text-5xl">{props.title}</h1>
        <p className="font-light">The perfect choice for your next project</p>
      </div>
    </>
  );
};

export default Breackcam;
