import React from 'react'
import { mount } from 'enzyme'

import LandingPage from '../client/components/landing-page/LandingPage'

test('<LandingPage />', () => {
  const expected = 'Broken Link Finder'
  const wrapper = mount(<LandingPage />)
  expect(wrapper.text()).toContain(expected)
})

