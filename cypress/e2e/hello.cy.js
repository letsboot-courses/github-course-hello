describe('Hello Endpoint Test', () => {
    it('lädt die Begrüßung vom /hello Endpoint', () => {
        cy.visit('/'); // Öffnet die Startseite
        cy.contains('Load Greeting').click(); // Klickt auf den Button
        cy.get('#greeting').should('contain', 'Greetings from Letsboot!'); // Überprüft den Text
    });
});