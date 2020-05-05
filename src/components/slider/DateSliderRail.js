import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./DateSliderRail.css"

const railOuterStyle = {
  position: "absolute",
  width: "100%",
  height: 40,
  transform: "translate(0%, -50%)",
  cursor: "pointer",
};

const railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 8,
  transform: "translate(0%, -50%)",
  borderRadius: 4,
  pointerEvents: "none",
  backgroundColor: "rgb(155,155,155)",
};

const DateSliderRail = ({ getRailProps }) => {
  return (
    <Fragment>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </Fragment>
  );
};

DateSliderRail.propTypes = {
  getRailProps: PropTypes.func.isRequired,
};

export default DateSliderRail;
