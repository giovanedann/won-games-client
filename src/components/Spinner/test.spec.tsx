import { screen, render } from 'utils/tests/render'
import Spinner from '.'

describe('<Spinner />', () => {
  it('should render the spinner', () => {
    render(<Spinner />)

    expect(screen.getByTitle(/loading\.../i)).toBeInTheDocument()
  })
})
