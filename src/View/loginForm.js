const URLBASE = "http://127.0.0.1:3000";

  let login = () =>{
    let nickname = document.getElementById('nickname').value;
    let senha = document.getElementById('senha').value;
  
    fetch(URLBASE+'/login', { 
      method: 'POST',
      headers: {'Content-Type': 'application/json', },
      body: JSON.stringify({
        "nickname": nickname,
        "senha": senha
      }),
    }).then((res) => {
        if (res.ok) {
          // Login bem-sucedido
          window.location.href = './main.html';
        } else if (res.status === 401) {
          // Credenciais inválidas
          alert('Credenciais inválidas');
        } else {
          // Erro no servidor
          alert('Erro no servidor');
        }
      })
      .catch((error) => {
        console.error('Erro se conectar no banco de dados:', error);
        alert(error);
        });
        }
      