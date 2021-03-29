import React from "react";
import AnimeHomepage from "../components/anime-homepage";
import SideBar from "../components/side-bar";

const Index = () => {

  return (
    <>
      <div className="flex gap-48">
        <SideBar />
        <AnimeHomepage />
      </div>
    </>
  )
};

export default Index;