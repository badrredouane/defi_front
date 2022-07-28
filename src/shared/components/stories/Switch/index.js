import React from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';


const Switch = () => {
    const [toggleOn, setToggleOn] = React.useState(false);
    return(
        <>
            <div className='switch--area' onClick={() => setToggleOn(!toggleOn)}>
                {toggleOn ? <FiArrowUp /> : <FiArrowDown />  }
            </div>
        </>
    )
}

export default Switch;