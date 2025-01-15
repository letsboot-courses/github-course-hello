describe('Hello Endpoint Test', () => {
    it('lädt die Begrüßung vom /hello Endpoint', () => {
        cy.visit('http://localhost:8080'); // Öffnet die Startseite
        cy.contains('Load Greeting').click(); // Klickt auf den Button
        cy.get('#greeting').should('contain', 'Greetings from Letsboot!'); // Überprüft den Text
    });
});