import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.svg'
import './Logo.css';

const Logo = () => {
  return(
      <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" style={{height: '150px', width: '150px'}}>
          <div className='pa' style={{}}>
            <img alt='logo' src={brain} style={{padding:'10px'}}/>
          </div>
        </Tilt>
      </div>
  );
}
export default Logo;