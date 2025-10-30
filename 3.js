// Пользователи
let users = {
  user1: {name: "Иван", age: 25, city: "Москва"},
  user2: {name: "Мария", age: 30, city: "СПб"}
};

// Заказы  
let orders = {
  order1: {userId: "user1", restaurant: "СушиВесла", sum: 1200},
  order2: {userId: "user2", restaurant: "ПиццаТемпо", sum: 800}
};

// Рестораны
let restaurants = {
  "СушиВесла": {cuisine: "японская", rating: 4.5},
  "ПиццаТемпо": {cuisine: "итальянская", rating: 4.2}
};

// Вывод информации по условию
if (orders.order1.sum > 1000) {
  console.log(users.user1.name + " заказал в " + orders.order1.restaurant);
}