import React, { useState, useEffect, useRef } from 'react';
import fitty from 'fitty';
import './Body.css';
import { folors } from "../data/data";
import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';

const Body = () => {
  const { fontsAndColors } = folors;

  // State to manage custom text input for each font card
  const [customTexts, setCustomTexts] = useState(
    fontsAndColors.map(() => ({ firstRow: '', secondRow: '', thirdRow: '', randLorem: '' , link: ''}))
  );

  // Refs for fitty to adjust font sizes dynamically
  const firstRowRefs = useRef([]);
  const secondRowRefs = useRef([]);
  const thirdRowRefs = useRef([]);
  const randLoremRefs = useRef([]);
  

  useEffect(() => {
    firstRowRefs.current.forEach(el => el && fitty(el, { maxSize: 200 }));
    secondRowRefs.current.forEach(el => el && fitty(el, { maxSize: 150 }));
    thirdRowRefs.current.forEach(el => el && fitty(el, { maxSize: 100 }));
    randLoremRefs.current.forEach(el => el && fitty(el, { maxSize: 50 }));
  }, [customTexts]);

  // Handle text change
  const handleTextChange = (index, field, value) => {
    const newCustomTexts = [...customTexts];
    newCustomTexts[index][field] = value;
    setCustomTexts(newCustomTexts);
  };

  return (
    <section className='folors' id='folors'>
      <div className='container-grid'>
        {fontsAndColors.map((folor, index) => (
          <article className='folor-card' key={index}>
            {/* First Row */}
            <h1
              className='firstRow'
              ref={el => (firstRowRefs.current[index] = el)}
              style={{ fontFamily: folor.fontName, fontStyle: folor.fontStyle }}
            >
              {customTexts[index].firstRow || folor.firstRow}
            </h1>
            

            {/* Second Row */}
            <h2
              className='secondRow'
              ref={el => (secondRowRefs.current[index] = el)}
              style={{ fontFamily: folor.fontName, fontStyle: folor.fontStyle }}
            >
              {customTexts[index].secondRow || folor.secondRow}
            </h2>
        

            {/* Third Row */}
            <h3
              className='thirdRow'
              ref={el => (thirdRowRefs.current[index] = el)}
              style={{ fontFamily: folor.fontName, fontStyle: folor.fontStyle }}
            >
              {customTexts[index].thirdRow || folor.thirdRow}
            </h3>
           

            {/* Random Lorem */}
            <p
              className='randLorem'
              ref={el => (randLoremRefs.current[index] = el)}
              style={{ fontFamily: folor.fontName, fontStyle: folor.fontStyle }}
            >
              {customTexts[index].randLorem || folor.randLorem}
            </p>
            

            {/* Bottom Info Section */}
            <div className="bottom-info">
            <a href={folor.link} title="Go to the font" target='_blank' rel="noreferrer">
                <FaExternalLinkAlt className='icon' size={18}/>
              </a>
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
