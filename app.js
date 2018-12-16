//add to cart

var productsCount = document.getElementById('products-count')
console.log(productsCount)

var addToCartButtons = document.querySelectorAll('.add_to_cart')
console.log(addToCartButtons)

for (var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click',function() {
		var prevProductsCount = +productsCount.textContent
		productsCount.textContent = prevProductsCount + 1
	} )

}

//end add to cart

//slider
  $('.slider').slick({
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 2000,
  })

//quantity-block

var decrementButton = document.querySelectorAll('.decrement-button')[0]
var incrementButton = document.querySelectorAll('.increment-button')[0]
var quantityInput = document.querySelectorAll('.quantity-block input')[0]
var currentCount = +quantityInput.value

function countControl (a){

	if (a <= 1) {
		decrementButton.disabled = true 
	} else {
		decrementButton.disabled = false
	}
	decrementButton.disabled = a <= minCount

}

countControl(currentCount)

incrementButton.addEventListener('click',function(){
	var currentCount = +quantityInput.value
	var nextCount = currentCount + 1
	quantityInput.value = nextCount

	countControl(nextCount)
})

decrementButton.addEventListener('click',function(){
	var currentCount = +quantityInput.value
	var prevCount = currentCount - 1
	quantityInput.value = prevCount

	countControl(prevCount)
})