const URLBASE = "http://127.0.0.1:3000";

let atualizar = true

//Aqui temos uma innetHTML dentro de forEach mostrandos todos as reviews pelo id do jogo
let getAllReview = () =>{
    let id= 15
    fetch(URLBASE +`/review?id=${id}`)
    .then(res=>res.json())
    .then(res=>{
        document.getElementById("listAllReview").innerHTML = "";
        res.forEach(res => {
            let line = `<div class="mt-4">
            <div class="flex items-start space-x-4">
             <img src="https://via.placeholder.com/50" alt="Avatar" class="w-12 h-12 rounded-full"> 
              <div class="relative flex-grow">
                <div class="bg-gray-100 rounded-md p-2">
                        
                        <h1 id="editReview${res.idReview}">${res.comment}</h1>                                                
               
                </div>
                <div class="absolute right-0 hidden">
                  <button class="bg-gray-200 hover:bg-lightgray text-gray-800 px-2 py-1 rounded-md" onclick="editReview(${res.idReview})">Editar</button>
                  <button class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md" onclick="deleteReview(${res.idReview})">Deletar</button>
                </div>
              </div>
            </div>
          </div>
          </br>`
            console.log(res.comment)
            document.getElementById("listAllReview").innerHTML += line;
        });
    })
}

let postRecord = () =>{
    let comment = document.getElementById("writtenReview").value;
    let id = 15

    fetch(URLBASE+`/review`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                "idGame":id,
                "comment":comment
                
            })
      })
    .then(res=>res.json())
    .then(res=>{
        if(!res)return;
        getAllReview();
    })
    .catch(()=>{
        alert("Não foi possivel fazer comentario");
    })
    document.getElementById("writtenReview").value = "";
    
}

let deleteReview = (idReview) => {

  fetch(URLBASE + `/review`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "idReview": idReview })
  })
    .then(res => res.json())
    .then(res => {
      if (!res) return;

      getAllReview();
      console.log(res);
    })
    .catch(() => {
      alert("Não exixte registro com esse id.");
    })

}

let editReview = (idReview) => {
  let comment = document.getElementById(`editReview${idReview}`)

  let contentComment = comment.innerText


  comment.innerHTML = `<textarea class="w-full rounded-md p-2 text-black bg-gray2 text-white" rows="1" placeholder="Adicionar comentário..." id="updateReview${idReview}" > ${contentComment} </textarea> <button class="bg-green-900 hover:bg-green-500 text-white px-2 py-2 rounded-md mt-2 bottom-0.5" onclick="updateReview(${idReview})">Salvar</button>`;

}

let updateReview = (idReview) => {
  let comment = document.getElementById(`updateReview${idReview}`).value;

  fetch(URLBASE + `/review`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "idReview": idReview,
      "comment": comment

    })
  })
    .then(res => res.json())
    .then(res => {
      if (!res) return;
      getAllReview();
    })
    .catch(() => {
      alert("Não foi possivel fazer comentario");
    })



}
    getAllReview();