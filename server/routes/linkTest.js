const linkRequest = require('superagent')

//array will have the format [{link:'www.someurl.com', status:'100'}]

let testArray = [
    'https://www.bas-suckling.com',
    'https://www.google.com',
    'https://www.bas-suckling.com/about',
]

//takes in an array of links and returns an array with the status of each link
const testAllLinks = (array) => {
    console.log(array)
    let statusArray = array.map((link) => {
            return testLinkStatus(link)
        })
        setTimeout(function(){ console.log(statusArray); }, 5000);
    return statusArray
}

//takes a url and returns the status
const testLinkStatus = (link) => {
    let status = linkRequest
        .get(link)
        .then(res => (res.status))
        .catch(err => (err.status))
    // console.log(status)
    return status
}

//joins the link array and status array
const generateObjArray = (linksArray, statusArray) => {
    let array = []
    linksArray.forEach((i) => array.push({
        link: linksArray[i],
        status: statusArray[i]
    }))
    return array
}
// console.log('individual item test: ', testLinkStatus(testArray[0]))
// console.log('full array test: ', testAllLinks( testArray))

module.exports = {
    testAllLinks,
    testLinkStatus,
    generateObjArray
}