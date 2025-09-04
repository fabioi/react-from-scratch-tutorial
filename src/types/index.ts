// Define the type of the puppy object.Types.
export type Puppy = {
    id: number;
    name: string;
    vibe: string;
    imagePath: string;
}


export async function getPuppies() {
    try {
        const response = await fetch('http://react-from-scratch-api.test/api/puppies')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
}