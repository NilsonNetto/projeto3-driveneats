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
    calcularValor()
  }
}

function calcularValor() {
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
  console.log(finalPrice)
  finalPrice = finalPrice.replace('.', ',')
}

function sendOrder() {
  client = prompt('Qual o seu nome?')
  adress = prompt('Qual o endereço de entrega?')
  let message = `Olá, gostaria de fazer o pedido: \n- Prato: ${selectedFood}\n- Bebida: ${selectedDrink}\n- Sobremesa: ${selectedDessert}\nTotal: R$ ${finalPrice}\n\nNome: ${client}\nEndereço: ${adress}`
  let finalMessage = encodeURIComponent(message)
  window.open('https://wa.me/5545999325655?text=' + finalMessage)
}
