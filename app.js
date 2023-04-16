function encriptarTexto() {
    const texto = document.getElementById("texto").value;
    let textoEncriptado = "";
    const clave = 3; // Desplazamiento en el alfabeto
  
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
      if (letra.match(/[a-z]/i)) {
        let codigoAscii = letra.charCodeAt(0);
        if (codigoAscii >= 65 && codigoAscii <= 90) {
          letra = String.fromCharCode(((codigoAscii - 65 + clave) % 26) + 65);
        } else if (codigoAscii >= 97 && codigoAscii <= 122) {
          letra = String.fromCharCode(((codigoAscii - 97 + clave) % 26) + 97);
        }
      }
      textoEncriptado += letra;
    }
    
    document.getElementById("textoEncriptado").textContent = textoEncriptado; // Mostrar el texto encriptado
    document.getElementById("textoDesencriptado").value = ""; // Limpiar el campo de texto desencriptado
  }
  
  function desencriptarTexto() {
    const textoEncriptado = document.getElementById("textoEncriptado").textContent;
    let textoDesencriptado = "";
    const clave = 3; // Desplazamiento en el alfabeto
  
    for (let i = 0; i < textoEncriptado.length; i++) {
      let letra = textoEncriptado[i];
      if (letra.match(/[a-z]/i)) {
        let codigoAscii = letra.charCodeAt(0);
        if (codigoAscii >= 65 && codigoAscii <= 90) {
          letra = String.fromCharCode(((codigoAscii - 65 - clave + 26) % 26) + 65);
        } else if (codigoAscii >= 97 && codigoAscii <= 122) {
          letra = String.fromCharCode(((codigoAscii - 97 - clave + 26) % 26) + 97);
        }
      }
      textoDesencriptado += letra;
    }
    
    document.getElementById("textoDesencriptado").value = textoDesencriptado; // Mostrar el texto desencriptado
  }
  