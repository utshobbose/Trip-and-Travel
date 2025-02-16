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
        {/* Text Content */}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex items-center justify-center flex-col w-full h-full'>
                <div>
                    <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-extrabold uppercase drop-shadow-[3px_3px_5px_rgba(0,0,0,0.7)]'>Where Every Journey Feels Like Home</h1>
                    <p className='md:text-base text-center text-lg text-white font-medium drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]  px-4 py-2 rounded-lg'>
                        We provide the best travel packages, hotel bookings, and transportation services. We are here to make your travel experience memorable.
                    </p>
                </div>
            </div>
        </div>
        </div>
        
    </div>
)
}

export default Hero;
