import React, { useState } from "react";
import renderHTML from 'react-render-html';

const ReadMoreReadLess = ({ text, limit }) => {
//   const text = children;
  const [isReadMoreShown, setReadMoreShown] = useState(true);
  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

  console.log({text})
  return (
    <div className="read-more-read-less">
      {isReadMoreShown ?  renderHTML(text.slice(0, limit)) : renderHTML(text) }
      <div className="read-more"><button className ="read-more-read-less-button"onClick={toggleBtn}>
        {isReadMoreShown ? "Read more" : "Read less"}
      </button></div>
    </div>
  );
};

export default ReadMoreReadLess;
