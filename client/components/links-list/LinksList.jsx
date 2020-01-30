import React from 'react'

class LinksList extends React.Component {
    constructor(props) {
        super(props)
        //props is an array of objects with the format [{url: "www.example.com", status:"pending"}, {url: "www.example2.com", status:"pending"}]
    }

    render() {
        return (
            <>
                <ul>
                    <li>Placeholder</li>
                </ul>
            </>
        )
    }
}
export default LinksList