import React from 'react'

import { useState } from 'react';



function char_to_int(c) {
  switch (c.toUpperCase()) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
  }
}
function roman_to_Int(str) {
   
  if (str == null){
      return -1};
  var num = char_to_int(str.charAt(0));
  var pre, curr;

  for (var i = 1; i < str.length; i++) {
    curr = char_to_int(str.charAt(i));
    pre = char_to_int(str.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
};


function Roman(prop) {

  const [result, setResult] = useState('');

  const handleChange = event => {
    const el = document.getElementById('message');
    let decimal = roman_to_Int(el.value)
    setResult(decimal);
  };

  return (
      <>
    <div>
      <input
        type="text"
        id="message"
        name="message"
      />

      <input
        type="text"
        id="output"
        name="temp"
        value={result}
      />
    <button onClick={handleChange}>Calculate</button>


    </div>
    </>
  );

}
export default Roman;
