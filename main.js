$("#placeOrder").click(function(){
var size = $('#size option:selected' ).val();
var crust =  $('#crust option:selected' ).val();
var topping =  $('#topping option:selected' ).val();
console.log (size, crust, topping)

function Pizza(size, crust,topping ){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

var newOrder = new Pizza(document.getElementById("size").value,document.getElementById("crust").value,document.getElementById("topping").value )

function priceOfOrder(){
    var price = newOrder.size + newOrder.crust + newOrder.topping;
    console.log(price) ;
}

})