import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
	return (
		<div className='ma4 mt0' style={{display: 'flex'}}>
      		<Tilt className='Tilt br2 shadow-2 br-100'>
        		<div style={{width:'150px',height: '150px', display: 'flex',justifyContent: 'center' }}>
          			<div style={{alignSelf: 'center'}}>
            			<img src={brain} alt="logo"/>
          			</div>
        		</div>
      		</Tilt>
    	</div>
	);
}

export default Logo;