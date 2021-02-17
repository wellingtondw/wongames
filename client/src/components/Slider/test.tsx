import { render } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    const { container } = render(<Slider />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
