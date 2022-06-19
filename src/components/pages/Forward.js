// Libraries
import React from "react";
import Helmet from "react-helmet";
// Components
import Navbar from "../Navbar";
import StandardMainWrapper from "../StandardMainWrapper";
import CustomFooter from "../CustomFooter";
// Stylesheets
import "../../css/Dolle.css";

export default class Forward extends React.Component {

  constructor(props) {
    super(props);
  }

  getLinkContent() {

    return `0; URL=${this.props.link}`;
  }

  render() {

    return (<>
      <Helmet>
        <meta http-equiv="refresh" content={this.getLinkContent()} />
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