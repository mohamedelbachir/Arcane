import React, { FC } from "react";
import clsx from "clsx";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/icons/arcane logo.svg";
import { ReactComponent as TwitterLogo } from "./assets/icons/mdi_twitter.svg";
import { ReactComponent as InstagramLogo } from "./assets/icons/ri_instagram-fill.svg";
import { ReactComponent as YoutubeLogo } from "./assets/icons/mdi_youtube.svg";
import { ReactComponent as NetFlixLogo } from "./assets/icons/logo netflix.svg";
import Girl from "./assets/images/Jinx.png";
import "./index.css";

const App: FC = () => {
  const location = useLocation();
  return (
    <div className="w-full h-screen bg-ternary relative contain">
      <div className="max-w-[1300px] mx-auto relative h-full">
        <div className="w-full h-16 flex items-center justify-between relative z-[5]">
          <Logo width={40} height={55.99} />
          <div className="flex w-full justify-center gap-[5em]">
            <NavLink to="/" className="font-link .active:text-primary">
              HOME
            </NavLink>
            <NavLink to="/trailer" className="font-link">
              TRAILERS
            </NavLink>
          </div>
        </div>
        <div className="ml-12">
          <Outlet />
        </div>

        <div className="absolute bottom-4 left-0 w-full flex justify-between px-5 z-[5]">
          <div className="flex justify-between items-center w-[30%]">
            <div>
              Date de sortie
              <br />
              <b>6 Novembre 2021 </b>
            </div>
            <div className="flex justify-between gap-5 items-center">
              <a href="#">
                <TwitterLogo width={40} />
              </a>
              <a href="#">
                <InstagramLogo width={40} />
              </a>
              <a href="#">
                <YoutubeLogo width={40} />
              </a>
            </div>
          </div>
          <NetFlixLogo width={100} />
        </div>
      </div>
      <div className="absolute -top-[10%] z-[1] right-[-63%] w-full h-full image-shadow">
        <img
          src={Girl}
          alt="Jinx"
          className={clsx("object-contain w-full h-full image-jinx", {
            "trailer-anim": location.pathname === "/trailer",
          })}
        />
      </div>
    </div>
  );
};
export default App;
