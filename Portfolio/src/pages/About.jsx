import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutCSS from "../css/About.module.css";
import data from "../Data";

// Dynamically import the profile image
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../assets/profile", false, /\.(webp|png|jpg|jpeg|gif)$/)
);

const profileImage = images.length > 0 ? images[0] : null;

function About() {
  const handleClick = () => {
    const phoneNumber = "+33683738897"; // Numéro de téléphone sans espaces
    const phoneLink = document.createElement("a");
    phoneLink.href = `tel:${phoneNumber}`;
    phoneLink.click();
  };





  return (
    <div className={AboutCSS.container}>
      <Header />
      <div className={AboutCSS.content}>
        <div className={AboutCSS.imageWrapper}>
          {profileImage && (
            <img
              src={profileImage}
              alt="Artist's Profile"
              className={AboutCSS.image}
            />
          )}
        </div>
        <div className={AboutCSS.textWrapper}>
          <h1>{data.AboutHeading}</h1>
          <p>{data.AboutTextParagraph1}</p>
          <p>{data.AboutTextParagraph2}</p>
          <button onClick={handleClick} className={AboutCSS.contactButton}>
            {data.AboutButtonText}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
