import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { RiExchangeCnyFill } from "react-icons/ri";
import logo from "shared/assets/images/tali--logo.svg";

const Header = ({ menu, actions }) => {
  return (
    <>
      <header className="header__area">
        <div className="container">
          <div className="row">
            <div className="header__area--left">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              {menu.map((item) => (
                <ul className="header__area--left--menu" key={item.id}>
                  <li>
                    <Link to={item.to}>
                      <RiExchangeCnyFill />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                </ul>
              ))}
            </div>

            <div className="header__area--right">
              {/* {actions.map(({ Widget, id }) => (
                <Fragment key={id}>
                  <Widget />
                  <div className="log" />
                </Fragment>
              ))} */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
