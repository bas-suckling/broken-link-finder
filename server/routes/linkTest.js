const linkRequest = require('superagent')

//array will have the format [{link:'www.someurl.com', status:'100'}]

const testAllLinks = (array) => {
    // console.log(array)
    let statusArray = array.map((link) => {
            return testLinkStatus(link)
        })
        // setTimeout(function(){ console.log(statusArray); }, 5000);
    return statusArray
  }
  
  const testLinkStatus = (link) => {
    return linkRequest
        .get(link)
        .then(res => (res.status))
        .catch(err => (err.status))
  }
  
  const generateObjArray = (linksArray, statusArray) => {
    let array = []
    linksArray.forEach((element, i) => array.push({
        link: linksArray[i],
        status: statusArray[i]
    }))
    return array
  }

module.exports = {
    testAllLinks,
    testLinkStatus,
    generateObjArray
}