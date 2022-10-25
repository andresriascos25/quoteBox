import React from 'react';

const QuoteBox = ({phrase, author}) => {
  return (
    <div >
      <div className='container-phrase'>
      <i className="fa-solid fa-quote-left"></i>
      <h1 className='phrase'>{phrase}</h1>
      </div>
      <p className='author'>{author}</p>
    </div>
  );
};

export default QuoteBox;