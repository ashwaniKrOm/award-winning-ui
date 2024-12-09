import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import Button from "./Button";

const Story =()=>{
    const imgRef=useRef<HTMLImageElement | null>(null);

    const handleMouseLeave=()=>{

        const element = imgRef.current;

        gsap.to(element,{
            duration:0.3,
            rotateX:0,
            rotateY:0,
            ease:"power1.inOut"
           })
    }

    const handleMouseMove=(e:React.MouseEvent)=>{
       const {clientX,clientY}=e;
       const element = imgRef.current;

       if(!element) return;

       const rect=element.getBoundingClientRect();
       const x =clientX - rect.left;
       const y =clientY - rect.top;

       const centerX=rect.width/2;
       const centerY=rect.height/2;

       const rotateX=((y-centerX)/centerY) * -10;
       const rotateY=((x-centerX)/centerX) * 10;

       gsap.to(element,{
        duration:0.3,
        rotateX,
        rotateY,
        transformPerspective:500,
        ease:"power1.inOut"
       })
    }

    return(
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center  pb-24 py-7">
                <p className="font-general text-sm uppercase md:text-[10px]">The MultiUniversal IP World</p>

                <div className="relative size-full">
                    <AnimatedTitle
                    title="the st<b>o</b>ry of <br/> a hidden real<b>m</b>"
                    className="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    sectionId="#story"
                    />

                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave}
                                ref={imgRef}
                                src="/img/entrance.webp"
                                alt="entrance"
                                className="object-contain"
                                />
                            </div>
                        </div>

                    {/* for rounded image */}
                    <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>


                    </div>
                </div>

                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                    <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sequi asperiores enim similique maxime ducimus rerum error numquam expedita quo.

                    </p>
                    <Button
                     id="realm-btn"
                     title="discover prologue"
                     btnClass="mt-5 bg-white"
                    />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Story;