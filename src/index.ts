// type User = {
//   id: number;
//   name: string;
// };

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name);
// };

// const users: User[] = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Kate" },
// ];

//! enum задає сталі константи зі сталими значеннями
// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

// const buttonSize = Sizes.small;

// ?   функції які нічого не повертають, типу eventListener , callback використовуємо void

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// // }

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function greeting(user: User): void {
//   console.log(`Hello ${user.name}`);
// }

// function constructorUser(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

// // & що робити якщо ключем обʼєкту є метод

// type Car = {
//   color: string;
//   price: number;
//   currency: string;
//   start: () => {};

//   colorCheck: (color: string) => string;
// };

// const Car = {
//   color: "red",
//   price: 2000,
//   currency: "USD",

//   start() {
//     console.log("Start");
//   },

//   colorCheck: function (color: string) {
//     console.log("This", this.color);
//   },
// };

// type User = {
//   name: string;
//   age: number;

//   role?: string;
// };

// const user: User = {
//   name: "bob",
//   age: 12,
// };

// const admin: User = {
//   name: "John",
//   age: 25,
//   role: "Admin",
// };

// ^ індексовані властивості // для створення універсальних типізаторів

// type Goods = {
//   [key: string]: number;
// }

// const fruits: Goods = {
//   apple: 15,
//   banana: 30,
//   orange: 30,
// }

// const frozenGoods: Goods = {
//   icecream: 25,
//   fish: 40,
//   meat: 50,
// }

// type MixedInfo = {
//   [key: string]: string | number;
// };

// const userInfo: MixedInfo = {
//   name: "John",
//   age: 25,
//   country: "Ukraine",
// };

// const bookDetails: MixedInfo = {
//   title: "Bible",
//   pageCount: 1420,
// };

//&    generic
//&   створюють загальні функції, класи, що можуть працювати з різними вхідними типами і зберігати типізацію.

// function idenity<T>(arg: T): T {
//   return arg;
// }

// let output1 = idenity<string>("myString");
// let output2 = idenity<number>(100);

//^ створюємо універсальну функцію, що може обертати будь-який масив туди-назад
// function reverse<T>(items: T[]): T[] {
//   return items.reverse();
// }

// let numbers = reverse<number>([1, 2, 3, 4, 5]);
// console.log(numbers);

// let strings = reverse<string>(["a", "b", "c", "d", "e"]);
// console.log(strings);

// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);
//   return arg;
// }

//? складний generic дає змогу робити додаткову перевірку типів в середині обʼєкту та ретьорну

// function lengthOfObject<T extends { count: number }>(obj: T): number {
//   return obj.count;
// }

// console.log(lengthOfObject({ name: "Earth", count: 1000 }));

// перевіряємо чи ключ є ключем нашого обʼєкту... для перевірки використовуємо extends умова
// function getProperty<ObjectType, Key extends keyof ObjectType>(
//   obj: ObjectType,
//   key: Key
// ): ObjectType[Key] {
//   return obj[key];
// }

// let student = {
//   name: "John",
//   age: 25,
//   course: "TS",
// };

// let studentName = getProperty(student, "name");
// console.log(studentName);

// let studentAdress = getProperty(student, "address");
// console.log(studentAdress); //undefined

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// partial - дозволяє використовувати не всі поля обʼєкту
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo1: Todo = {
//   title: "Todo",
//   description: "Todo description",
//   completed: false,
// };

// const todo2 = updateTodo(todo1, {
//   description: "new description",
// });

// console.log(todo2);

// метод PUT - обовязково прердати всі поля обʼєкту
// метод PATCH - можна передати не всі поля обʼєкту
