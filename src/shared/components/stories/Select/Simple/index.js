import React from 'react';

const MODE = ['button','link']

const Button =({mode,link,title}) => {
  const MODE_BUTTON = MODE.includes(mode) ? mode : MODE[1];
  
    return(
        <>
        simple
        </>
    )
}

export default Button;