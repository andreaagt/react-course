import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return ( 
  <>
    {/*if(){console.log('hello world')}*/}
    {/*if(){}*/}
    <h1>{text || 'john doe'}</h1>
    <button className='btn' onClick={() => setIsError(!isError)
    } >
      togle error
    </button>
    {isError && <h1>Error...</h1>}
    {isError ? (
      <p>There is an error...</p>
    ): ( 
      <div>
        <h2>there is no error</h2>
      </div> 
    )}
  </>
  );
};

export default ShortCircuit;
