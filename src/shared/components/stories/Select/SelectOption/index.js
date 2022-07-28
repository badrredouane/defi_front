import React from 'react';
import { Input } from '@chakra-ui/react'
import Select, { components } from "react-select";

import { FiChevronDown } from 'react-icons/fi';


const Option = (props) => (
  <components.Option {...props} className="country-option">
    <img src={props.data.icon} alt="logo" style={{width: 24}} />
    {props.data.label}
  </components.Option>
);


const SelectOption =({data, onClick, }) => {
  const [selectedCountry, setSelectedCountry] = React.useState(data[0]);

  const handleChange = (value) => {
    setSelectedCountry(value);
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img src={selectedCountry.icon} alt="s-logo" style={{width: 24}} />
      {children}
    </components.SingleValue>
  );

  
    return(
        <div className='select--group'>
          <label>Synthetic GOLD</label>
          <div className='select--group--content'>
          {/* <Select
              value={selectedCountry}
              options={data}
              onChange={handleChange}
              className="custom--select"
              styles={{
                singleValue: (base) => ({
                  ...base,
                  display: "flex",
                  alignItems: "center",
                  justifyContent:'center',
                  backgroundColor: 'transparent'
                })
              }}
              components={{
                Option,
                SingleValue
              }}
            /> */}
            <div className='select' onClick={onClick} >
              <div className='left'>
              <img src="https://raw.githubusercontent.com/Synthetixio/synthetix-assets/master/synths/png/sUSD.png" alt='' />
                <span>DOLLAR</span>
              </div>
              <FiChevronDown />
            </div>
            <div className='balance'>
              <span>Balance</span>
              <span>-</span>
            </div>
          </div>
        </div>
    )
}

export default SelectOption;