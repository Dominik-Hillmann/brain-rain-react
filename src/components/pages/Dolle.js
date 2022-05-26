// Libraries
import React from "react";
import Client from "shopify-buy";
import Helmet from "react-helmet";
// Components
import Navbar from "../Navbar";
import StandardMainWrapper from "../StandardMainWrapper";
import CustomFooter from "../CustomFooter";
import { Translation } from "react-i18next";
// Stylesheets
import "../../css/Dolle.css";
// Resources
import photoBook from "../../img/photo-book.jpg";
import shopifyConfig from "../../config/shopify.json";
import { ChevronCompactRight } from "react-bootstrap-icons";
import { ChevronCompactLeft } from "react-bootstrap-icons";

export default class Dolle extends React.Component {

  constructor(props) {

    super(props);

    this.client = Client.buildClient({
      domain: shopifyConfig.domain,
      storefrontAccessToken: shopifyConfig.storefrontToken
    });

    this.state = {
      amountPhotoBooks: 1,
      amountCalendars: 1,
      checkout: null
    };
  }


  componentDidMount() {

    this.client.checkout.create().then((checkout) => {
      this.setState((prevState) => {
        return {
          amountPhotoBooks: prevState.amountPhotoBooks,
          amountCalendars: prevState.amountCalendars,
          checkout: checkout
        };
      });
    });
  }

  
  handleDecrementPhotoBooks() {

    this.setState((prevState) => {
      return {
        amountPhotoBooks: prevState.amountPhotoBooks <= 1 ? 1 : prevState.amountPhotoBooks - 1,
        amountCalendars: prevState.amountCalendars
      };
    });
  }


  handleIncrementPhotoBooks() {

    this.setState((prevState) => {
      return {
        amountPhotoBooks: prevState.amountPhotoBooks + 1,
        amountCalendars: prevState.amountCalendars
      };
    });
  }


  handleBuyPhotoBook() {

    const boughtItems = [{
      variantId: "gid://shopify/ProductVariant/42839298703601",
      quantity: this.state.amountPhotoBooks
    }];

    this.client.checkout.addLineItems(this.state.checkout.id, boughtItems).then((checkout) => {

      console.log("CHECKOUT", checkout.lineItems)
      window.open(checkout.webUrl, "_blank")
    });
  }


  handleDecrementCalendars() {

    this.setState((prevState) => {
      return {
        amountPhotoBooks: prevState.amountPhotoBooks,
        amountCalendars: prevState.amountCalendars <= 1 ? 1 : prevState.amountCalendars - 1
      };
    });
  }


  handleIncrementCalendars() {

    this.setState(prevState => {
      return {
        amountPhotoBooks: prevState.amountPhotoBooks,
        amountCalendars: prevState.amountCalendars + 1
      };
    });
  }


  render() {

    return (<>
      <Helmet>
        <meta http-equiv="refresh" content="0; URL=https://brainrain.myshopify.com/" />
      </Helmet>

      <Navbar />

      <StandardMainWrapper>

        <div className="dolle-product">
          <div className="keep-left">
            <img src={photoBook} alt="People look at a book." />
          </div>

          <div className="keep-right">
            <h1>
              <Translation>{t => t('dolleshop-photobook-title')}</Translation>
            </h1>
            <p>
              <Translation>{t => t('dolleshop-photobook-text')}</Translation>
            </p>
            <h2>29,99 €</h2>

            <div className="cart-menu">
              <div className="amount-selector">
                <button onClick={() => this.handleDecrementPhotoBooks()}>
                  <ChevronCompactLeft color="white" className="arrow" size="20px" />
                </button>
                <p>{this.state.amountPhotoBooks}</p>
                <button onClick={() => this.handleIncrementPhotoBooks()}>
                  <ChevronCompactRight color="white" className="arrow" size="20px" />
                </button>
              </div>
              <button onClick={() => this.handleBuyPhotoBook()}>
                <Translation>{t => t('dolleshop-buy')}</Translation>
              </button>
            </div>
          </div>
        </div>

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