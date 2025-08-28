// Definizione del componente principale App
// dato che `App` viene usata nello stesso file in cui è definita per essere renderizzata, non è necessario esportarla

import {PageWrapper} from "./components/PageWrapper";
import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search.jsx";
import {PuppiesList} from "./components/PuppiesList.jsx";
import {PuppyForm} from "./components/PuppyForm.jsx";

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
        <>
            {/* Search & Shortlist */}
            <Search/>
            {/* Puppies list */}
            <PuppiesList/>
            {/* New Puppy form */}
            <PuppyForm/>
        </>
    );
}




