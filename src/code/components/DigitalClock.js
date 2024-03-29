import React, { useEffect, useState } from 'react';

function DigitalClock() {

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalKey = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(intervalKey);
  });

  const time = now.toLocaleTimeString().split(":")
  const secondsAmPm = time[2].split(" ");

  return (
    <div className='row'>
      <div className='col-7 text-end p-1'>
        <span className='title'>{time[0]}:{time[1]}</span>
      </div>
      <div className='col m-auto'>
        <div className='row'>
          <div className='col p-0'>
            <span className='h1' style={{ lineHeight: 1 }}>{secondsAmPm[0]}</span>
          </div>
        </div>
        <div className='row'>
          <div className='col p-0'>
            <span className='h2'>{secondsAmPm[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalClock;
