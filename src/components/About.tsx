import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import AnimatedTitle from "./AnimatedTitle";


gsap.registerPlugin(ScrollTrigger)

const About =()=>{

    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:"#clip",
                start:"center center",
                end:"+=800 center",
                scrub:0.5,
                pin:true,
                pinSpacing:true,
            }
        })

        clipAnimation.to(".mask-clip-path",{
            width:"100vw",
            height:"100vh",
            borderRadius:0
        })
    })

    return (
        <section id="about" className="w-screen min-h-screen">
            <div className="relative mb-8 mt-28 flex flex-col gap-5 items-center">
                <h1 className="font-general text-md uppercase md:text-[10px]">Welcome to Zentry</h1>
                
                {/* title reusable component */}
                <AnimatedTitle title="Disc<b>o</b>ver the 
                    <br/> Zentry <br/>
                     Ab<b>o</b>ut Section" className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem] !text-black"/>

                <div>
                    <p className="absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
                        The Game of Games begins-your life, now an epic MMORPG
                    </p>
                    <p>
                        Zentry unites every player from countless games and platforms
                    </p>
                    </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="h-[60vh] w-96 absolute left-1/2 top-0 z-20  origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw] mask-clip-path ">
                    <img src="img/about.webp" alt="about-background" className="absolute left-0 top-0 size-full object-cover"/>
                </div>
            </div>
        </section>
    )
}

export default About;