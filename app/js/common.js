$(function() {

	// get data via XMLHttpRequest with promise
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

		var testPizza = new Pizza('Hot Margarita', 'margarita', [{ "name": "Bacon", "price": 6.3 },{ "name": "Pepperoni", "price": 3.2 }]);
		console.log(testPizza.price);
		console.log(testPizza.create('data'));
		console.log(testPizza.meta.createdAt);

	}).catch(function(error) {
		console.log(error);
	});

	// post data via fetch
	function post(data) {
		return;
	}


	// main interface
	function Pizza(_name, _type, _toppings, _meta) {
		this.name = _name;
		this.type = _type;
		this.toppings = _toppings;
		this.meta = {};

		this.setData = function(data) {
			console.log('set data', data);
		}
		this.create = function(data) {
			this.meta.createdAt = (new Date()).toLocaleString();

			console.log('create', data);
		}
		this.update = function(data) {
			this.meta.updatedAt = (new Date()).toLocaleString();

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

	//pizza obj 

	var Pizza = {
		name: _name,
		type: _type,
		toppings: _toppings,
		meta: {},
		setData: function(data) {
			console.log('set data', data);
		},
		create: function(data) {
			this.meta.createdAt = (new Date()).toLocaleString();
			console.log('create', data);
		},
		update: function(data) {
			this.meta.updatedAt = (new Date()).toLocaleString();
			console.log('update', data);
		},
		delete: function(id) {
			console.log('delete', id);
		},
		showToppings: function() {
			console.log('show toppings');
		},
		hasTopping: function(topping) {
			return this.toppings.includes(topping);
		},
		price: toppings.reduce(function(sum, topping) {
			return sum + topping.price;
		}, 0)
	};

	
	//inherit

	var Margarita = {};

	Object.assign(Pizza);

});



	