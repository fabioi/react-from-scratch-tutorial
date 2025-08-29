import {Heart} from "lucide-react";
import {type Puppy} from "../types";

export function LikeToggle({puppy}: { puppy: Puppy }) {
    return (
        <button className="group">
            <Heart className={
                true ?
                    "fill-pink-500 stroke-none" :
                    "stroke-slate-200 group-hover:stroke-slate-300"
            }/>
        </button>
    );
}