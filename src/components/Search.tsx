import {Dispatch, SetStateAction, useRef} from "react";
import {LucideDelete} from "lucide-react";

export function Search({searchQuery, setSearchQuery}: {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}) {
    // A ref in React is like a pointer that lets you directly access and manipulate DOM elements,
    // it persists between renders and doesn't cause re-renders when changed
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <div className="mt-24 grid grid-cols-2 gap-8">
                <div>
                    <label htmlFor="search" className="font-medium">
                        Search for a character trait
                    </label>
                    <div className="mt-2 flex items-center gap-4">
                        <input
                            ref={inputRef}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            name="search"
                            id="search"
                            type="text"
                            className="w-full max-w-80 bg-white px-4 py-2 ring ring-black/5 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        />
                        <button
                            className="inline-block rounded bg-cyan-300 px-4 py-2 !pr-3 !pl-2.5 font-medium text-cyan-900 hover:bg-cyan-200 focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                            <LucideDelete onClick={() => {
                                setSearchQuery("");
                                inputRef.current.focus();
                            }

                            }/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}