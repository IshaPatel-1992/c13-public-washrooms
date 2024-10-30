async function getOrDie(url) {
    const response = await fetch(url)
    if (response.status !== 200) {
        throw new Error('')
    }
    return response.json()
}

export async function getSuperheroes() {
    return getOrDie('/api/superhero')
}

export async function getSuperhero(id) {
    return getOrDie('/api/superhero/'+id)
}