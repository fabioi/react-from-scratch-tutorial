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
    return (
        <main>
            <div className="mt-12 grid gap-8 sm:grid-cols-2"></div>
            {/* Search & Shortlist */}
            <Search>
                <ShortList/>
            </Search>
            {/* Puppies list */}
            <PuppiesList puppies={puppies}/>
            {/* New Puppy form */}
            <PuppyForm/>
        </main>
    );
}




