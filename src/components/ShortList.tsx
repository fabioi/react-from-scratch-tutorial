import {Heart, X} from "lucide-react";
import type {Puppy} from "../types";
import {Dispatch, SetStateAction} from "react";

export function ShortList({
                              puppies,
                              liked,
                              setLiked
                          }: {
    puppies: Puppy[]
    liked: Puppy['id'][]
    setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
}) {
    return (
        <>
            <div>
                <h2 className="flex items-center gap-2 font-medium">
                    <span>Your shortlist</span>
                    <Heart className="lucide lucide-heart inline-block size-6 fill-pink-500 stroke-pink-500"/>
                </h2>
                <ul className="mt-4 flex flex-wrap gap-4">
                    {
                        puppies.filter((puppy: Puppy) => liked.includes(puppy.id)).map((puppy) => (
                            <ShortListItem key={puppy.id} puppy={puppy} liked={liked} setLiked={setLiked}/>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

function ShortListItem({
                           puppy,
                           liked,
                           setLiked
                       }: {
    puppy: Puppy
    liked: Puppy['id'][]
    setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
}) {
    return (
        <li className="relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0">
            <img
                height={32}
                width={32}
                alt={puppy.name}
                className="aspect-square w-8 object-cover"
                src={puppy.imagePath}
            />
            <p className="px-3 text-sm text-slate-800">{puppy.name}</p>
            <button className="group h-full border-l border-slate-100 px-2 hover:bg-slate-100">
                <X className="lucide lucide-x size-4 stroke-slate-400 group-hover:stroke-red-400" onClick={() => {
                    // If the puppy is already liked, remove it from the liked array otherwise add the puppy to the liked array.
                    if (liked.includes(puppy.id)) {
                        setLiked(liked.filter(id => id !== puppy.id));
                    } else {
                        // add the puppy to the liked array (uses array destructuring to create a new array and add to the end)
                        setLiked([...liked, puppy.id]);
                    }
                }}/>
            </button>
        </li>
    )
}
