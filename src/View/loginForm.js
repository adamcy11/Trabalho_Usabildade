document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nickname = document.getElementById('nickname').value;
    const senha = document.getElementById('senha').value;
  
    fetch('/login', { method: 'POST', headers: {'Content-Type': 'application/json', }, body: JSON.stringify({nickname, senha}),
    }).then((res) => {
        if (res.ok) {
          // Login bem-sucedido
          window.location.href = 'main.html';
        } else if (res.status === 401) {
          // Credenciais inválidas
          alert('Credenciais inválidas');
        } else {
          // Erro no servidor
          alert('Erro no servidor');
        }
      })
      .catch((error) => {
        console.error('Erro:', error);
        alert('Ocorreu um erro na solicitação. Verifique a conexão com o servidor.');
        });
        });