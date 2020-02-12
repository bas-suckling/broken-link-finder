import React from 'react'
import { mount } from 'enzyme'

import UrlInput from '../client/components/url-input/UrlInput'

test('<LandingPage />', () => {
  const expected = 'Enter a url'
  const wrapper = mount(<UrlInput />)
  expect(wrapper.text()).toContain(expected)
})

