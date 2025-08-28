const tech = "React tailwind and Vite";
// Definizione del componente principale App
// dato che `App` viene usata nello stesso file in cui è definita per essere renderizzata, non è necessario esportarla
export function App() {
    return (
        <h1 className="font-mono text-4xl">Hello {tech}!</h1>
    )
}