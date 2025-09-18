describe('Dev Migration Agent', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the main interface', () => {
    cy.contains('Dev Migration Agent')
    cy.contains('Seu assistente para migração entre linguagens')
    cy.get('select').should('have.length', 2)
    cy.get('input[placeholder*="Cole seu código"]').should('be.visible')
  })

  it('should show initial AI message', () => {
    cy.contains('Olá! Sou seu agente de migração')
    cy.get('.ai-message').should('exist')
  })

  it('should allow language selection', () => {
    cy.selectLanguages('java', 'typescript')
    cy.get('select').first().should('have.value', 'java')
    cy.get('select').last().should('have.value', 'typescript')
  })

  it('should send and receive messages', () => {
    cy.selectLanguages('java', 'python')
    
    const testCode = 'public class Test { public static void main(String[] args) { System.out.println("Hello"); } }'
    cy.sendMessage(testCode)
    
    // Check user message appears
    cy.get('.user-message').should('contain', testCode)
    
    // Check AI response appears
    cy.get('.ai-message').should('have.length.greaterThan', 1)
    cy.contains('Migração de java para python', { timeout: 3000 })
  })

  it('should disable input while loading', () => {
    cy.sendMessage('test code')
    cy.get('input[placeholder*="Cole seu código"]').should('be.disabled')
    cy.get('button').contains('...').should('exist')
  })

  it('should handle empty messages', () => {
    cy.get('button').contains('Enviar').should('be.disabled')
    cy.get('input[placeholder*="Cole seu código"]').type('   ')
    cy.get('button').contains('Enviar').should('be.disabled')
  })

  it('should show migration for different languages', () => {
    const languages = [
      { from: 'java', to: 'typescript' },
      { from: 'python', to: 'go' },
      { from: 'javascript', to: 'python' }
    ]

    languages.forEach(({ from, to }) => {
      cy.selectLanguages(from, to)
      cy.sendMessage(`function test() { console.log("${from}"); }`)
      cy.contains(`Migração de ${from} para ${to}`, { timeout: 3000 })
    })
  })
})