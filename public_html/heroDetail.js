import { getSuperhero } from "./api.js"

export async function generateHeroDetail(element, heroId, setSelectedHeroId) {
    element.replaceChildren('Loading...')

    const hero = await getSuperhero(heroId)
 
    const nameHeader = document.createElement('h2')
    nameHeader.append(hero.name)

    const powerList = document.createElement('ul')
    const listItems = hero.powers.map((powerText) => {
        const li = document.createElement('li')
        li.append(powerText)
        return li
    })
    powerList.append(...listItems)

    const backButton = document.createElement('button')
    backButton.append('Dismiss')
    backButton.onclick = () => setSelectedHeroId(null)

    element.replaceChildren(nameHeader, powerList, backButton)
}