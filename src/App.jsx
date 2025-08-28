// Definizione del componente principale App
// dato che `App` viene usata nello stesso file in cui è definita per essere renderizzata, non è necessario esportarla

import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";

export function App() {
    return (
        <PageWrapper>
            {/* Max-width container */}
            <Container>
                <Header/>
                <main></main>
            </Container>
        </PageWrapper>
    )
}





