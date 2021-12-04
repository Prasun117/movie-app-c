import React from "react";
import {
  AppStoreIcon,
  FacebookIcon,
  InstagramIcon,
  PlayStoreIcon,
  WindowsIcon,
  TwitterIcon
} from "./IconComponents";
export const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-links">
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="#" className="footer-link-item">
              Home
            </a>
          </li>
          <li className="footer-list-divider">|</li>
          <li className="footer-list-item">
            <a href="#" className="footer-link-item">
              Terms and Conditions
            </a>
          </li>
          <li className="footer-list-divider">|</li>
          <li className="footer-list-item">
            <a href="#" className="footer-link-item">
              Privacy Policy
            </a>
          </li>
          <li className="footer-list-divider">|</li>
          <li className="footer-list-item">
            <a href="#" className="footer-link-item">
              Collection Statement
            </a>
          </li>
          <li className="footer-list-divider">|</li>
          <li className="footer-list-item">
            <a href="#" className="footer-link-item">
              Help
            </a>
          </li>
          <li className="footer-list-divider">|</li>
          <li className="footer-list-item">
            <a href="#" className="footer-link-item">
              Manage Account
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copy-right">
        <span className="copy-right-content">
          copyright &#169; 2016 Demo streaming. All Rights Reserved.
        </span>
      </div>
      <div className="footer-icons">
        <div className="social-media">
          <ul className="social-media-list">
            <li className="social-media-item">
              <FacebookIcon />
            </li>
            <li className="social-media-item">
              <InstagramIcon />
            </li>
            <li className="social-media-item">
              <TwitterIcon />
            </li>
          </ul>
        </div>
        <div className="playstores">
          <ul className="playstores-links">
            <li className="playstore-item">
              <AppStoreIcon />
            </li>
            <li className="playstore-item">
              <PlayStoreIcon />
            </li>
            <li className="playstore-item">
              <WindowsIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
