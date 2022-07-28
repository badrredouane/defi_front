import { Input } from "antd";
import React from "react";
import PropTypes from "prop-types";

const { Search } = Input;

const SearchInput = ({ label, onSearch, ...rest }) => {
  return (
    <div className="input--search">
      <Search   {...rest} />

      {/* <Input placeholder={placeholder} {...rest} />
      <span>{label}</span> */}
    </div>
  );
};

SearchInput.propTypes = {
  label: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchInput.defaultProps = {
  label: "tSTX",
};

export default SearchInput;
