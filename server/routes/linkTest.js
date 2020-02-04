const linkRequest = require('superagent')

//array will have the format [{link:'www.someurl.com', status:''}]

function testAllLinks(array) {
    array.map(function (link, i) {
            return
        }


    )

}

function testLink(link) {
    return linkRequest
        .get(link)
        .then(res => (res.status))
        .catch(err => (err.status))
}

console.log(testLink('https://www.bas-suckling.com/'))

