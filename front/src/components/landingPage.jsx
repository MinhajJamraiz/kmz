import React from "react";
import "./../styles/landingPage.css";
import airblueImage from "./../images/airblue.svg";
import flyEmiratesImage from "./../images/flyemirates.svg";
import piaImage from "./../images/pia.svg";
import saudiairlineImage from "./../images/saudi.svg";
import packageImage from "./../images/image1.jpg";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="introBox">
        <div className="introBox__header">
          <div className="introBox__header-title">KARWAN I AL MUEZ</div>
          <div className="introBox__header-list">
            <button className="introBox__header__listItem">Item 1</button>
            <button className="introBox__header__listItem">Item 2</button>
            <button className="introBox__header__listItem">Item 3</button>
            <button className="introBox__header__listItem">Item 4</button>
            <button className="introBox__header__listItem">Item 5</button>
          </div>
          <div className="introBox__header__login">
            <button className="introBox__header__loginButton">Login</button>
          </div>
        </div>
        <div className="introBox__content">
          <h1 className="introBox__content__heading ">
            Economy Hajj and Umrah Package
          </h1>
          <p className="introBox__content__text ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque
            error, laudantium sed culpa assumenda deserunt fugiat non
            reprehenderit molestias ratione beatae deleniti. Pariatur,
            accusamus!
          </p>
          <button className="introBox__content__button text--bold text--center">
            Get a Package Price
          </button>
        </div>
      </div>
      <div className="airlines">
        <div className="airline">
          <img src={piaImage} alt="PIA" />
        </div>
        <div className="airline">
          <img src={airblueImage} alt="AirBlue" />
        </div>
        <div className="airline">
          <img src={saudiairlineImage} alt="Saudi Airline" />
        </div>
        <div className="airline">
          <img src={flyEmiratesImage} alt="Fly Emirates" />
        </div>
      </div>

      <div className="packages__heading text--center">
        <h2 className="packages__heading-title">
          Hajj and Umrah Special Offers
        </h2>
        <p className="packages__heading-text">
          Don't miss out special offers from us.
        </p>
      </div>
      <div className="packages">
        <div className="packages__package">
          <div className="package__head">
            <img
              className="package__image"
              src={packageImage}
              alt="Package no 1"
            />
          </div>
          <div className="package__body">
            <div className="package__type">Economy</div>
            <div className="package__name">Hajj Package </div>
            <div className="package__price">
              <p className="package__price--blue">1,000,000 PKR </p>/ person
            </div>
            <div className="package__duration"> Package Duration (30 days)</div>
            <button disabled className="package__details-button">
              Details
            </button>
          </div>
        </div>
        <div className="packages__package">
          <div className="package__head">
            <img
              className="package__image"
              src={packageImage}
              alt="Package no 1"
            />
          </div>
          <div className="package__body">
            <div className="package__type">Economy</div>
            <div className="package__name">Hajj Package </div>
            <div className="package__price">
              <p className="package__price--blue">1,000,000 PKR </p>/ person
            </div>
            <div className="package__duration"> Package Duration (30 days)</div>
            <button disabled className="package__details-button">
              Details
            </button>
          </div>
        </div>
        <div className="packages__package">
          <div className="package__head">
            <img
              className="package__image"
              src={packageImage}
              alt="Package no 1"
            />
          </div>
          <div className="package__body">
            <div className="package__type">Economy</div>
            <div className="package__name">Hajj Package </div>
            <div className="package__price">
              <p className="package__price--blue">1,000,000 PKR </p>/ person
            </div>
            <div className="package__duration"> Package Duration (30 days)</div>
            <button disabled className="package__details-button">
              Details
            </button>
          </div>
        </div>
        <div className="packages__package">
          <div className="package__head">
            <img
              className="package__image"
              src={packageImage}
              alt="Package no 1"
            />
          </div>
          <div className="package__body">
            <div className="package__type">Economy</div>
            <div className="package__name">Hajj Package </div>
            <div className="package__price">
              <p className="package__price--blue">1,000,000 PKR </p>/ person
            </div>
            <div className="package__duration"> Package Duration (30 days)</div>
            <button disabled className="package__details-button">
              Details
            </button>
          </div>
        </div>
        <div className="packages__package">
          <div className="package__head">
            <img
              className="package__image"
              src={packageImage}
              alt="Package no 1"
            />
          </div>
          <div className="package__body">
            <div className="package__type">Economy</div>
            <div className="package__name">Hajj Package </div>
            <div className="package__price">
              <p className="package__price--blue">1,000,000 PKR </p>/ person
            </div>
            <div className="package__duration"> Package Duration (30 days)</div>
            <button disabled className="package__details-button">
              Details
            </button>
          </div>
        </div>
        <div className="packages__package">
          <div className="package__head">
            <img
              className="package__image"
              src={packageImage}
              alt="Package no 1"
            />
          </div>
          <div className="package__body">
            <div className="package__type">Economy</div>
            <div className="package__name">Hajj Package </div>
            <div className="package__price">
              <p className="package__price--blue">1,000,000 PKR </p>/ person
            </div>
            <div className="package__duration"> Package Duration (30 days)</div>
            <button disabled className="package__details-button">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
