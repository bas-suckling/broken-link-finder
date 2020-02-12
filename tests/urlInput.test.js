import React from 'react'
import { shallow } from 'enzyme'

import UrlInput from '../client/components/url-input/UrlInput'

test('<UrlInput/> renders and contains expected text', () => {
  const expected = 'Enter a url'
  const wrapper = shallow(<UrlInput />)
  expect(wrapper.text()).toContain(expected)
})

