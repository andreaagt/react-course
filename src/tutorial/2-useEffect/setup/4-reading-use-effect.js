import React, { useState, useEffect } from 'react';

const UseEffectWithData = () => {

const [query, setQuery] = useState('');

  const inputRef = React.createRef()

  const updateQuery = () => {
    const inputText = inputRef.current.value
    setQuery(inputText)
  }

  useEffect(() => {
    console.log(`you have updated your query to ${query}`) 
  }, [query])

  useEffect(() => {
    const a = document.getElementById("input").value;
    const inputText = inputRef.current.value
    setQuery(inputText)
    console.log(a)
  });

  return (
    <div className="App">
      <input id="input" ref={inputRef}/>
      <button onClick={updateQuery}>Click</button>
      <h4>Input Text: {query}</h4>
    </div>
  );
}

export default UseEffectWithData;
