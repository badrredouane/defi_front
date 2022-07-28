import React from "react";
import { Progress as CustomProgress } from 'antd';
import { COLORS } from "shared/style/colors";

const Progress = ({ value, ...rest }) => {
  return <div className={"progress--area"}>
   <CustomProgress 
   strokeColor={COLORS.C_GREEN}
   trailColor={COLORS.c_DARK_2}
//    width={"100%"}
   percent={value} {...rest} />
  </div>;
};

export default Progress;
