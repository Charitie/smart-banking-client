import React from 'react';
import './Backdrop.scss';

const Backdrop = ({close}) => {
  return (
    <div onClick={close} className='backdrop'>
      
    </div>
  )
}

export default Backdrop
