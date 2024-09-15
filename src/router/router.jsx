import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

import Blogsingle from "../pages/Blogs/Blogsingle";
import Blog from "../pages/Blogs/Blogs";
import Team from "../pages/Team/Team";
import Teamsingle from "../pages/Team/Teamsingle";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <Blogsingle />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/team/:id",
        element: <Teamsingle />,
      },
    ],
  },
]);

export default router;
