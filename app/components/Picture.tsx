import { MdOutlineHighlightOff } from "react-icons/md";
import useTheme from "../context/useTheme";

export default function Picture ({image,setImage}) {
    const { mode } = useTheme();
    return (
        <div className={`inset-0 FCC fixed z-90 ${mode === 'dark' ? 'bg-black text-white' : "bg-white text-black"}`} onClick={() => setImage(null)}>
            <img 
                onClick={(e) => e.stopPropagation()}
                src={image} 
                className="object-cover"
                alt="image" 
            />
            <button 
                onClick={() => setImage(null)}
                className="absolute cursor-pointer top-6 right-4 text-3xl"
            >
                <MdOutlineHighlightOff/>
            </button>
        </div>
    )
}