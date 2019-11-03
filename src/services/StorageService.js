const getData = () => {
    try {
        return Object.entries(JSON.parse(localStorage.getItem('flags'))) || []
    } catch (err) {
        return []
    }
}

const remove = (id) => {
    try {
        const flags = JSON.parse(localStorage.getItem('flags')) || {}
        delete flags[id];
        localStorage.setItem('flags', JSON.stringify(flags))
    } catch (err) {
        console.log(err)
    }
}

const save = (id, flag) => {
    try {
        const flags = JSON.parse(localStorage.getItem('flags')) || {}
        flags[id] = flag;
        localStorage.setItem('flags', JSON.stringify(flags))
    } catch (err) {
        console.log(err)
    }
}

export default {
    getData,
    save,
    remove
}