// defineConfig è una funzione fornita da Vite che aiuta nella configurazione del build tool
// Offre autocompletamento TypeScript e validazione delle opzioni di configurazione
// È la funzione raccomandata per configurare Vite invece di esportare direttamente un oggetto
import {defineConfig} from "vite"


export default defineConfig({
    plugins: [
        react()
    ],
})