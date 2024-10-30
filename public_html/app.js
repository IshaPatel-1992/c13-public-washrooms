import { generateHeroDetail } from "./heroDetail.js"
import { generateHeroList } from "./heroList.js"

const appElement = document.getElementById('app')

let selectedHeroId = null

function setSelectedHeroId(id) {
    console.log('selecting hero ', id)
    selectedHeroId = id
    renderApp()
}

function renderApp() {
    if (selectedHeroId === null) {
        generateHeroList(appElement, setSelectedHeroId)
    }
    else {
        generateHeroDetail(appElement, selectedHeroId, setSelectedHeroId)
    }
}

renderApp()