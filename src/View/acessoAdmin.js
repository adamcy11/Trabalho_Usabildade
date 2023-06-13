        
     let acesso = () =>{
        let nickname = document.getElementById('nickname').value;
        let senha = document.getElementById('senha').value;

        if(nickname== "admin" && senha== "1234"){ 
          `
          window.location.href = './main.html'
          
           `;

        }
    }