import React from "react";
import { RiHeartFill, RiGithubFill } from "react-icons/ri";
import "./Footer.css";

const Footer = () => (
    <div className="footer">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/hydenz">
            Made with <RiHeartFill color="#fff" /> by <RiGithubFill color="#fff"/> hydenz
        </a>
    </div>
);

export default Footer;