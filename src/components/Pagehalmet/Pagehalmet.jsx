import { Helmet } from "react-helmet"

const Pagehalmet = ( props) => {
  return <>
  <Helmet>
    <title>{props.title}</title>
  </Helmet>
  </>
}

export default Pagehalmet