import {Heart} from "lucide-react";
import {type Puppy} from "../types";
import {useState} from "react";


export function LikeToggle({puppy}: { puppy: Puppy }) {
    // We have destructured the react use state hook here
    // This is the react hook because allows to hook in the way  react internally re-renders components
    const [isLiked, setIsLiked] = useState(false);

    return (
        <button className="group" onClick={() =>
            setIsLiked(!isLiked)
            // can add more functions here
        }>
            <Heart className={
                isLiked ?
                    "fill-pink-500 stroke-none" :
                    "stroke-slate-200 group-hover:stroke-slate-300"
            }/>
        </button>
    );
}



