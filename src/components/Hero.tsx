import React, { useRef, useState } from 'react'

const Hero = () =>{
    const [currentIndex,setCurrentIndex]=useState(1);
    const [hasClicked,setHasClicked]=useState(false);
    const [loadedVideo,setLoadedVideo]=useState(0);
    const [isLoading,setIsLoading]=useState(true);

    const totalVideos=4;
    const nextVideoRef=useRef(null);  //useRef is used to target specific DOM element, here is used to target the element within which video will play



    const handleMiniVideoClick =()=>{
        
    }

    return (
        <div className='relative h-dvh w-screen  overflow-x-hidden'>
            <div id='video-frame' className='bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg '>
                <div className='mask-clip-path bg-red-400 absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                    <div>
                        {/* mini video player   */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;