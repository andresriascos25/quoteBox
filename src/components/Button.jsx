import React from 'react';

const Button = ({random, color}) => {
  return (
    <div >
      <button className='button' style={{backgroundColor:color}} onClick={random}> &#62; </button>
    </div>
  );
};

export default Button;