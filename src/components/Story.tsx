import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

const Story =()=>{
    const imgRef=useRef<HTMLImageElement | null>(null);

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
                                ref={imgRef}
                                src="/img/entrance.webp"
                                alt="entrance"
                                className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story;