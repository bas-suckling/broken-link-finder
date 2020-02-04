import request from 'superagent'

export default function scrapeBaseUrl(url) {
    console.log('hello')
    return request
        .get('/api/v1/scraper/'+url)
        .then(res => console.log(res.body))
}




    

