function carregar () {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
 

  if (hora <= 9 ) {
    hora = '0' + hora 
  }

  if (min <= 9) {
  min = '0'+ min
  }
  
  msg.innerHTML = `<p>Agora são:</p> <p><strong>${hora}</strong> horas e <strong> ${min}</strong> minutos.</p>`
  
  if (hora >= 0 && hora < 12) {
    msg.innerHTML+='Bom dia!'
    img.src  = "./img/manhã.png"
    document.body.style.background = '#dbaf76'
    if (hora <= 9) {
      hora = '0' + hora 
    }
    
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML+='Boa tarde!'
    img.src  = "./img/tarde.png"
    document.body.style.background = '##cd6f1d'
  } else {
    msg.innerHTML+='Boa Noite!'
    img.src  = "./img/noite.png"
    document.body.style.background = '#362525'
  }
  
  

}