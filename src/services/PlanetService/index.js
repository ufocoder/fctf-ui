import defaultPlanets from './data'

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000'

const withPostParams = (bodyParams) => ({
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyParams)
})

let planets = []

const PlanetService = {
    getData: () => {
        return planets;
    },
    sync: (storageData) => {
        return fetch(API_URL + '/data')
            .then(response => response.json())
            .then(loadedPlanets => {
                planets = loadedPlanets.map(loadedPlanet => {
                    const defaultPlanet = defaultPlanets.find(({ id }) => id === loadedPlanet.id)
                    if (defaultPlanet) {
                        return {...defaultPlanet, ...loadedPlanet}
                    }
                    return loadedPlanet
                })
            })
            .then(() => Promise.all(
                storageData.map(([planetId, flag]) => PlanetService.colonize(planetId, flag))
            ))
    },
    getColonizedPercent: () => {
        const sizeColonized = planets.filter(planet => planet.isColonized).length
        const sizeTotal = planets.length

        return Math.round(sizeColonized / sizeTotal * 100)
    },
    destroy: (planetId) => {
        planets = planets.map((planet) => {
            if (planet.id === planetId) {
                delete planet.isColonized
            }
    
            return planet
        })

        return Promise.resolve()
    },
    check: (flags) => {
        return fetch(API_URL + '/check', withPostParams({ flags }))
            .then(response => response.json())
    },
    colonize: (planetId, flag) => {
        return fetch(API_URL + '/colonize', withPostParams({ planetId, flag }))
            .then(response => response.json())
            .then(({ result }) => {
                if (!result) {
                    return false
                }

                planets = planets.slice().map((planet) => {
                    if (parseInt(planet.id) == parseInt(planetId)) {
                        planet.isColonized = true
                        planet.flag = flag
                    }
            
                    return planet
                })

                return true
            })

    }
}

export default PlanetService