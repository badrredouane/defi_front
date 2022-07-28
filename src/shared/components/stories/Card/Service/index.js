import React, { useState } from "react";

import PropTypes from "prop-types";

const Service = ({ data }) => {

  return (
    <div className={"product--card--wrap"}>
      dd
    </div>
  );
};

Service.propTypes = {
  data: PropTypes.arrayOf,
};

Service.defaultProps = {
  data: [
    {
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/ca/un65au8000fxzc/gallery/ca-crystal-uhd-au8000-un65au8000fxzc-426400554?$PD_SHOP_MAIN$",
      ref: "0001665",
      name: "Whirlpool Lave vaisselle - LV AKR2469N",
      serial: "02653GEK7T9A002",
      nFacture: "05102021",
      date: "05.10.2020",
    },
  ],
 
};

export default Service;
