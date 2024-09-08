import React from 'react'
import {PiInstagramLogoFill} from 'react-icons/pi';
import {ImFacebook2} from 'react-icons/im';



const Footer = () => {
  return (
    <div className="xl:px-40 bg-default-blue-500 text-default-yellow">
      <div className="p-10 lg:py-28 lg:px-20 grid grid-cols-1 gap-y-2 lg:grid-cols-8 gap-x-4">
        <div className="col-span-2 flex flex-col lg:gap-y-4">
            <p className="font-black text-lg">Made by</p>
            <p className="font-bold text-sm text-white">SEGP GROUP V</p>

        </div>
        <div className="col-span-3 flex flex-col lg:gap-y-4">
            <p className="font-black text-xl">Members</p>
            <p className="font-bold text-sm text-white">Chai Jun Hao</p>
            <p className="font-bold text-sm text-white">Low Chen Ing</p>
            <p className="font-bold text-sm text-white">Khaw Yong Cheng</p>
            <p className="font-bold text-sm text-white">Gabriel Yong Ting Qian</p>

        </div>
        <div className="col-span-1 flex flex-col gap-y-4">
            <p className="font-black text-xl">Our Socials</p>
            <div className="icons-container flex text-white gap-4 items-center">
            <a href="https://www.instagram.com/group_v_segp/" target="_blank">

                    <PiInstagramLogoFill className='text-3xl'/>
                    </a>
                    <ImFacebook2 className='text-2xl'/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer