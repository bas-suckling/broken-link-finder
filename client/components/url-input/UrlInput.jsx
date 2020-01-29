import React from 'react'

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
        console.log('Check links button was pressed')
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