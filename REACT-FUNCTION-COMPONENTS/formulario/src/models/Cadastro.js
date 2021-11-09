
function validarCPF(cpf){
    console.log(cpf.length)
    if(cpf.length !== 11){
      return{valido: false, texto:"CPF deve ter 11 digitos."}
    }else {
      return{valido: true, texto:""}}
  }
  
  
function validarSenha(senha){
    if(senha.length <4 || senha.length > 72){
      return{valido: false, texto:"Senha deve entre 04 e 72 dígitos."}
    }else {
      return{valido: true, texto:""}}
  }

  export {validarCPF, validarSenha};