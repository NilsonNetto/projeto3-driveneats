function select(food) {
  let selected = document.querySelector(`.${food}`)
  selected.classList.add('click')
  let mark = document.querySelector(`.${food} ion-icon`)
  mark.classList.add('check')
  let mainDish = document.querySelector(`.${food} h3`).innerHTML

  let mainDishPrice = document.querySelector(`.${food} h4`).innerHTML

  // colocar 3 if pra ver se foi selecionado principal, bebida ou sobremesa
  // e com isso adicionar um marcado falando que já tem 1 selecionado
}

if (
  document.querySelector('.prato-principal div.selected') &&
  document.querySelector('.bebida div.selected') &&
  document.querySelector('.sobremesa div.selected')
) {
  let confirmButton = document.querySelector('.ready')
  confirmButton.classList.add('show')
  let waitingButton = document.querySelector('.not-ready')
  confirmButton.classList.remove('show')
}

function sendOrder() {
  client = prompt('Qual o seu nome?')
  adress = prompt('Qual o endereço de entrega?')
  let message = `Olá, gostaria de fazer o pedido:
  -Prato: ${mainDish}
  -Bebida: ${drink}
  -Sobremesa: ${dessert}
  -Entregar para: ${client}
  -Endereço: ${adress}`
  window.location.replace('https://wa.me/5545999325655?text=' + message)
}
