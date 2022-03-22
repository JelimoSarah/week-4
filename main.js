function Pizza(size, crust,topping ){
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

var newOrder = new Pizza(document.getElementById("size").value,document.getElementById("crust").value,document.getElementById("topping").value )

function priceOfOrder(){
    var price = newOrder.size + newOrder.crust + newOrder.topping;
    return price;
}