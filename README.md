# Testes Automatizados com Cypress – Fireleaf

Este repositório contém testes automatizados criados com **Cypress** para validar duas seções principais do site **Fireleaf**:

- Página de **Cadastro**
- **Homepage** (Página Inicial)

Os testes garantem que os principais elementos da interface funcionem corretamente, incluindo formulários, menus, FAQs e alertas.

---

## Testes incluídos (`cy.js`)

---

##  Página de Cadastro

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

##  Homepage

### Teste 1: Icones do menu redirecionando
O teste: 
- verifica se cada botão leva para seu respectivo caminho ou site, sendo eles:
- Inicio
- Denúnciar
- Notícias
- Informações

---
### Teste 2:
O teste:
- verifica a pokédex
- verifica o saiba mais

### Teste 3:
Deve redirecionar para o email, instagram e o site

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
