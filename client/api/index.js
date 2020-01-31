import request from 'superagent'

export default function scrapeBaseUrl(url) {
    return request
        .get('/api/v1/scraper/'+url)
        .then(res => (res))
}


function scrapeEmbeddedUrls() {}


    

