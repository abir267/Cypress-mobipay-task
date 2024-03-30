describe('template spec', () => {
  it('test1', () => {
    cy.visit("https://techinsightsblog.com/");

    cy.contains("Leave a comment").click();
    cy.get("#comment").type("Abir Arshad1122@@@");
    cy.get("#author").type("Abir Arshad");
    cy.get("#email").type("abirarshad0@gmail.com");
    cy.get("#url").type("https://github.com/abir267");
    cy.get("#wp-comment-cookies-consent").click();
    cy.get("#submit").click();
  })
})