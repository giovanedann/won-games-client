import { User } from './utils'

export type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

declare global {
  namespace Cypress {
    interface Chainable {
      // custom command to test home page banner
      testHomeBanner: () => Chainable<AUTWindow>

      // custom command to test home page showcases
      findShowcase: (attributes: ShowcaseAttributes) => Chainable<AUTWindow>

      // custom command to test home page showcases
      getByDataCy: (selector: string) => Chainable<JQuery<HTMLElement | null>>

      // custom command to check if game price is less than some value
      shouldBeLessThan: (price: number) => Chainable<AUTWindow>

      // custom command to check if game price is greater than some value
      shouldBeGreaterThan: (price: number) => Chainable<AUTWindow>

      // custom command to check if game price is equal to some value
      shouldBeEqualTo: (price: number) => Chainable<AUTWindow>

      // custom command to sign up
      signUp: (user: User) => Chainable<AUTWindow>

      // custom command to sign in
      signIn: () => Chainable<AUTWindow>

      // custom command to add items to cart by index
      addItemToCartByIndex: (gameIndex: number) => Chainable<AUTWindow>

      // custom command to remove items to cart by index
      removeItemFromCartByIndex: (gameIndex: number) => Chainable<AUTWindow>
    }
  }
}
