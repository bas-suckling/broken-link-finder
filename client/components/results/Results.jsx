import React from 'react'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            links: []
        }
        
    }

    render() {
        return (
            <>
            {(this.props.baseUrl ?
                (<div>
                    <h3>Links hosted at {this.props.baseUrl}</h3>
                    {(this.state.links.length = 0) ? 
                        <ul>
                            <li>Placeholder link</li>
                        </ul>:
                        <p>No links found</p>
                        }

                    
                </div>)
                : <h3>No Url Specified</h3>
            )}
            </>
        )
    }
}
export default Results