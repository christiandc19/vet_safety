import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar'>
            <div className='topbar-content container'>
                <div className='address bar-box1 bar-hide'>
                    <p><span><MdLocationPin />&nbsp;</span>2828 H street #H, Bakersfield, CA 93301</p>
                </div>

                <div className='email bar-box2 bar-hide'>
                    <p><span><FiMail />&nbsp;</span> info@bakersfieldrehab.biz</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone />&nbsp;</span> +1 (323) 403-5422</p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
