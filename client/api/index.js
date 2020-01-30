import request from 'superagent'

function scrapeBaseUrl(url) {
    return request
        .get('/api/v1/scraper/'+url)
        .then(res => (res))
}

export default scrapeBaseUrl