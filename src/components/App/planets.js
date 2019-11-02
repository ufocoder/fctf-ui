const planets = [
    {
        title: 'Mercury',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        pattern: require('../../assets/1.svg'),
        physics: {
            startAngel: 0,
            speed: 0.005,
            orbitRadius: 60,
            radius: 8
        }
    },
    {
        title: 'Venus',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        pattern: require('../../assets/2.svg'),
        physics: {
            startAngel: 15,
            speed: 0.003,
            orbitRadius: 100,
            radius: 10
        }
    },
    {
        title: 'Earth',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        pattern: require('../../assets/3.svg'),
        physics: {
            startAngel: 30,
            speed: 0.0015,
            orbitRadius: 140,
            radius: 15
        }
    },
    {
        title: 'Mars',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        pattern: require('../../assets/4.svg'),
        physics: {
            startAngel: 45,
            speed: 0.0005,
            orbitRadius: 185,
            radius: 14
        }
    },
    {
        title: 'Jupiter',
        description: 'lorep ipsum #2',
        pattern: require('../../assets/5.svg'),
        physics: {
            startAngel: 60,
            speed: 0.003,
            orbitRadius: 240,
            radius: 28
        }
    },
    {
        title: 'Saturn',
        description: 'lorep ipsum #2',
        pattern: require('../../assets/6.svg'),
        physics: {
            startAngel: 60,
            speed: 0.003,
            orbitRadius: 280,
            radius: 18
        }
    },
    {
        title: 'Uranus',
        description: 'lorep ipsum #2',
        pattern: require('../../assets/7.svg'),
        physics: {
            startAngel: 60,
            speed: 0.003,
            orbitRadius: 300,
            radius: 18
        }
    }
]

export default planets;
