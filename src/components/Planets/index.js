import React, { useState, useEffect } from 'react';
import './style.css'

const sunRadius = 38;
const Orbit = ({ cx, cy, orbit }) => (
    <circle className="orbit" r={orbit} cx={cx} cy={cy} />
)

const Planet = (props) => {
    const { 
        cx, 
        cy, 
        pattern,
        physics,
        isHovered,
        isSelected,
        isColonized,
        onClick,
        onMouseEnter, 
        onMouseLeave
    } = props

    const [currentAngel, setCurrentAngle] = useState(physics.startAngel);

    useEffect(() => {  
        if (!isHovered) {
            requestAnimationFrame(() => {
                setCurrentAngle((currentAngel + physics.speed) % 360)
            }, 10)
        }
    })

    const tx = Math.cos(currentAngel) * physics.orbitRadius
    const ty = Math.sin(currentAngel) * physics.orbitRadius

    const fieldClassNames = 'planet__field '
    + (isColonized ? 'planet__field--colonized ' : '')
        + (isSelected ? 'planet__field--observabled ' : '')

    return (
        <g transform={`translate(${tx} ${ty})`}
            onClick={onClick} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}>
            <image 
                className={"planet"}
                x={cx - physics.radius} 
                y={cy - physics.radius} 
                width={physics.radius * 2} 
                height={physics.radius * 2} 
                xlinkHref={pattern} />
            <circle 
                className={fieldClassNames}
                cx={cx} 
                cy={cy} 
                r={physics.radius * 1.5} 
                />
        </g>
    )
}

const Planets = ({ planets, width, currentPlanet, height, onClickHandler }) => {
  const [hoveredPlanet, setHovered] = useState(true);
  const cx = width / 2;
  const cy = height / 2;
  
  return (
    <div className="planets" >
        <svg  width={width} height={height}>
            {planets.map(({ physics }, i) => 
                <Orbit key={i} orbit={physics.orbitRadius} cx={cx} cy={cy} />
            )}
            {planets.map((planet, i) => 
                <Planet
                    key={i}
                    cx={cx}
                    cy={cy}
                    pattern={planet.pattern}
                    physics={planet.physics}
                    isColonized={planet.isColonized}
                    isHovered={planet === hoveredPlanet}
                    isSelected={planet === currentPlanet}
                    onClick={() => onClickHandler(planet)}
                    onMouseEnter={() => setHovered(planet)}
                    onMouseLeave={() => setHovered(null)} />
            )}
            <image
                x={cx - sunRadius} 
                y={cy - sunRadius} 
                width={sunRadius * 2} 
                height={sunRadius * 2} 
                xlinkHref={require('../../assets/sun.svg')} />
        </svg>
    </div>
  );
}

export default Planets;
