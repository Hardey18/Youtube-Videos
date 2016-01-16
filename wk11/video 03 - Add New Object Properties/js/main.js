// 3 restaurant objects created using literal notation
// var osha = {
// 	name: 'Osha Thai',
// 	seats: 55,
//  booked: 25,
// 	food: "Thai"
// }
// var oyama = {
// 	name: 'Oyama',
// 	seats: 20,
//  booked: 15,
// 	food: "Sushi"
// }
// var saroor = {
// 	name: 'Saroor',
// 	seats: 40,
//  booked: 25,
// 	food: "Indian"
// }

// 3 restaurant objects created using constructor notation
function Restaurant(name, seats, booked, food) {
	// the name for the prototype will equal the name argument passed in
	this.name = name
	// the seats for the prototype will equal the seat argument passed in
	this.seats = seats
	// the number of booked seats for the prototype will equal the book argument passed in
	this.booked = booked
	// the food for the prototype will equal the food argument passed in
	this.food = food
}

// create a new osha restaurant
var osha = new Restaurant('Osha Thai', 55, 25, 'Thai')
// create a new oyama restaurant
var oyama = new Restaurant('Oyama', 20, 15, 'Sushi')
// create a new saroor restaurant
var saroor = new Restaurant('Saroor', 40, 25, 'Indian')

console.log(osha.name)
console.log(saroor.seats)
console.log(saroor.booked)