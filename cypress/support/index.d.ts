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
      testHomeShowcases: (
        attributes: ShowcaseAttributes
      ) => Chainable<AUTWindow>
    }
  }
}
