window.fetch = (_, { method, body } = {}) => Promise.resolve({
    json: () => 'POST' === method 
        ? { 
            result: true, 
            url: 10 === JSON.parse(body).id 
                ? 'http://google.com'
                : null
        } 
        : require('./fixture.json')
})