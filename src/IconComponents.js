import React from "react";
import AppStore from "./icons/app-store.svg";
import Facebook from "./icons/facebook-white.svg";
import Instagram from "./icons/instagram-white.svg";
import PlayStore from "./icons/play-store.svg";
import Windows from "./icons/windows-store.svg";
import Twitter from "./icons/twitter-white.svg";

export const AppStoreIcon = (props) => {
  return <img src={AppStore} alt="app-store" />;
};

export const FacebookIcon = (props) => {
  return <img src={Facebook} width={30} height={30} alt="facebook" />;
};
export const InstagramIcon = (props) => {
  return <img src={Instagram} width={30} height={30} alt="instagram" />;
};
export const PlayStoreIcon = (props) => {
  return <img src={PlayStore} alt="playstore" />;
};
export const WindowsIcon = (props) => {
  return <img src={Windows} width={100} height={50} alt="windows-store" />;
};
export const TwitterIcon = (props) => {
  return <img src={Twitter} width={30} height={30} alt="twitter" />;
};
