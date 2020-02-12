import React from 'react'
import { shallow } from 'enzyme'
import LinksList from '../client/components/links-list/LinksList'

test('Renders the table with the right status codes', () => {
	const defaultProps = ({links :[
		{link: "www.example.com", status:200},
		{link: "www.example2.com", status:404}
	],})

	const wrapper = shallow(<LinksList {... defaultProps}/>)
	expect(wrapper.text()).toContain(200, 404)
})

test('Renders the table with the right links', () => {
	const defaultProps = ({links :[
		{link: "www.example.com", status:200},
		{link: "www.example2.com", status:404}
	],})

	const wrapper = shallow(<LinksList {... defaultProps}/>)
	expect(wrapper.text()).toContain('www.example.com', 'www.example2.com')
})