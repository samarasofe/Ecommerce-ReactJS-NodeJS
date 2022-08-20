import PropTypes from "prop-types";
import React from "react";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <p><small>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://supercopo.com"
          rel="noopener noreferrer"
          target="_blank"
        >
         Super Copo Acrílicos
        </a>
        . Todos os Direitos Reservados               
        </small>
      </p>
      <p><small>Super Copo Acrilicos - CNPJ 10498304000184</small></p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string
};

export default FooterCopyright;
