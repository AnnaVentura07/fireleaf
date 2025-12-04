describe("Página de Cadastro - Fireleaf", () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/Cadastro.html');
  });


  it("carrega todos os campos obrigatórios do formulário", () => {

    cy.get("#nome").should("exist");
    cy.get("#email").should("exist");
    cy.get("#data-nascimento").should("exist");
    cy.get("#senha").should("exist");
    cy.get("#confirmar").should("exist");

    cy.contains("button", "Cadastrar").should("exist");
  });

  it("não permite enviar o formulário com campos vazios", () => {

    cy.get("button[type='submit']").click();

    cy.get("#nome:invalid").should("exist");
    cy.get("#email:invalid").should("exist");
    cy.get("#data-nascimento:invalid").should("exist");
    cy.get("#senha:invalid").should("exist");
    cy.get("#confirmar:invalid").should("exist");
  });

  it("preenche o formulário corretamente", () => {

    cy.get("#nome").type("Anna Luisa");
    cy.get("#email").type("annaluisa@gmail.com");
    cy.get("#data-nascimento").type("2007-01-07");
    cy.get("#senha").type("senha123");
    cy.get("#confirmar").type("senha123");

    cy.get("button[type='submit']").click();

    cy.on("window:alert", (msg) => {

      expect(msg).to.contains("Cadastro realizado com sucesso");
    });
  });

  it("mostra erro se as senhas forem diferentes", () => {

    cy.get("#nome").type("Anna Luisa");
    cy.get("#email").type("annaluisa@gmail.com");
    cy.get("#data-nascimento").type("2007-01-07");
    cy.get("#senha").type("senha123");
    cy.get("#confirmar").type("outrasenha");

    cy.get("button[type='submit']").click();

    cy.on("window:alert", (msg) => {

      expect(msg).to.contains("As senhas não coincidem");
    });

    it('Redireciona para página de cadastro', () => {
      cy.contains('a', 'Já tem conta? Faça login')
        .should('have.attr', 'href', 'login1.html')
    });
  });
});

describe("Fireleaf - Testes de Interface", () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/homepage.html');
  });

describe('Botões do menu', () => {  
  it('Deve redirecionar para a página inicial corretamente', () => {
    cy.get('nav.menu-nav')
      .contains('Início')
      .should('have.attr', 'href', '#')
  });

  it('Deve redirecionar para a página de denúncia corretamente', () => {
    cy.get('nav.menu-nav')
      .contains('Denunciar') 
      .should('have.attr', 'href', 'Denúncia.html (1).html') 
  });

  it('Deve redirecionar para o site da globo corretamente', () => {
    cy.get('nav.menu-nav')
      .contains('Notícias')
      .should('have.attr', 'href', 'https://g1.globo.com/jornal-nacional/noticia/2025/01/22/area-devastada-por-queimadas-aumenta-quase-80percent-no-brasil-em-2024-amazonia-foi-bioma-mais-afetado.ghtml') // Valida o caminho
  });

  it('Deve redirecionar para a página "home" corretamente', () => {
    cy.get('nav.menu-nav')
      .contains('Informações')
      .should('have.attr', 'href', 'HOME.html')
  });
})

describe('Conteúdo principal', () => {  

  it('Deve redirecionar para a API dos pokemons corretamente', () => {
    cy.get('.pokedex-section')
      .contains('Ver Pokédex')
      .should('have.attr', 'href', 'Anninha.html')
  });

  it("Deve mostrar o alerta ao clicar no botão 'Saiba mais'", () => {
    cy.get('.btn-saiba')
      .should('have.attr', 'href', 'https://www.gov.br/pt-br/servicos/obter-dados-de-queimadas')
  });
  });

describe('Rodapé', () => {  

  it('Deve redirecionar para o email por um apliativo externo', () => {
    cy.get('nav.contatos')
      .contains('projetoace@fireleaf.com')
      .should('have.attr', 'href', 'mailto:projetoace@fireleaf.com')
  });

  it('Deve redirecionar para o instagram', () => {
    cy.get('nav.contatos')
      .contains('@fireleaf.oficial')
      .should('have.attr', 'href', 'https://instagram.com/fireleaf.oficial')
  });

  it('Deve redirecionar para o site', () => {
    cy.get('nav.contatos')
      .contains('www.fireleafsite.com')
      .should('have.attr', 'href', 'https://www.fireleafsite.com')
  });


  });
})

it('cor', function() {});
