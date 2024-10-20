import React from "react";
import { useRoutes } from "react-router-dom"; // Assuming you're using react-router-dom
import { paths } from "./paths";
// import Home from "@/pages/home/home";
// import Signup from "@/pages/signup/signup";
// import Aboutus from "@/pages/aboutus/aboutus";

const Home = React.lazy(() => import("@/pages/home/home"));
const Signup = React.lazy(() => import("@/pages/signup/signup"));
const Aboutus = React.lazy(() => import("@/pages/aboutus/aboutus"));

const routes = [
  {
    path: paths.root,
    element: <Home />,
  },
  {
    path: paths.signup,
    element: <Signup />,
  },
  {
    path: paths.aboutus,
    element: <Aboutus />,
  },
  { path: "*", element: <div>404</div> },
];

const Router = () => {
  return useRoutes(routes);
};

export default Router;
