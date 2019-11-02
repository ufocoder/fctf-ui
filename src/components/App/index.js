import React, { useState } from 'react';
import Progress from '../Progress';
import Planets from '../Planets';
import Header from '../Header';
import Task from '../Task';
import Form from '../Form';


import defaultPlanets from './planets'
import './styles.css';


const App = ({ accepted = [] }) => {
    const [acceptedTasks, setAcceptedTasks] = useState(accepted)
    const [planets, setPlanets] = useState(defaultPlanets || [])
    const [currentPlanet, setCurrentPlanet] = useState()
    const handlePlanetClick = (planet) => {
        setCurrentPlanet(planet);
    }

    const colonizedPlanets = planets.filter(planet => planet.isColonized).length
    const progressPercent = Math.round(colonizedPlanets / planets.length * 100)

    const handlePlanetColonized = (colonizedPlanet, flag) => {
        setPlanets(
            planets.slice().map((planet) => {
                if (planet === colonizedPlanet) {
                    planet.flag = flag
                    planet.isColonized = true                
                }

                return planet
            })
        )
    }

    return (
        <div className="layout">
            <div className="layout__planets">
                <Planets 
                    planets={planets}
                    width={600}
                    height={600}
                    currentPlanet={currentPlanet} 
                    onClickHandler={handlePlanetClick} />
            </div>
            <div className="layout__content">        
                <Header />
                <Progress percent={progressPercent} />
                <Task task={currentPlanet} />
                {currentPlanet
                    ? <Form 
                        planet={currentPlanet}
                        onApproved={handlePlanetColonized} /> 
                    : null}
            </div>
        </div>
    )
}

export default App