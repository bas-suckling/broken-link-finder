import React from 'react'
import UrlInput from '../url-input/UrlInput'

class LandingPage extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <>
          <div className='content'>
            <h1 className="title">Welcome to Broken Link Finder</h1>
            <h5>Made by <a href="https://www.bas-suckling.com">Bas Suckling</a> </h5>

            <UrlInput/>
          </div>

        </>
      )
    }
  }
  export default LandingPage