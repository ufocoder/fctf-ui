import fixture from './fixture.json'

window.fetch = (url, { method, body } = {}) => Promise.resolve({
    json: () => {
        if ('POST' !== method) {
            return fixture
        }

        if (url.endsWith('/check')) {
            const { flags = {} } = JSON.parse(body) || {}

            if (flags[8]) {
                return {
                    result: true,
                    url: 'http://ya.ru'
                }
            }
        }

        return { 
            result: true
        }
    }
})