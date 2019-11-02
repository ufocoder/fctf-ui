const planets = [
    {
        title: 'Mercury',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        pattern: require('../../assets/1.svg'),
        physics: {
            startAngel: 0,
            speed: 0.005,
            orbitRadius: 60,
            radius: 7
        }
    },
    {
        title: 'Venus',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        pattern: require('../../assets/2.svg'),
        physics: {
            startAngel: 15,
            speed: 0.003,
            orbitRadius: 90,
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
            orbitRadius: 125,
            radius: 13
        }
    },
    {
        title: 'Mars',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        pattern: require('../../assets/4.svg'),
        physics: {
            startAngel: 45,
            speed: 0.0005,
            orbitRadius: 175,
            radius: 14
        }
    },
    {
        title: 'Jupiter',
        description: 'lorep ipsum #2',
        pattern: require('../../assets/5.svg'),
        physics: {
            startAngel: 60,
            speed: 0.002,
            orbitRadius: 220,
            radius: 21
        }
    },
    {
        title: 'Saturn',
        description: 'lorep ipsum #2',
        pattern: require('../../assets/6.svg'),
        physics: {
            startAngel: 50,
            speed: 0.0025,
            orbitRadius: 270,
            radius: 15
        }
    },
    {
        title: 'Uranus',
        description: 'lorep ipsum #2',
        pattern: require('../../assets/7.svg'),
        physics: {
            startAngel: 150,
            speed: 0.0015,
            orbitRadius: 310,
            radius: 13
        }
    },
    {
        title: 'Neptune',
        description: 'lorep ipsum #2',
        pattern: require('../../assets/8.svg'),
        physics: {
            startAngel: 10,
            speed: 0.001,
            orbitRadius: 350,
            radius: 10
        }
    }
]

export default planets;
