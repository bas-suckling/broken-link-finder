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
            <h1 className="title">Broken Link Finder</h1>
            <h5 className="animated fadeIn">Made by <a href="https://www.bas-suckling.com">Bas Suckling</a> </h5>

            <UrlInput/>
          </div>

        </>
      )
    }
  }
  export default LandingPage