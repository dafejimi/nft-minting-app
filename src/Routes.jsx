import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../src/pages/NotFound";
import MintNFT from "../src/pages/MintNFT";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    { path: "/", element: <MintNFT /> },
  ]);

  return element;
};

export default ProjectRoutes;
