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
    }
  }
}
