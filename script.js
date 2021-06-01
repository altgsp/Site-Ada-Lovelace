document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario(){
  if(document.getElementById("nome").value != "" &&  document.getElementById("email").value != "" && document.getElementById("numero").value != ""){
     alert("Prontinho! você receberá as novidades por email.")
 }else{
      alert("Atenção: Preencha os campos de Nome, Email e Telefone.")
  }
}
