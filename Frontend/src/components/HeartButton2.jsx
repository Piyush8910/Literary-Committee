import React, { useState } from 'react';

export function HeartButton2({ text , link}) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setTimeout(() => {
        window.open(link, "_blank");
      }, 800);
    }
  };

  return (
    <>
      <style>
        {`
          .heart-animate {
            animation: heart .8s steps(28) 1;
            background-position: right;
          }
          @keyframes heart { 
            0% { background-position: left }
            100% { background-position: right }
          }
        `}
      </style>
      <button
        onClick={handleClick}
        className={`h-14 flex items-center gap-0 ml-8 pr-5 py-2 rounded-3xl border-2 transition-colors
          ${isLiked ? 'border-pink-200 bg-pink-100 text-black' : 'border-darkBlue bg-darkBlue text-white'}`}
      >
        <div
          className={`w-16 h-12 bg-[url('/img.png')] bg-no-repeat bg-[length:2900%] bg-left flex-shrink-0
            ${isLiked ? 'heart-animate' : ''}`}
        />
        <span className={`font-semibold text-xl transition-colors`}>
          {text}
        </span>
      </button>
    </>
  );
}