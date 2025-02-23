import React, { useEffect, useRef } from 'react';
import fitty from 'fitty';
import './Body.css';
import { folors } from "../data/data";

const Body = () => {
  const { fontsAndColors, firstRow, secondRow, thirdRow, randLorem } = folors;

  // Refs for each row type
  const firstRowRefs = useRef([]);
  const secondRowRefs = useRef([]);
  const thirdRowRefs = useRef([]);
  const randLoremRefs = useRef([]);

  useEffect(() => {
    // Apply fitty to each set of text elements
    firstRowRefs.current.forEach(el => fitty(el, { maxSize: 200 }));
    secondRowRefs.current.forEach(el => fitty(el, { maxSize: 150 }));
    thirdRowRefs.current.forEach(el => fitty(el, { maxSize: 100 }));
    randLoremRefs.current.forEach(el => fitty(el, { maxSize: 50 }));
  }, []);

  return (
    <section className='folors' id='folors'>
      <h2>{secondRow}</h2>
      <h3>{thirdRow}</h3>
      <p>{randLorem}</p>
      <div className='container-grid'>
        {fontsAndColors.map((folor, index) => (
          <article className='folor-card' key={index}>
            <h1 
              className='firstRow' 
              ref={el => firstRowRefs.current[index] = el}
              style={{ fontFamily: folor.fontName, fontStyle: folor.fontStyle }}
            >
              {folor.firstRow}
            </h1>
            <h2 
              className='secondRow' 
              ref={el => secondRowRefs.current[index] = el}
              style={{ fontFamily: folor.fontName, fontStyle: folor.fontStyle }}
            >
              {folor.secondRow}
            </h2>
            <h3 
              className='thirdRow' 
              ref={el => thirdRowRefs.current[index] = el}
              style={{ fontFamily: folor.fontName, fontStyle: folor.fontStyle }}
            >
              {folor.thirdRow}
            </h3>
            <p
              className='randLorem'
              ref={el => randLoremRefs.current[index] = el}
              style={{ fontFamily: folor.fontName, fontStyle: folor.fontStyle }}
            >
               {folor.randLorem} 
            </p>
            {/* Bottom Info Section */}
            <div className="bottom-info">
              <p className="font-name">Font: {folor.fontName}</p>
              <p className="font-style">Style: {folor.fontStyle}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Body;