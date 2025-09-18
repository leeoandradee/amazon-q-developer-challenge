// Custom Cypress commands
declare global {
  namespace Cypress {
    interface Chainable {
      selectLanguages(from: string, to: string): Chainable<void>
      sendMessage(message: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('selectLanguages', (from: string, to: string) => {
  cy.get('select').first().select(from)
  cy.get('select').last().select(to)
})

Cypress.Commands.add('sendMessage', (message: string) => {
  cy.get('input[placeholder*="Cole seu código"]').type(message)
  cy.get('button').contains('Enviar').click()
})