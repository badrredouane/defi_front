import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { COLORS } from "shared/style/colors";

const List = ({ children, type }) => {
  const typeLongShort = type ? "short" : "long";
  return (
    <div className={"list--wrap"}>
      <div className={"list--wrap--head "}>
        <span className="col-30">#ID</span>
        <span>Type</span>
        <span>Leverage</span>
        <span>Size</span>
        <span>{"Action"}</span>
      </div>
      <div className={"list--wrap--line"}>
        <div className="list--wrap--line--block col-30">
          <p>#1002 STX-PERP</p>
        </div>
        <div className="list--wrap--line--block type">
          <p className={`${typeLongShort}`}>LONG</p>
        </div>
        <div className="list--wrap--line--block">
          <p>1:1</p>
        </div>
        <div className="list--wrap--line--block size">
          <p>100</p>
        </div>
        <div className="list--wrap--line--block action">
          <MdOutlineClose size={24} color={COLORS.C_RED} />
        </div>
      </div>
    </div>
  );
};

export default List;
