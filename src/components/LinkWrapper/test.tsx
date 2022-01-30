import { render, screen } from '@testing-library/react'
import LinkWrapper from './LinkWrapper'

describe('<LinkWrapper />', () => {
  it('should render link and abec', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
  })
})
