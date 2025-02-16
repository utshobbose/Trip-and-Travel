import React from 'react'

const Hero = () => {
return (
    <div className='relative w-full h-[100vh] sm:h-[100vh]'>
        {/* Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-gray-400 opacity-60'>
        <video 
        src="/images/Mountain View Stock Footage .mp4"
        autoPlay
        loop
        muted
        preload='metadata'
        className='w-full h-full object-cover'
        ></video>
        </div>
        
    </div>
)
}

export default Hero;
