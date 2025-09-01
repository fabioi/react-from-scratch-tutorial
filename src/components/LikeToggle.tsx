import {Heart} from "lucide-react";
import {type Puppy} from "../types";
import {useState} from "react";


export function LikeToggle({puppy, liked, setLiked}: {
    puppy: Puppy,
    liked: Puppy['id'][],
    setLiked: (value: React.SetStateAction<number[]>) => void;
}) {
    return (
        <button className="group" onClick={() => {
            // If the puppy is already liked remove it from the liked array otherwise add the puppy to the liked array.
            if (liked.includes(puppy.id)) {
                setLiked(liked.filter(id => id !== puppy.id));
            } else {
                setLiked([...liked, puppy.id]);
            }
        }}>
            <Heart className={
                liked.includes(puppy.id) ?
                    "fill-pink-500 stroke-none" :
                    "stroke-slate-200 group-hover:stroke-slate-300"
            }/>
        </button>
    );
}



