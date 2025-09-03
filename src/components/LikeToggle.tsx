import {Heart, LoaderCircle} from "lucide-react";
import {type Puppy} from "../types";
import {useLiked} from "../context/liked-context";
import {useState} from "react";


export function LikeToggle({puppy}: {
    puppy: Puppy,
}) {
    const {liked, setLiked} = useLiked();
    const [pending, setPending] = useState<boolean>(false);

    return (
        <button className="group" onClick={() => {
            setPending(true);
            setTimeout(() => {

                // If the puppy is already liked remove it from the liked array otherwise add the puppy to the liked array.
                if (liked.includes(puppy.id)) {
                    setLiked(liked.filter(id => id !== puppy.id));
                } else {
                    // add the puppy to the liked array (uses array destructuring to create a new array and add to the end)
                    setLiked([...liked, puppy.id]);
                }

                setPending(false);
            }, 1500)



        }}>

            {pending ? <LoaderCircle className="animate-spin stroke-slate-300"/> : <Heart className={
                liked.includes(puppy.id) ?
                    "fill-pink-500 stroke-none" :
                    "stroke-slate-200 group-hover:stroke-slate-300"
            }/>}

        </button>
    );
}



