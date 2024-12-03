import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useRef } from "react";

const navItems=['Nexus','Vault','Prologue','About','Contact'];

const Navbar =()=>{
    const navRef=useRef(null);
    const audioRef=useRef(null);
    return(
       <div className="fixed top-4 z-50 h-16 border-none transition-all duration-700 inset-x-0 sm:inset-x-6" ref={navRef}>
        <header className="absolute top-1/2 w-full -translate-y-1/2">
            <nav className="flex size-full items-center justify-between p-4">
                <div className="flex items-center gap-7">
                    <img src="/img/logo.png" alt="logo" className="w-10"/>
                    <Button 
                    id="product-button"
                    title="Products"
                    rightIcon={<TiLocationArrow/>}
                    btnClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />
                </div>

                <div className="flex h-full items-center">
                    <div className="hidden md:block">
                        {navItems.map((item,i)=>(
                            <a key={i} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                                {item}
                            </a>
                        ))}
                    </div>


                    <button className="ml-10 flex items-center space-x-0.5" onClick={()=>{}}>
                        <audio ref={audioRef} src="/audio/loop.mp3" loop>
                        {[1,2,3,4].map((bar,i)=>(
                            <div>{bar}</div>
                        ))}
                        </audio>
                        
                    </button>
                </div>
            </nav>
        </header>
       </div>
    )
}
export default Navbar;