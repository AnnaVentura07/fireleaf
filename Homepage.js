// Grupo de todos os testes do site Fireleaf
describe("Fireleaf - Testes de Interface", () => {
 
  // Roda antes de cada teste
  // Abre a página de novo para garantir que todos os testes comecem iguais
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/P%C3%A1gina%20(1).html'); // Abre o arquivo HTML do site
  });

  // Teste 1: Verifica se o menu abre e fecha
  it("abre e fecha o menu ao clicar no botão", () => {

    // Pega o botão do menu
    cy.get(".menu").as("btnMenu");

    // Pega o menu que abre e fecha
    cy.get(".menu-nav").as("menuNav");

    // Abre o menu
    cy.get("@btnMenu").click();

    // Confere se o menu realmente abriu
    cy.get("@menuNav").should("have.class", "ativo");

    // Fecha o menu
    cy.get("@btnMenu").click();

    // Confere se o menu fechou
    cy.get("@menuNav").should("not.have.class", "ativo");
  });

  // Teste 2: Verifica se o FAQ abre uma pergunta por vez
  it("abre uma pergunta do FAQ e fecha outras", () => {

    // Pega todos os botões do FAQ
    cy.get(".faq-btn").as("faqBtns");

    // Abre o primeiro FAQ
    cy.get("@faqBtns").eq(0).click();

    // Confirma que a resposta do primeiro FAQ apareceu
    cy.get("@faqBtns")
      .eq(0)
      .next(".resposta-faq")
      .should("exist");

    // Abre o segundo FAQ
    cy.get("@faqBtns").eq(1).click();

    // Confirma que o primeiro FAQ fechou
    cy.get("@faqBtns")
      .eq(0)
      .next(".resposta-faq")
      .should("not.exist");

    // Confirma que o segundo FAQ abriu
    cy.get("@faqBtns")
      .eq(1)
      .next(".resposta-faq")
      .should("exist");
  });

  // Teste 3: Verifica se aparece um alerta ao clicar em "Saiba Mais"
  it("mostra o alerta ao clicar no botão 'Saiba mais'", () => {

    // Clica no botão
    cy.get(".btn-saiba").click();

    // Confere se o alerta mostra a mensagem certa
    cy.on("window:alert", (msg) => {
      expect(msg).to.contains(
        "Nosso sistema usa dados de satélites em tempo real"
      );
    });
  });

});