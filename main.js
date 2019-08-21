const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const mensagem = document.querySelector('#mensagem');
const buttonSubmit = document.querySelector('.enviar-form');
console.log(nome.value, email.value, mensagem.value);

function verificaNome(nome) {
  // Nome: deve conter pelo menos 2 palavras e mais de 7 caracteres
  let nomeInput = nome.trim();
  let nomeRecebido = [];
  nomeRecebido = nomeInput.split(' ');

  if (nomeInput.length === 0 || nomeInput.length <= 7) {
    erroFeedBackName();
  } else if (!nomeRecebido.length >= 2) {
    erroFeedBackName();
  } else {
    return true;
  }
}

function verificaEmail(email) {
  // E-mail: deve conter o @caractere precedido e seguido por pelo menos 1 caractere
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (reg.test(email)) {
    return true;
  } else {
    erroFeedBackEmail();
  }
}

function verificaMensagem(mensagem) {
  // Mensagem: deve conter pelo menos 4 palavras e 20 caracteres
  let mensagemInput = mensagem.trim();
  let mensagemRecebida = [];
  mensagemRecebida = mensagemInput.split(' ');

  if (mensagemInput.length === 0 || mensagemInput.length <= 20) {
    erroFeedBackMensagem();
  } else if (!mensagemRecebida.length >= 4) {
    erroFeedBackMensagem();
  } else {
    return true;
  }
}

function erroFeedBackName() {
  let elem = document.querySelector('.input-nome').innerHTML;

  const output = `
    <button class="cancel">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </button>

    <div class="mensagem-erro">
      <span><i class="fa fa-caret-up" aria-hidden="true"></i></span>
      <p>Insira seu nome completo.</p>
    </div>
  `;

  elem = elem + output;
  document.querySelector('.input-nome').innerHTML = elem;
  document.getElementById('nome').classList.add('check-alert');
}

function erroFeedBackEmail() {
  let elem = document.querySelector('.input-email').innerHTML;

  const output = `
    <button class="cancel">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </button>

    <div class="mensagem-erro">
      <span><i class="fa fa-caret-up" aria-hidden="true"></i></span>
      <p>Insira um email válido.</p>
    </div>
  `;

  elem = elem + output;
  document.querySelector('.input-email').innerHTML = elem;
  document.getElementById('email').classList.add('check-alert');
}

function erroFeedBackMensagem() {
  let elem = document.querySelector('.textarea-mensagem').innerHTML;

  const output = `
    <button class="cancel">
      <i class="fa fa-times-circle" aria-hidden="true"></i>
    </button>

    <div class="mensagem-erro">
      <span><i class="fa fa-caret-up" aria-hidden="true"></i></span>
      <p>A mensagem deve conter pelo menos 4 palavras e 20 caracteres</p>
    </div>
  `;

  elem = elem + output;

  document.querySelector('.textarea-mensagem').innerHTML = elem;
  document.getElementById('mensagem').classList.add('check-alert');
}

function sucessoFeedBackMensagem() {
  const output = `
  <p id="mensagem-sucesso"><em>Sua mensage foi enviada com sucesso.</em></p>
  `;
  let elem = document.querySelector('.form-contact h3');

  elem.insertAdjacentHTML('afterend', output);
}

buttonSubmit.addEventListener('click', () => {
  event.preventDefault();
  const form = document.querySelector('#formulario');

  let nome = verificaNome(form.nome.value);
  let email = verificaEmail(form.email.value);
  let mensagem = verificaMensagem(form.mensagem.value);

  if (nome == true && email == true && mensagem == true) {
    sucessoFeedBackMensagem();
  }

  form.nome.value = '';
  form.email.value = '';
  form.mensagem.value = '';
});
