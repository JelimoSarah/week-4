$("#placeOrder").click(function(){
var size = $('#size option:selected' ).val();
var crust =  $('#crust option:selected' ).val();
var topping =  $('#topping option:selected' ).val();
// console.log (size, crust, topping)

function Pizza(size, crust,topping ){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

var newOrder = new Pizza(size,crust,topping )

function priceOfOrder(){
    // var totalPrice = 0;
    var price = parseInt(newOrder.size) + parseInt(newOrder.crust) + parseInt(newOrder.topping);
    // let total =+ total + price;
    document.getElementById('charge').textContent = price;
}
priceOfOrder();
})


function chargePrice(){
    var choice = $('#delivery option:selected').val();
    if (choice == 20){
        alert("The delivery charge will be 100 Kenya Shillings.")
    }
    
}
