import React from "react";
import { ReactComponent as PlayLogo } from "./../assets/icons/octicon_play-16.svg";
import { ReactComponent as NetFlixLogo } from "./../assets/icons/logo netflix.svg";
type Props = {
  img: string;
  title: string;
  description: string;
};
function Thumbmail({ img, title, description }: Props) {
  return (
    <div className="relative hover:cursor-pointer group w-1/2">
      <h3 className="font-link">{title}</h3>
      <img
        src={img}
        alt={description}
        className="w-full h-auto object-cover group-hover:border-[3px] group-hover:border-primary group-hover:brightness-110 transition-[filter] duration-100"
      />
      <PlayLogo className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14" />
      <h3 className="absolute bottom-2 left-5 font-link text-2xl w-1/3">
        {description}
      </h3>
      <NetFlixLogo className="w-20 absolute bottom-2 right-5" />
    </div>
  );
}

export default Thumbmail;
