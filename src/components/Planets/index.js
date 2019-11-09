import React, { useState, useEffect } from 'react';
import './style.css'

const CANVAS_HEIGHT = 730;
const CANVAS_WIDTH = 730;
const WINDOW_WIDTH_LIMIT = 992;


const STATIC_ANGEL = 180
const SUN_RADUIS = 38;
const Orbit = ({ cx, cy, orbit }) => (
    <circle className="orbit" r={orbit} cx={cx} cy={cy} />
)

let prevDocumentWidth = null;

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

    const autoSetAngle = () => {
        if (window.innerWidth < WINDOW_WIDTH_LIMIT) {
            if (currentAngel != STATIC_ANGEL) {
                setCurrentAngle(STATIC_ANGEL);
            }
        } else {
            if (!isHovered) {
                requestAnimationFrame(() => {
                    setCurrentAngle((currentAngel + physics.speed) % 360)
                }, 10)
            }
        }
    }

    useEffect(() => {
        const onResize = () => autoSetAngle()
        autoSetAngle()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
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

const Planets = ({ planets, currentPlanet, onClickHandler }) => {
  const [hoveredPlanet, setHovered] = useState(true);
  const cx = CANVAS_WIDTH / 2;
  const cy = CANVAS_HEIGHT / 2;  
  return (
    <div className="planets" >
        <svg width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
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
                x={cx - SUN_RADUIS} 
                y={cy - SUN_RADUIS} 
                width={SUN_RADUIS * 2} 
                height={SUN_RADUIS * 2} 
                xlinkHref={require('../../assets/sun.svg')} />
        </svg>
    </div>
  );
}

export default Planets;
