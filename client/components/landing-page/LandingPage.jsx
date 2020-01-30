import React from 'react'
import UrlInput from '../url-input/UrlInput'

class LandingPage extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <>
          <div>
            <h1 className="title">Welcome to Broken Link Finder</h1>
            <UrlInput/>
          </div>

        </>
      )
    }
  }
  export default LandingPage