import React, { useState } from 'react';
import { sculptureList } from './data';

export default function Sculpture() {
  const [index, setIndex] = useState<number>(0);
  //let index:number = 0;
  const [showMore, setShowMore] = useState<boolean>(false);

  function handleClick() {
    //setIndex(index + 1);
    alert("o clique do botão ocorreu")
	setIndex(index+1);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>

      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      {showMore &&
        <p>
        {sculpture.description}
        </p>
    }
    </>
  );
}