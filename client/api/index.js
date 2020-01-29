import request from 'superagent'

export function findAllLinks(url) {
    return request
        .get('/api/v1/scraper'+url)
        .then(res => console.log(res))
}

