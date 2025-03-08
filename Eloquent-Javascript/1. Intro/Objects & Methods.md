# **JavaScript Objects – Complete Guide**  

JavaScript objects are **key-value pairs** used to store multiple related values in a structured way. Objects allow you to group properties (data) and methods (functions) into a single entity.  

---

## **1. Creating Objects**
There are multiple ways to create an object in JavaScript.

### **1.1 Using Object Literal (Most Common)**
```javascript
let person = {
    name: "John",
    age: 30,
    isMarried: false
};
console.log(person);
```

### **1.2 Using `new Object()`**
```javascript
let car = new Object();
car.brand = "Tesla";
car.model = "Model X";
car.year = 2024;
console.log(car);
```

### **1.3 Using a Constructor Function**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let user1 = new Person("Alice", 25);
console.log(user1);
```

### **1.4 Using `Object.create()`**
```javascript
let studentPrototype = {
    greet: function() {
        console.log("Hello, Student!");
    }
};

let student = Object.create(studentPrototype);
student.name = "Emma";
console.log(student);
```

---

## **2. Accessing Object Properties**
You can access object properties in two ways:

### **Dot Notation (Preferred)**
```javascript
console.log(person.name); // "John"
console.log(car.brand);   // "Tesla"
```

### **Bracket Notation**
Useful when property names have spaces or special characters.
```javascript
let user = { "full name": "David Brown" };
console.log(user["full name"]); // "David Brown"
```

---

## **3. Modifying Object Properties**
You can update or add new properties.

### **Updating an Existing Property**
```javascript
person.age = 35;
console.log(person.age); // 35
```

### **Adding a New Property**
```javascript
person.city = "New York";
console.log(person);
```

### **Deleting a Property**
```javascript
delete person.isMarried;
console.log(person);
```

---

## **4. Object Methods (Functions in Objects)**
Objects can have methods (functions inside an object).

```javascript
let person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // "Hello, John"
```

### **Shorter Method Syntax**
```javascript
let user = {
    name: "Alice",
    greet() {  // No need for `function` keyword
        console.log("Hi, " + this.name);
    }
};
user.greet();
```

---

## **5. Looping Through Object Properties**
You can iterate over an object’s properties using `for...in`.

```javascript
let book = { title: "JavaScript Basics", author: "John Doe", year: 2023 };

for (let key in book) {
    console.log(key + ": " + book[key]);
}
```

---

## **6. Object Methods and Properties**
| **Method/Property**  | **Description** |
|----------------|---------------------------|
| `Object.keys(obj)`  | Returns an array of keys |
| `Object.values(obj)` | Returns an array of values |
| `Object.entries(obj)` | Returns an array of `[key, value]` pairs |
| `Object.assign(target, source)` | Copies properties from `source` to `target` |
| `Object.freeze(obj)` | Prevents modification of an object |
| `Object.seal(obj)` | Allows modification but prevents adding/removing properties |
| `Object.hasOwnProperty(prop)` | Checks if an object has a property |
| `Object.getOwnPropertyNames(obj)` | Returns all properties, including non-enumerable ones |
| `Object.create(proto)` | Creates a new object with the specified prototype |

### **Example: Using `Object.keys()`, `Object.values()`, and `Object.entries()`**
```javascript
let user = { name: "Emma", age: 22, city: "London" };

console.log(Object.keys(user));   // ["name", "age", "city"]
console.log(Object.values(user)); // ["Emma", 22, "London"]
console.log(Object.entries(user)); // [["name", "Emma"], ["age", 22], ["city", "London"]]
```

---

## **7. Object Copying & Cloning**
### **7.1 Using `Object.assign()`**
```javascript
let original = { a: 1, b: 2 };
let copy = Object.assign({}, original);
console.log(copy); // { a: 1, b: 2 }
```

### **7.2 Using Spread Operator (`...`)**
```javascript
let newCopy = { ...original };
console.log(newCopy); // { a: 1, b: 2 }
```

---

## **8. Preventing Object Modifications**
### **8.1 `Object.freeze()` (Completely Lock Object)**
```javascript
let obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob"; // Won't change
console.log(obj.name); // "Alice"
```

### **8.2 `Object.seal()` (Allow Modifying, But No Adding/Deleting)**
```javascript
let person = { name: "John" };
Object.seal(person);
person.name = "Jake"; // Allowed
person.age = 30; // Not allowed
console.log(person); // { name: "Jake" }
```

---

## **9. Object Prototypes & Inheritance**
### **9.1 Using Prototypes**
```javascript
let animal = {
    makeSound: function() {
        console.log("Some sound...");
    }
};

let dog = Object.create(animal);
dog.bark = function() {
    console.log("Woof woof!");
};

dog.makeSound(); // "Some sound..."
dog.bark();      // "Woof woof!"
```

### **9.2 Using Constructor Functions for Inheritance**
```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function() {
    console.log(this.name + " makes a sound");
};

let cat = new Animal("Kitty");
cat.makeSound(); // "Kitty makes a sound"
```

---

## **10. JSON (JavaScript Object Notation)**
JavaScript objects can be converted into JSON format and vice versa.

### **10.1 Convert Object to JSON (`JSON.stringify()`)**
```javascript
let user = { name: "Alice", age: 25 };
let jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":25}'
```

### **10.2 Convert JSON to Object (`JSON.parse()`)**
```javascript
let jsonData = '{"name":"Alice","age":25}';
let parsedObject = JSON.parse(jsonData);
console.log(parsedObject); // { name: "Alice", age: 25 }
```

---

## **Summary of JavaScript Objects**
| **Feature** | **Description** |
|------------|----------------|
| Object Creation | `{}` or `new Object()` |
| Accessing Properties | `obj.property` or `obj["property"]` |
| Modifying Properties | `obj.property = value` |
| Deleting Properties | `delete obj.property` |
| Object Methods | Functions inside objects |
| Looping | `for...in` |
| Copying Objects | `Object.assign()`, spread `{...}` |
| Prevent Modifications | `Object.freeze()`, `Object.seal()` |
| Inheritance | Prototypes, `Object.create()` |
| JSON Conversion | `JSON.stringify()`, `JSON.parse()` |

---
