import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Heading />)
  })
})
