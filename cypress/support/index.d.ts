declare global {
  namespace Cypress {
    interface Chainable {
      testHomeBanner: () => Chainable<AUTWindow>
    }
  }
}

export {}
