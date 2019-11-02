const keys = [
    'a',
    'b',
    'c'
]

export default {
    approveKey: (planet, key) => {
        return Promise.resolve(-1 !== keys.indexOf(key));
    }
}