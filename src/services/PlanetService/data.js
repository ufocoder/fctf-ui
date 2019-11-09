const planets = [
    {
        id: 1,
        pattern: require('../../assets/1.svg'),
        physics: {
            startAngel: 0,
            speed: 0.005,
            orbitRadius: 60,
            radius: 7
        }
    },
    {
        id: 2,
        pattern: require('../../assets/2.svg'),
        physics: {
            startAngel: 15,
            speed: 0.003,
            orbitRadius: 90,
            radius: 10
        }
    },
    {
        id: 3,
        pattern: require('../../assets/3.svg'),
        physics: {
            startAngel: 30,
            speed: 0.0015,
            orbitRadius: 125,
            radius: 13
        }
    },
    {
        id: 4,
        pattern: require('../../assets/4.svg'),
        physics: {
            startAngel: 45,
            speed: 0.0005,
            orbitRadius: 175,
            radius: 14
        }
    },
    {
        id: 5,
        pattern: require('../../assets/5.svg'),
        physics: {
            startAngel: 60,
            speed: 0.002,
            orbitRadius: 220,
            radius: 21
        }
    },
    {
        id: 6,
        pattern: require('../../assets/6.svg'),
        physics: {
            startAngel: 50,
            speed: 0.0025,
            orbitRadius: 270,
            radius: 15
        }
    },
    {
        id: 7,
        pattern: require('../../assets/7.svg'),
        signal: atob("e2ZjdGZfY2F0c193ZWFyX2hhdHN9"),
        physics: {
            startAngel: 150,
            speed: 0.0015,
            orbitRadius: 310,
            radius: 13
        }
    },
    {
        id: 8,
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
