import React, { useState } from 'react';
import './Body.css';
import { colorsCollection } from "../data/data";

const Colors = () => {
  const { colors } = colorsCollection;

  // State to track the copied color
  const [copiedColor, setCopiedColor] = useState(null);

  // Function to handle copying color to clipboard
  const handleCopyToClipboard = (colorCode) => {
    navigator.clipboard.writeText(colorCode).then(() => {
      setCopiedColor(colorCode); // Store the copied color code to show the message
      setTimeout(() => setCopiedColor(null), 2000); // Reset after 2 seconds
    });
  };

  return (
    <section className='colors' id='colors'>
      <div className='container-grid'>
        {colors.map((colorSet, index) => (
          <article className='color-card' key={index}>
            {/* Color Blocks */}
            <div className="color-box" style={{ backgroundColor: colorSet.color1 }}>
              <div 
                className="color-code" 
                onClick={() => handleCopyToClipboard(colorSet.color1)}
              >
                {copiedColor === colorSet.color1 ? "Copied!" : colorSet.color1}
              </div>
            </div>
            <div className="color-box" style={{ backgroundColor: colorSet.color2 }}>
              <div 
                className="color-code" 
                onClick={() => handleCopyToClipboard(colorSet.color2)}
              >
                {copiedColor === colorSet.color2 ? "Copied!" : colorSet.color2}
              </div>
            </div>
            <div className="color-box" style={{ backgroundColor: colorSet.color3 }}>
              <div 
                className="color-code" 
                onClick={() => handleCopyToClipboard(colorSet.color3)}
              >
                {copiedColor === colorSet.color3 ? "Copied!" : colorSet.color3}
              </div>
            </div>
            <div className="color-box" style={{ backgroundColor: colorSet.color4 }}>
              <div 
                className="color-code" 
                onClick={() => handleCopyToClipboard(colorSet.color4)}
              >
                {copiedColor === colorSet.color4 ? "Copied!" : colorSet.color4}
              </div>
            </div>
            <div className="color-box" style={{ backgroundColor: colorSet.color5 }}>
              <div 
                className="color-code" 
                onClick={() => handleCopyToClipboard(colorSet.color5)}
              >
                {copiedColor === colorSet.color5 ? "Copied!" : colorSet.color5}
              </div>
            </div>

            {/* Info Section */}
            <div className="bottom-info">
              <p className="color-name">{colorSet.name}</p>
              
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Colors;
