import {Heart} from "lucide-react";
import {type Puppy} from "../types";
import {useLiked} from "../context/liked-context";


export function LikeToggle({puppy}: {
    puppy: Puppy,
}) {
    const {liked, setLiked} = useLiked();

    return (
        <button className="group" onClick={() => {
            // If the puppy is already liked remove it from the liked array otherwise add the puppy to the liked array.
            if (liked.includes(puppy.id)) {
                setLiked(liked.filter(id => id !== puppy.id));
            } else {
                // add the puppy to the liked array (uses array destructuring to create a new array and add to the end)
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



