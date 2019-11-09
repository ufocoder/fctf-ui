import React, { useState, useEffect } from 'react';
import Progress from '../Progress';
import Planets from '../Planets';
import Header from '../Header';
import Result from '../Result';
import Task from '../Task';
import Form from '../Form';
import Popup from '../Popup';


import PlanetService from '../../services/PlanetService'
import StorageService from '../../services/StorageService'

import './styles.css';

const CANVAS_HEIGHT = 730;
const CANVAS_WIDTH = 730;

const App = () => {
    const [planets, setPlanets] = useState([])
    const [showModal, setShowModal] = useState(true)
    const [currentPlanet, setCurrentPlanet] = useState()
    const [rejected, setRejected] = useState()
    const [loading, setLoading] = useState(true)
    const [resultURL, setResultURL] = useState()

    const progressPercent = PlanetService.getColonizedPercent()

    const checkResult = () => 
        PlanetService.check(Object.fromEntries(StorageService.getData()))
            .then(({ result, url }) => {
                if (result) {
                    setResultURL(url)
                }
            })

    useEffect(() => {
        PlanetService.sync(StorageService.getData())
            .then(() => setPlanets(PlanetService.getData()))
            .then(() => checkResult())
            .finally(() => setLoading(false))
    }, [])

    const handleCloseModalClick = () => setShowModal(false)

    const handlePlanetClick = (planet) => setCurrentPlanet(planet);

    const handleFormReset = (planetId) => 
        PlanetService.destroy(planetId).then(() => {
            StorageService.remove(planetId)
            setResultURL(null)
            setRejected(false)
            setPlanets(PlanetService.getData())
        })

    const handleFormSubmit = (planetId, flag) => {
        setRejected(false)
        PlanetService
            .colonize(planetId, flag) 
            .then(isColonized => {
                if (isColonized) {
                    StorageService.save(planetId, flag)
                    checkResult()
                    setPlanets(PlanetService.getData())
                } else {
                    StorageService.remove(planetId)
                }
            })
            .finally(() => setRejected(true))
    }

    if (loading) {
        return 'loading..'
    }

    return (
        <div className="layout">
            {showModal 
                ? <Popup onCloseClick={handleCloseModalClick} /> 
                : null}
            <div className="layout__planets">
                <Planets 
                    planets={planets}
                    width={CANVAS_WIDTH}
                    height={CANVAS_HEIGHT}
                    currentPlanet={currentPlanet} 
                    onClickHandler={handlePlanetClick} />
            </div>
            <div className="layout__content">
                <Header />
                {resultURL
                    ? <Result url={resultURL} />
                    : null}
                <Progress percent={progressPercent} />
                <Task planet={currentPlanet} />
                {currentPlanet
                    ? <Form 
                        rejected={rejected}
                        planet={currentPlanet}
                        onReset={handleFormReset}
                        onSubmit={handleFormSubmit} /> 
                    : null}
            </div>
        </div>
    )
}

export default App