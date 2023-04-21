import { render, screen } from 'utils/tests/render'
import Loader from '.'

describe('<Loader />', () => {
  it('should render correctly', () => {
    render(<Loader />)

    expect(screen.getByTitle(/loading\.../i)).toBeInTheDocument()
  })
})
