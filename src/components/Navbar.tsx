import { TiLocationArrow } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from 'gsap'

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [isLastY, setIsLastY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(false);

    const { y: currentScrollY } = useWindowScroll();

    const toggleAudioIndicator = () => {
        setIsAudioPlaying(prev => !prev);
        setIsIndicatorActive(prev => !prev);
    }


    useEffect(() => {
        if (currentScrollY === 0) {
            // console.log("enter 1");
            // console.log("currY",currentScrollY);
            // console.log("lastY",isLastY);

            //At top 
            setIsNavVisible(true);
            navRef.current!.classList.remove("floating-nav");
        } else if (currentScrollY > isLastY) {
            // console.log("enter 2");
            // console.log("currY",currentScrollY);
            // console.log("lastY",isLastY);

            //scrolling down
            setIsNavVisible(false);
            navRef.current!.classList.add("floating-nav");
        } else if (currentScrollY < isLastY) {
            // console.log("enter 3");
            // console.log("currY",currentScrollY);
            // console.log("lastY",isLastY);

            //scrolling up
            setIsNavVisible(true);
            navRef.current!.classList.add("floating-nav");
        }
        setIsLastY(currentScrollY)

    }, [currentScrollY, isLastY])

    useEffect(() => {
        gsap.to(navRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    }, [isNavVisible])

    useEffect(() => {
        if (isAudioPlaying) {
            audioRef.current!.play();
        } else {
            audioRef.current!.pause();
        }
    }, [isAudioPlaying])
    return (
        <div className="fixed top-4 z-50 h-16 border-none transition-all duration-700 inset-x-0 sm:inset-x-6" ref={navRef}>
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className="w-10" />
                        <Button
                            id="product-button"
                            title="Products"
                            rightIcon={<TiLocationArrow />}
                            btnClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, i) => (
                                <a key={i} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                    {item}
                                </a>
                            ))}

                        </div>


                        <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
                            <audio ref={audioRef} src="/audio/loop.mp3" loop className="hidden" />
                            {
                                    [1, 2, 3, 4].map((bar) => (
                                        <div
                                            key={bar}
                                            className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                                            style={{
                                                animationDelay: `${bar * 0.1}s`,
                                            }}
                                        />
                                    ))
                                    }
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;