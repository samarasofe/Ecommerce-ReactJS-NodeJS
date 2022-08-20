import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerElevenSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-8 col-md-8">
      <div
        className={`single-banner-2 ${
          spaceBottomClass ? spaceBottomClass : ""
        } ${data.textAlign === "right" ? "align_right" : ""}`}
      >
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
      </div>
    </div>
  );
};

BannerElevenSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerElevenSingle;
