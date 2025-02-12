import React from "react";
import { FaSnapchatGhost, FaInstagram } from "react-icons/fa"; // Import des icônes
import FooterCSS from "../css/Footer.module.css";
import data from "../Data";

function Footer() {
  return (
    <footer className={FooterCSS.footer}>
      <div className={FooterCSS.container}>
        <p>{data.FooterText}</p>
        <p style={{ marginTop: "5px", fontSize: "12px" }}>
          Designé et développé pour{" "}
          <a
            href="https://github.com/rakshixh"
            style={{ textDecoration: "none", color: "#F4A261" }}
          >
            Samy Zeroual
          </a>
        </p>
        {/* Icônes des réseaux sociaux */}
        <div className={FooterCSS.socialIcons} style={{ marginTop: "10px" }}>
          <a
            href="https://snapchat.com/t/Lv74zyy5"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "10px", color: "#FFFC00", fontSize: "24px" }}
          >
            <FaSnapchatGhost />
          </a>
          <a
            href="https://www.instagram.com/s2aa78?igsh=MWI3bWhqM21jdXZmdg=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E1306C", fontSize: "24px" }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
