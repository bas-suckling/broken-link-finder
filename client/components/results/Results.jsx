import React from 'react'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseUrl: ''
        }
    }

    render() {
        return (
            <>
            {(this.state.baseUrl ?
                (<div>
                    <h3>Links hosted at {this.state.baseUrl}</h3>
                    <ul>
                        <li>Placeholder link</li>
                    </ul>
                </div>)
                : <h3>No Url Specified</h3>
            )}
            </>
        )
    }
}
export default Results