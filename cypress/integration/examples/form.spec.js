describe("Validar formulario", () => {
  it("Visitar site", () => {
    cy.visit("https://fabrica704.fabrica704.com.br/cliente/preregister");

    cy.get("#name")
      .type("Maria Aparecida")
      .should("have.value", "Maria Aparecida");

    cy.get("#email")
      .type("mariaap@test.com")
      .should("have.value", "mariaap@test.com");

    cy.get("#telphone")
      .type("85988725804")
      .should("have.value", "(85) 98872-5804");

    cy.get("input.select-dropdown").click();
    cy.get("ul.select-dropdown > li:nth-child(3)").click();

    cy.get('select').should('have.value', 'feminino');

    
    cy.get("#password")
      .type("123456")
      .should("have.value", "123456");
  });
});
