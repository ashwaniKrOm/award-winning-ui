import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

//Card props typescript
interface CardProps{
    src:string;
    title:React.ReactNode;
    description?:string;
    isComingSoon?:boolean;
}

//Card tilt props type
interface TiltProps{
    className?:string;
    children?:React.ReactNode;
}

//Tilt Card(chatgpt code)
const BentoTilt =({className,children}:TiltProps)=>{
    
    const [transformStyle,setTransformStyle]=useState('');
    const itemRef=useRef<HTMLDivElement | null>(null);

    const handleMouseMove=(e:React.MouseEvent)=>{
        // console.log(e);
        
        if(!itemRef.current) return;

        const {left,top,width,height}=itemRef.current.getBoundingClientRect();
        const relativeX=(e.clientX-left)/width;
        const relativeY=(e.clientY-top)/height;

        const tiltX=(relativeY - 0.5)*7;
        const tiltY=(relativeX - 0.5)* -7;

        const newTransform =`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`

        setTransformStyle(newTransform);
    }

    const handleMouseLeave=(e:React.MouseEvent)=>{
        setTransformStyle("");
    }
    return(
        <div 
        ref={itemRef}
         className={`${className}`}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         style={{transform:transformStyle}}
         >
            {children}
        </div>
    )
}

//Card component
const BentoCard =({src,title,description,isComingSoon}:CardProps)=>{
    return(
        <div className="relative size-full">
            <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div className="">
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w--64 text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features =()=>{
    return(
        <section className="bg-black pb-48">
            <div className="container mx-auto px-3 md:px-10 ">
                <div className="px-5 py-28">
                    <p className="font-circular-web text-lg text-blue-50">Into the Metaverse Layer</p>
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis esse nam rerum iste voluptatum distinctio assumenda recusandae praesentium nemo perferendis deleniti fugit vitae eaque alias, itaque, eos modi tenetur dolorem illum facilis. Praesentium enim et nihil deleniti autem laborum sapiente facere, impedit ipsa, odio, vitae repudiandae veritatis soluta ducimus repellendus!
                </p>
                </div>

            <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                src="videos/feature-1.mp4"
                title={<>
              radia<b>n</b>t
            </>}
                description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                isComingSoon
                />
            </BentoTilt>

            <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-titl_1 row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                    src="videos/feature-2.mp4"
                    title={<>zig<b>m</b>a</>}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit libero nostrum in tempore fugit.
                    "
                    isComingSoon
                    />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCard
                    src="videos/feature-3.mp4"
                    title={<>N<b>e</b>xus</>}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit libero nostrum in tempore fugit."
                    isComingSoon
                    />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                    <BentoCard
                    src="videos/feature-4.mp4"
                    title={<>Az<b>u</b>l</>}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit libero nostrum in tempore fugit."
                    isComingSoon
                    />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <div className="flex flex-col size-full justify-between bg-violet-300 p-5">
                        <h1 className="bento-title special-font max-w-64 text-black ">
                            M<b>o</b>re Co<b>m</b>ing S<b>oo</b>n
                            </h1>
                            <TiLocationArrow
                            className="m-5 scale-[5] self-end"
                            />
                        </div>
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <video
                        src="videos/hero-3.mp4"
                        loop 
                        autoPlay
                        className="size-full object-cover object-center"
                        />
                    </BentoTilt>

            </div>
                </div>
        </section>
    )
}

export default Features;