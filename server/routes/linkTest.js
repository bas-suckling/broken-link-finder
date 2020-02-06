const linkRequest = require('superagent')

//array will have the format [{link:'www.someurl.com', status:''}]

let testArray = [
    'https://www.bas-suckling.com',
    'https://www.google.com',
    'https://www.bas-suckling.com/about',
]

const testAllLinks = (array) => {
    console.log(array)
    let statusArray = array.map((link) => {
            return testLinkStatus(link)
        })
        setTimeout(function(){ console.log(statusArray); }, 5000);
    return statusArray
}

const testLinkStatus = (link) => {
    return linkRequest
        .get(link)
        .then(res => (res.status))
        .catch(err => (err.status))
}


module.exports = {
    testAllLinks,
    testLinkStatus
}