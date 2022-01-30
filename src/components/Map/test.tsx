import { render, screen } from '@testing-library/react'

import Map from './Map'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'My Beautiful Petropolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Reykjavik',
      slug: 'Reykjavik',
      location: {
        latitude: 129,
        longitude: -50
      }
    }
    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
