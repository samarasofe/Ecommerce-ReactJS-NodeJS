import PropTypes from "prop-types";
import React from "react";

const LanguageCurrencyChanger = ({
  setCurrency,
  dispatch
}) => {

  return (
    <div className="language-currency-wrap">
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default LanguageCurrencyChanger;
