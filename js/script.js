document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""&& document.getElementById("telefone").value !=  ""){

    alert("Obrigado pelo contato!")

  }
  else{

    alert("Por favor, preencha os campos nome, e-mail, telefone!")
  }

}
  