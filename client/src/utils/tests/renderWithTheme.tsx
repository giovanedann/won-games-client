import { ThemeProvider } from 'styled-components'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import theme from 'styles/theme'
import { ReactElement, ReactNode } from 'react'

type ProviderProps = { children: ReactNode }

const Provider = ({ children }: ProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

function renderWithTheme(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult {
  return render(ui, { wrapper: Provider, ...options })
}

export default renderWithTheme
