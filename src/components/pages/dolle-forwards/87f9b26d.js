// Libraries
import React from "react";
import Helmet from "react-helmet";
// Components
import Navbar from "../Navbar";
import StandardMainWrapper from "../StandardMainWrapper";
import CustomFooter from "../CustomFooter";
// Stylesheets
import "../../../css/Dolle.css";

export default class MaiForward extends React.Component {

  render() {

    return (<>
      <Helmet>
        <meta http-equiv="refresh" content="0; URL=https://apps.scrappbook.de/rJXeLe6Fq" />
      </Helmet>

      <Navbar />

      <StandardMainWrapper>
        <h1>Sie werden zu unserem Shop weitergeleitet...</h1>
      </StandardMainWrapper>

      <CustomFooter
        githubLink="https://github.com/Dominik-Hillmann"
        etsyLink="https://www.etsy.com/de/shop/BRAINRAINShop"
        instagramLink="https://www.instagram.com/charlie_fricke"
        portfolioLink="https://charliefricke.com"
      />
    </>);
  }
}