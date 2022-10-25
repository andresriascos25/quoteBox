import React from 'react';

const Button = ({aleatorio, color}) => {
  return (
    <div >
      <button className='button' style={{backgroundColor:color}} onClick={aleatorio}> &#62; </button>
    </div>
  );
};

export default Button;