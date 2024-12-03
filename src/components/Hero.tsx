import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/all"


//scroll plugin gsap to enable animation while scrolling only
gsap.registerPlugin(ScrollTrigger);

const Hero = () =>{
    const [currentIndex,setCurrentIndex]=useState(1);
    const [hasClicked,setHasClicked]=useState(false);
    const [loadedVideo,setLoadedVideo]=useState(0);
    const [isLoading,setIsLoading]=useState(false);

    const totalVideos=4;

    const currentVideoRef=useRef<HTMLVideoElement | null>(null);
    const nextVideoRef=useRef<HTMLVideoElement | null>(null);  //useRef is used to target specific DOM element, here is used to target the element within which video will play

    const handleVideoLoad =()=>{
        setLoadedVideo((prev)=>prev+1);
    }


    // 1%3=>0 =>1+1=>2
    // 2%3=>2 =>2+1=>3
    // 3%3=>0 =>0+1=>1
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;


    const handleMiniVideoClick =()=>{
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    // useEffect(()=>{
    //   if(loadedVideo === totalVideos-1){
    //     setIsLoading(true);
    //   }
    // },[loadedVideo])

    //gsap code
    useGSAP(
        () => {
          if (hasClicked) {
            gsap.set("#next-video", { visibility: "visible" });
            gsap.to("#next-video", {
              transformOrigin: "center center",
              scale: 1,
              width: "100%",
              height: "100%",
              duration: 1,
              ease: "power1.inOut",
              onStart: () => {
                if (nextVideoRef.current) {
                  nextVideoRef.current.play().catch((error) => {
                    console.error("Playback failed:", error);
                  });
                }
              },
            });
            gsap.from("#current-video", {
              transformOrigin: "center center",
              scale: 0,
              duration: 1.5,
              ease: "power1.inOut",
            });
          }
        },
        {
          dependencies: [currentIndex],
          revertOnUpdate: true,
        }
      );

      useGSAP(() => {
        gsap.set("#video-frame", {
          clipPath: "polygon(25% 0, 100% 0, 75% 100%, 0 100%)",
          borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0% 0% 0% 0%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#video-frame",
            start: "center center",
            end: "bottom center",
            scrub: true,
          },
        });
      });
    
    //get video source
    const getVideoSrc=(index:number)=>`videos/hero-${index}.mp4`

    return (
        <div className='relative h-dvh w-screen  overflow-x-hidden'>
            
            {/* loading code */}
            {isLoading && (
              <div className=' absolute z-[100] w-screen h-dvh flex-center overflow-hidden bg-violet-50'>
                <div className='three-body'>
                  <div className='three-body__dot'/>
                  <div className='three-body__dot'/>
                  <div className='three-body__dot'/>
                </div>
              </div>
            )}
            
            <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-tr-[50px] bg-blue-75"
      >
        <div>
                <div className='mask-clip-path  absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg '>
                    
                    {/* mini video player   */}
                    <div onClick={handleMiniVideoClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 '>
                        <video
                        ref={currentVideoRef}
                        src={getVideoSrc(upcomingVideoIndex)}   //since on click of small video, it will start play on big screen and the next index video set to the small video player
                        loop
                        muted
                        id='current-video'
                        className="size-64 origin-center scale-150 object-cover object-center "
                        onLoadedData={handleVideoLoad} //it handles when the video loads
                        />
                    </div>
                </div>

                {/* background videoplayer */}
                <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                loop
                muted
                id='next-video'
                className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                onLoadedData={handleVideoLoad}
                />

                <video 
                src={getVideoSrc(currentIndex)}
                autoPlay
                loop
                muted
                className='absolute left-0 top-0 size-full object-cover object-center'
                />
            </div>

            
            <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10 ">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              btnClass="bg-yellow-300 flex-center gap-1"
            />


<h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>
          </div>
        </div>
            </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>     
        </div>
    )
}

export default Hero;