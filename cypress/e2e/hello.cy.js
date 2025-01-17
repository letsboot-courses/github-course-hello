describe('Hello Endpoint Test', () => {
    it('lädt die Begrüßung vom /hello Endpoint', () => {
        const port = Cypress.env('BACKEND_PORT') || 8080;  // Fallback auf 8080
        cy.visit('http://localhost:${port}'); // Öffnet die Startseite
        cy.contains('Load Greeting').click(); // Klickt auf den Button
        cy.get('#greeting').should('contain', 'Greetings from Letsboot!'); // Überprüft den Text
    });
});