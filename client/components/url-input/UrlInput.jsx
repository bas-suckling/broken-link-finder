import React from 'react'

import findAllLinks from '../../api/index.js'

class UrlInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    updateUrl = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()
        findAllLinks(this.state.url)
        .then(res => console.log(res))
    }

    render() {
        return (
            <>
                <div>
                    <h3>Enter a url into the box below to find all broken links</h3>
                    <form>
                        <input className='' required type='text' name='url' placeholder='eg. www.askjeeves.com' onChange={this.updateUrl}></input>
                        <button className="" onClick={this.submit}>
                            Check links
                        </button>
                    </form>
                </div>
            </>
        )
    }
}
export default UrlInput