# Testes Automatizados com Cypress – Fireleaf

Este repositório contém testes automatizados criados com **Cypress** para validar duas seções principais do site **Fireleaf**:

- Página de **Cadastro**
- **Homepage** (Página Inicial)

Os testes garantem que os principais elementos da interface funcionem corretamente, incluindo formulários, menus, FAQs e alertas.

---

## Testes incluídos (`cy.js`)

---

##  Página de Cadastro – `Cadastro.html`

### Teste 1: Verificar existência dos campos
O teste confirma que todos os campos obrigatórios existem:
- Nome  
- Email  
- Data de Nascimento  
- Senha  
- Confirmar Senha  
- Botão **Cadastrar**

---

### Teste 2: Formulário não pode ser enviado vazio
Quando o usuário tenta enviar o formulário sem preencher nada:
- Os campos ficam com estado `:invalid`
- O envio é bloqueado pelo navegador

---

### Teste 3: Preenchimento correto e envio
O teste:
1. Preenche todos os campos com valores válidos  
2. Clica em **Cadastrar**  
3. Aguarda o alerta do JS  
4. Confirma que o texto exibido é:

> **"Cadastro realizado com sucesso"**

---

### Teste 4: Senhas diferentes geram erro
O teste:
- Preenche o formulário com senhas que não coincidem  
- Envia o formulário  
- Verifica que aparece o alerta:

> **"As senhas não coincidem"**

---

---

##  Homepage – `Página (1).html`

### Teste 1: Menu abre e fecha corretamente
O teste verifica:
- Se o menu inicia com a classe `ativo` (aberto)
- Se ao clicar no botão de menu, a classe desaparece (menu fecha)

---

### Teste 2: FAQ abre apenas uma pergunta por vez
Funcionalidade verificada:
- Ao abrir uma pergunta, sua resposta aparece  
- Ao abrir outra, a anterior fecha automaticamente  

---

### Teste 3: Botão "Saiba mais" exibe o alerta correto
Quando o botão é clicado, o alerta exibido deve conter:

> **"Nosso sistema usa dados de satélites em tempo real"**

---

## Requisitos para rodar os testes

Antes de rodar os testes do Cypress, instale:

### Node.js  
Baixe em: https://nodejs.org/

### Cypress  
Dentro da pasta do projeto, execute:

```bash
npm install cypress --save-dev
