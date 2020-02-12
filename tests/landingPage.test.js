import React from 'react'
import { shallow } from 'enzyme'

import LandingPage from '../client/components/landing-page/LandingPage'

test('<LandingPage /> componenet renders and contains expected text', () => {
  const expected = 'Broken Link Finder'
  const wrapper = shallow(<LandingPage />)
  expect(wrapper.text()).toContain(expected)
})

