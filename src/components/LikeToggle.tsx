import {Heart} from "lucide-react";
import {type Puppy} from "../types";
import * as React from "react";


export function LikeToggle({puppy}: { puppy: Puppy }) {
    // We have destructured the react use state hook here
    // This is the react hook because allows to hook in the way  react internally re-renders components
    const [isLiked, setIsLiked] = React.useState(false);

    // In JS is possible to to use private functions inside other functions
    function handleClick(event) {
        setIsLiked(!isLiked); // Cambia lo stato da true a false o viceversa
    }

    return (
        <button className="group" onClick={handleClick}>
            <Heart className={
                isLiked ?
                    "fill-pink-500 stroke-none" :
                    "stroke-slate-200 group-hover:stroke-slate-300"
            }/>
        </button>
    );
}



