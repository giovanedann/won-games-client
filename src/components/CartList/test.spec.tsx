import { screen, render } from 'utils/tests/render'

import CartList from '.'
import cartListMock from './data.mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    render(<CartList items={cartListMock} total="R$ 330,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })
  })
})
