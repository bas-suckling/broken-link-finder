import React from 'react'
import scrapeBaseUrl from '../../api/index.js'
import Results from '../results/Results.jsx'

class UrlInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            baseUrl: '',
            links: [],
            err: false
        }
    }

    updateUrl = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        this.setState({baseUrl : this.state.url, links:[], err:''}) 
        scrapeBaseUrl(this.state.url)
        .then(res => this.setState({links:res}))
        .catch(err => this.setState({err:true}))

    }

    render() {
        return (
            <>
                <div>
                    <h3>Enter a url into the box below to find all broken links on that page</h3>
                    <form>
                        <input className='' required type='text' name='url' placeholder='eg. www.askjeeves.com' onChange={this.updateUrl}></input>
                        <button className="" onClick={this.submit}>
                            Check links
                        </button>
                    </form>
                    {this.state.err == false ? 
                    <Results baseUrl = {this.state.baseUrl} links = {this.state.links}/> :
                    <h4>Invalid URL: {this.state.baseUrl}</h4>
                }
                </div>
            </>
        )
    }
}
export default UrlInput