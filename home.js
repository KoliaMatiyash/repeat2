// 4
const probject = {
  name: "Facebook",
  developer: {
    firstName: "Марк",
    lastName: "Цукерберг",
    address: {
      country: "Америка",
      city: "LA",
    },
  },
};
const {
  developer: {
    address: { country, city },
  },
} = probject;
console.log(country, city);

//5
const info = "Ivan;Ivanov;1990;ivanov@gmail.com";
const splitInfo = info.split(";");
console.log(splitInfo[2], splitInfo[3]);
//6
function Device(brand, model, price, color) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.color = color;
}
let samsung = new Device("Samsung", "x100", "1000 грн", "червоний");
let iphone = new Device("Apple", "iPhone 12", "25000 грн", "чорний");
let xiaomi = new Device("Xiaomi", "Redmi Note 10", "8000 грн", "синій");

console.log(
  `Телефон фірми ${samsung.brand}, модель ${samsung.model}, колір ${samsung.color}, ціна становить ${samsung.price}`
);
console.log(
  `Телефон фірми ${iphone.brand}, модель ${iphone.model}, колір ${iphone.color}, ціна становить ${iphone.price}`
);
console.log(
  `Телефон фірми ${xiaomi.brand}, модель ${xiaomi.model}, колір ${xiaomi.color}, ціна становить ${xiaomi.price}`
);
// 7
function calculate(...number) {
  const sum = number.reduce((acum, num) => acum + num, 0);
  return sum / number.length;
}
console.log(calculate(14, 54, 2));
const aver = [12, 84, 20];
console.log(calculate(...aver));
// 8
const users = [
  { firstName: "Максим", lastName: "Очеретний" },
  { firstName: "Анастасія", lastName: "Паламарчук" },
  { firstName: "Іван", lastName: "Іванюк" },
];
const updateUser = users.map((user) => ({ ...user, isSelected: false }));
console.log(updateUser);
