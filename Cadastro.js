document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const dataNascimento = document.getElementById("data-nascimento").value;
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if (!nome || !email || !dataNascimento || !senha || !confirmar) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (senha !== confirmar) {
      alert("As senhas não coincidem.");
      return;
    }

    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!senhaForte.test(senha)) {
      alert("A senha deve conter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
      return;
    }

    const usuario = {
      nome: nome,
      email: email,
      dataNascimento: dataNascimento,
      senha: senha
    };

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const emailExistente = usuarios.find(u => u.email === email);
// Redireciona automaticamente para o login
    if (emailExistente) {
      alert("Este e-mail já está cadastrado.");
      return;
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    form.reset();
    
    
    window.location.href = "login1.html";
  });
});
