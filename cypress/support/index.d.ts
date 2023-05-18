declare global {
  namespace Cypress {
    interface Chainable {
      google: () => Chainable<AUTWindow>
    }
  }
}

export {}
