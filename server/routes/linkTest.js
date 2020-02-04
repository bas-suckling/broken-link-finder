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
    return statusArray
}

//takes a url and returns the status
const testLinkStatus = (link) => {
    return linkRequest
        .get(link)
        .then(res => (res.status))
        .catch(err => (err.status))
}

//joins the link array and status array
function generateObjArray (linksArray, statusArray ) {
    let array = []
    linksArray.forEach((key, i) => array.push({link: linksArray[i], status: statusArray[i]}))
    console.log(array)
    return array
}

testAllLinks(testArray)
// generateObjArray(testArray,testAllLinks(testArray))

module.exports = {
    testAllLinks,
    testLinkStatus,
    generateObjArray
}