import React from "react";
import "./index.css";

import Anchors from "../Anchors";

import Home from "./Images/home2.svg";
import Hands from "./Images/hands.svg";
import Listings from "./Images/listings.svg";
import PodcastsImg from "./Images/podcasts.svg";
import Videos from "./Images/videos.svg";
import Tags from "./Images/tags.svg";

class LeftSideSideNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="col-2 menu-icons">
          <Anchors className="" imgSrc={Home} text="Home" />
          <Anchors className="" imgSrc={Hands} text="Sign In/Up" />
          <Anchors className="" imgSrc={Listings} text="Listings" />
          <Anchors className="" imgSrc={PodcastsImg} text="Podcasts" />
          <Anchors className="" imgSrc={Videos} text="Videos" />

          <Anchors className="" imgSrc={Tags} text="Tags" />
        </ul>

    
      </React.Fragment>
    );
  }
}

export default LeftSideSideNav;
