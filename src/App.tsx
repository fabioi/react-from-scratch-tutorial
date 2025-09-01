// Definizione del componente principale App
// dato che `App` viene usata nello stesso file in cui è definita per essere renderizzata, non è necessario esportarla

import {PageWrapper} from "./components/PageWrapper";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {PuppiesList} from "./components/PuppiesList";
import {PuppyForm} from "./components/PuppyForm";
import {ShortList} from "./components/ShortList";
import {puppies} from "./data/puppies";
import {useState} from "react";
import {Puppy} from "./types";


export function App() {
    return (
        <PageWrapper>
            {/* Max-width container */}
            <Container>
                <Header/>
                <Main/>
            </Container>
        </PageWrapper>
    )
}

function Main() {
    const [liked, setLiked] = useState<Puppy['id'][]>([]);

    return (
        <main>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {/* Search & Shortlist */}
                <Search>
                    <ShortList puppies={puppies} liked={liked} setLiked={setLiked}/>
                </Search>
            </div>
            {/* Puppies list */}
            <PuppiesList puppies={puppies} liked={liked} setLiked={setLiked}/>
            {/* New Puppy form */}
            <PuppyForm/>
        </main>
    );
}




