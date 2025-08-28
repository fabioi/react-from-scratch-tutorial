// defineConfig è una funzione fornita da Vite che aiuta nella configurazione del build tool
// Offre autocompletamento TypeScript e validazione delle opzioni di configurazione
// È la funzione raccomandata per configurare Vite invece di esportare direttamente un oggetto
import {defineConfig} from "vite"
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react"


export default defineConfig({
    plugins: [
        react(), tailwindcss()
    ],
})