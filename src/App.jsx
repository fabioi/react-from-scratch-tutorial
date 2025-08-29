// Definizione del componente principale App
// dato che `App` viene usata nello stesso file in cui è definita per essere renderizzata, non è necessario esportarla

import {PageWrapper} from "./components/PageWrapper";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search.jsx";
import {PuppiesList} from "./components/PuppiesList.jsx";
import {PuppyForm} from "./components/PuppyForm.jsx";
import {ShortList} from "./components/ShortList.jsx";
import {puppies} from "./data/puppies.js";

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




