$(function() {

	// get data via XMLHttpRequest
	function get(url) {
		return new Promise(function(resolve, reject) {
			var xhttp = new XMLHttpRequest();
			xhttp.open('GET', url, true);
			xhttp.onload = function() {
				if (xhttp.status == 200) {
					resolve(JSON.parse(xhttp.response));
				} else {
					reject(xhttp.statusText);
				}
			};
			xhttp.onerror = function() {
				reject(xhttp.statusText);
			};
			xhttp.send();
		})
	}

	var promise = get('data/pizza.json');
	promise.then(function(pizzas) {
		_pizzas = pizzas;
		console.log(pizzas);
		return get('data/toppings.json');
	}).then(function(toppings) {
		_toppings = toppings;
		console.log(toppings);
	}).catch(function(error) {
		console.log(error);
	})

	var _pizzas = [

        {
            "name": "Cool NewYorker",
            "type": "NewYorker",
            "toppings": [
                { "name": "Bacon", "price": 6.3 },
                { "name": "Pepperoni", "price": 3.2 },
                { "name": "Ham", "price": 7 },
                { "name": "Mushrooms" , "price": 4 }
            ]
        },
        {
            "name": "Awesome Margarita",
            "type": "Margarita",
            "toppings": [
                { "name": "Tomatotes", "price": 2.4 },
                { "name": "Herbs", "price": 2 },
                { "name": "Cheese", "price": 5.2 }
            ]
        },
        {
            "name": "Fine Hawaiian",
            "type": "Hawaiian",
            "toppings": [
                { "name": "Ham", "price": 7 },
                { "name": "Pineapple", "price": 4.8 },
                { "name": "Sweetcorn", "price": 3.5 }
            ]
        }
    ];
	var _toppings = [

          { "name": "Bacon", "price": 6.3 },
          { "name": "Pepperoni", "price": 3.2 },
          { "name": "Tomatotes", "price": 2.4 },
          { "name": "Mushrooms" , "price": 4 },
          { "name": "Herbs", "price": 2 },
          { "name": "Chicken", "price": 5.7 },
          { "name": "Pineapple", "price": 4.8 },
          { "name": "Ham", "price": 7 },
          { "name": "Cheese", "price": 5.2 },
          { "name": "Sweetcorn", "price": 3.5 }
     ];



	// main interface
	function Pizza(_name, _type, _toppings, _meta) {
		this.name = _name;
		this.type = _type;
		this.toppings = _toppings;
		this.meta = _meta;

		this.setData = function(data) {
			console.log('set data', data);
		}
		this.create = function(data) {
			console.log('create', data);
		}
		this.update = function(data) {
			console.log('update', data);
		}
		this.delete = function(id) {
			console.log('delete', id);
		}
		this.showToppings = function() {
			console.log('show toppings');
		}
		this.hasTopping = function(topping) {
			return this.toppings.includes(topping);
		}
		this.price = this.toppings.reduce(function(sum, topping) {
			return sum + topping.price;
		}, 0)
	}

	var testPizza = new Pizza('Hot Margarita', 'margarita', [{ "name": "Bacon", "price": 6.3 },{ "name": "Pepperoni", "price": 3.2 }]);

	console.log(testPizza.price);


	// let test = 'bbb';

	// console.log('test', test);

});



	