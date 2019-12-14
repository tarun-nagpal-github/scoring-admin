import React from "react";
import FooterWrapper from "./footer.style";
import Button from "components/button/Button";

const Footer = props => {
  return (
    <FooterWrapper {...props}>
      <div className="footerBack flex-x align-center">
        <div className="flex-1 fs-13 bold-text">
          © 2019 Hexesis, All rights reserved.
        </div>
        <div>
          <Button
            className="c-btn c-info ma-5 footer-purchase-button"
            onClick={() =>
              window.open(
                "https://themeforest.net/item/roe-reactjs-admin-dashboard-template/23764691",
                "_blank"
              )
            }
          >
            <span className="fs-14 demi-bold-text">Purchase ROE</span>
          </Button>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
