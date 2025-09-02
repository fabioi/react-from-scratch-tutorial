// Definizione del componente principale App
// dato che `App` viene usata nello stesso file in cui è definita per essere renderizzata, non è necessario esportarla

import {PageWrapper} from "./components/PageWrapper";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {PuppiesList} from "./components/PuppiesList";
import {PuppyForm} from "./components/PuppyForm";
import {ShortList} from "./components/ShortList";
import {puppies as puppiesData} from "./data/puppies";
import {useState} from "react";
import {Puppy} from "./types";
import {LikedContext} from "./context/liked-context";


export function App() {
    return (
        <PageWrapper>
            <Container>
                <Header/>
                <Main/>
            </Container>
        </PageWrapper>
    )
}

function Main() {
    // Creates a state variable to store the liked puppies.
    // This will be passed to the LikedContext provider to make it available to all child components.
    const [liked, setLiked] = useState<Puppy['id'][]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const[puppies, setPuppies] = useState<Puppy[]>(puppiesData);

    return (
        <main>
            <LikedContext value={{liked, setLiked}}>
                <div className="mt-12 grid gap-8 grid-cols-1">
                    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                    <ShortList puppies={puppies}/>
                </div>
            <PuppiesList searchQuery={searchQuery}   puppies={puppies}/>
            </LikedContext>
            <PuppyForm puppies={puppies} setPuppies={setPuppies}/>
        </main>
    );
}




