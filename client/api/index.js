import request from 'superagent'

function findAllLinks(url) {
    return request
        .get('/api/v1/scraper/'+url)
        .then(res => (res))
}

export default findAllLinks