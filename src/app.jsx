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

// Import fondamentali per ogni applicazione React:
// - React: libreria core per creare componenti e gestire la UI
// - ReactDOM: libreria per manipolare il DOM e renderizzare React nel browser
import React from 'react'
import ReactDOM from 'react-dom/client'

// Definizione del componente principale App che renderizza un titolo
// dato che `App` viene usata nello stesso file in cui è definita per essere renderizzata, non è necessario esportarla
function App() {
    return (
        <h1>Hello React and Vite!</h1>
    )
}

// index.html è il punto di ingresso standard per le SPA React - contiene un elemento "root" (solitamente con id 'app') dove l'intera applicazione React viene montata e renderizzata
const app = document.getElementById('app')

// In React, una "root" rappresenta il punto di ingresso principale dell'applicazione nel DOM.
// ReactDOM.createRoot() crea un contenitore React che gestisce l'aggiornamento efficiente 
// del DOM tramite il Virtual DOM. È il metodo predefinito in React 18+ per il rendering.
const root= ReactDOM.createRoot(app)

// Renderizza il componente App all'interno della root
root.render(<App/>)