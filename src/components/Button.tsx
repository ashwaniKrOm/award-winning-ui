import { ReactNode } from "react";

interface Props{
    id:string;
    title:string;
    leftIcon?:ReactNode;
    rightIcon?:ReactNode;
    btnClass:string;
}

const Button = ({id,title,leftIcon,rightIcon,btnClass}:Props) =>{
    return (
        <button className={`${btnClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black`} id={id}>
            {leftIcon}
            <span className="relative incline-flex overflow-hidden text-xs uppercase">{title}</span>
            {rightIcon}
        
        </button>
    )
}

export default Button;