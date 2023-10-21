import React, { useState, useEffect } from 'react';
import './Main.css';

function Main() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSec(prevSec => prevSec + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const h = parseInt(sec / 3600);
  const m = parseInt((sec % 3600) / 60);
  const s = parseInt(sec % 60);
  const timeString = `${h.toString().padStart(2, '0')}H : ${m.toString().padStart(2, '0')}M : ${s.toString().padStart(2, '0')}S`;

  return (
    <>
      <div className='panelone'>
        <p> Sale End In :<br/> </p>
        <p className='time' id="main">{timeString}</p>
      </div>
    </>
  );
}

export default Main;
