import React from 'react'
import UrlInput from '../url-input/UrlInput'
import Results from '../results/Results'

class LandingPage extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <>
          <div>
            <h1>Welcome to Broken Link Finder</h1>
            <UrlInput/>
            <Results/>
          </div>
        </>
      )
    }
  }
  export default LandingPage