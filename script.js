let selectedFood
let selectedFoodPrice = 0
let selectedDrink
let selectedDrinkPrice = 0
let selectedDessert
let selectedDessertPrice = 0
let foodPrice = 0
let drinkPrice = 0
let dessertPrice = 0
let finalPrice = 0

function selectFood(element) {
  const clickFood = document.querySelector('.food')
  if (clickFood !== null) {
    clickFood.classList.remove('click')
    clickFood.classList.remove('food')
  }
  const clickCheck = document.querySelector('.checkFood')
  if (clickCheck !== null) {
    clickCheck.classList.remove('check')
    clickCheck.classList.remove('checkFood')
  }

  selectedFood = element.querySelector('h3').innerHTML
  selectedFoodPrice = element.querySelector('h4').innerHTML
  element.classList.add('click')
  element.classList.add('food')
  element.querySelector('ion-icon').classList.add('check')
  element.querySelector('ion-icon').classList.add('checkFood')
  finalizar()
}

function selectDrink(element) {
  if (element.classList.contains('alcool')) {
    let idade
    while (isNaN(idade)) {
      idade = prompt('Qual é a sua idade? (somente números)')
    }
    if (idade < 18) {
      alert(
        'É proibida a venda de bebidas alcoolicas para menores de 18 anos \nFavor selecionar outro item'
      )
    } else {
      const clickDrink = document.querySelector('.drink')
      if (clickDrink !== null) {
        clickDrink.classList.remove('click')
        clickDrink.classList.remove('drink')
      }
      const clickCheck = document.querySelector('.checkDrink')
      if (clickCheck !== null) {
        clickCheck.classList.remove('check')
        clickCheck.classList.remove('checkDrink')
      }
      selectedDrink = element.querySelector('h3').innerHTML
      selectedDrinkPrice = element.querySelector('h4').innerHTML
      element.classList.add('click')
      element.classList.add('drink')
      element.querySelector('ion-icon').classList.add('check')
      element.querySelector('ion-icon').classList.add('checkDrink')
      finalizar()
    }
  } else {
    const clickDrink = document.querySelector('.drink')
    if (clickDrink !== null) {
      clickDrink.classList.remove('click')
      clickDrink.classList.remove('drink')
    }
    const clickCheck = document.querySelector('.checkDrink')
    if (clickCheck !== null) {
      clickCheck.classList.remove('check')
      clickCheck.classList.remove('checkDrink')
    }
    selectedDrink = element.querySelector('h3').innerHTML
    selectedDrinkPrice = element.querySelector('h4').innerHTML
    element.classList.add('click')
    element.classList.add('drink')
    element.querySelector('ion-icon').classList.add('check')
    element.querySelector('ion-icon').classList.add('checkDrink')
    finalizar()
  }
}

function selectDessert(element) {
  const clickDessert = document.querySelector('.dessert')
  if (clickDessert !== null) {
    clickDessert.classList.remove('click')
    clickDessert.classList.remove('dessert')
  }
  const clickCheck = document.querySelector('.checkDessert')
  if (clickCheck !== null) {
    clickCheck.classList.remove('check')
    clickCheck.classList.remove('checkDessert')
  }
  selectedDessert = element.querySelector('h3').innerHTML
  selectedDessertPrice = element.querySelector('h4').innerHTML
  element.classList.add('click')
  element.classList.add('dessert')
  element.querySelector('ion-icon').classList.add('check')
  element.querySelector('ion-icon').classList.add('checkDessert')
  finalizar()
}

function finalizar() {
  if (selectedFood && selectedDrink && selectedDessert) {
    let confirmButton = document.querySelector('.ready')
    confirmButton.classList.add('show')
    let waitingButton = document.querySelector('.not-ready')
    waitingButton.classList.remove('show')
  }
}

function confirmationBox() {
  document.querySelector('.selected-food').innerHTML = selectedFood
  document.querySelector('.selected-food-price').innerHTML = selectedFoodPrice
  document.querySelector('.selected-drink').innerHTML = selectedDrink
  document.querySelector('.selected-drink-price').innerHTML = selectedDrinkPrice
  document.querySelector('.selected-dessert').innerHTML = selectedDessert
  document.querySelector('.selected-dessert-price').innerHTML =
    selectedDessertPrice
  foodPrice = selectedFoodPrice.slice(2)
  foodPrice = foodPrice.replace(',', '.')
  foodPrice = Number(foodPrice)
  drinkPrice = selectedDrinkPrice.slice(2)
  drinkPrice = drinkPrice.replace(',', '.')
  drinkPrice = Number(drinkPrice)
  dessertPrice = selectedDessertPrice.slice(2)
  dessertPrice = dessertPrice.replace(',', '.')
  dessertPrice = Number(dessertPrice)
  finalPrice = foodPrice + drinkPrice + dessertPrice
  finalPrice = finalPrice.toFixed(2)
  finalPrice = finalPrice.replace('.', ',')
  document.querySelector('.total-price').innerHTML = `R$ ${finalPrice}`
  let showConfirmation = document.querySelector('.final-box')
  showConfirmation.classList.add('final-box-show')
  let hidePage = document.querySelector('.hide-page')
  hidePage.classList.add('show')
}

function cancel() {
  let showConfirmation = document.querySelector('.final-box')
  showConfirmation.classList.remove('final-box-show')
  let hidePage = document.querySelector('.hide-page')
  hidePage.classList.remove('show')
}

function sendOrder() {
  let client = ''
  let adress = ''
  while (client === '' || client === null) {
    client = prompt('Qual o seu nome?')
  }
  while (adress === '' || adress === null) {
    adress = prompt('Qual o endereço de entrega?')
  }
  let message = `Olá, gostaria de fazer o pedido: \n- Prato: ${selectedFood}\n- Bebida: ${selectedDrink}\n- Sobremesa: ${selectedDessert}\nTotal: R$ ${finalPrice}\n\nNome: ${client}\nEndereço: ${adress}`
  let finalMessage = encodeURIComponent(message)
  window.open('https://wa.me/5545999325655?text=' + finalMessage)
  let showConfirmation = document.querySelector('.final-box')
  showConfirmation.classList.remove('final-box-show')
  let sentOrder = document.querySelector('.order-sent')
  sentOrder.classList.add('order-sent-show')
}

function newOrder() {
  let sentOrder = document.querySelector('.order-sent')
  sentOrder.classList.remove('order-sent-show')
  let hidePage = document.querySelector('.hide-page')
  hidePage.classList.remove('show')
}
