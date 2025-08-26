/*
 * app.jsx - Main Application Component File
 * 
 * This is the main entry point for a React application. It typically contains:
 * - The root App component that serves as the application's container
 * - Setup of React rendering into the DOM
 * - Initial routing configuration (if used)
 * - Global state management initialization (if used)
 * - Other core application setup logic
 */

// Definizione del componente principale App che renderizza un titolo
function App() {
    return (
        <h1>Hello Rect and Vite!</h1>
    )
}

// Ottiene il riferimento all'elemento DOM con id 'app'
const app = document.getElementById('app')
// Crea una root React utilizzando l'elemento DOM selezionato
const root: ReactDom.createRoot(app)

// Renderizza il componente App all'interno della root
root.render(<App/> >)