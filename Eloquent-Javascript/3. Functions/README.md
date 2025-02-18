# **Functions**

## **What is a Function in JavaScript?**
A **function** in JavaScript is a reusable block of code that performs a specific task. Functions help in **modularizing** code, reducing redundancy, and improving readability.  

### **Basic Syntax**
```javascript
function functionName(parameters) {
    // Function body (code to execute)
    return result; // Optional
}
```

---

# **Types of Functions in JavaScript**
JavaScript provides different types of functions, each with its own behavior, use case, and limitations.

| Function Type            | Syntax Example | Use Case | Limitations |
|--------------------------|---------------|----------|-------------|
| **1. Function Declaration** | `function greet() {}` | Best for reusable functions | Hoisted but must be globally accessible |
| **2. Function Expression** | `const greet = function() {};` | Useful for assigning functions to variables | Not hoisted like declarations |
| **3. Arrow Function** | `const greet = () => {};` | Best for concise callbacks | No `this` binding |
| **4. Immediately Invoked Function Expression (IIFE)** | `(function() {})();` | Runs once immediately | Not reusable |
| **5. Generator Function** | `function* gen() {}` | Used for iteration with `yield` | Complex syntax |
| **6. Constructor Function** | `function Person() {}` | Used to create objects | Requires `new` keyword |
| **7. Method (Inside Object)** | `const obj = { method() {} };` | For defining behavior inside objects | Needs to be inside an object |

---

# **1. Function Declaration**
A function declaration is the most common way to define a function.

### **Example**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // → "Hello, Alice!"
```

### **Key Features**
✅ Hoisted (Can be called before declaration)  
✅ Reusable across different parts of code  
✅ Easy to read and understand  

### **Limitation**
❌ Cannot be **anonymous** (must have a name)  

### **When to Use?**
- When defining **general-purpose functions** that need to be reused multiple times.  
- Example: Utility functions like `calculateTotal()`, `fetchData()`.

---

# **2. Function Expression**
A function expression assigns a function to a variable.

### **Example**
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Bob")); // → "Hello, Bob!"
```

### **Key Features**
✅ Can be **anonymous**  
✅ Useful for **callbacks**  
✅ More control over execution (not hoisted)  

### **Limitation**
❌ Not hoisted (Cannot be used before defining it)  

### **When to Use?**
- When you need a function that doesn’t require a name.  
- When passing functions as **arguments** to other functions (e.g., event handlers, setTimeout).  

🔹 **Example: Using in `setTimeout`**
```javascript
setTimeout(function() {
    console.log("This runs after 2 seconds.");
}, 2000);
```

---

# **3. Arrow Function (`=>`)**
Arrow functions provide a **shorter syntax** and **lexical `this` binding**.

### **Example**
```javascript
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Charlie")); // → "Hello, Charlie!"
```

### **Key Features**
✅ **Shorter syntax** (no need for `{}` or `return` for single-line functions)  
✅ `this` value is **inherited from the surrounding scope**  

### **Limitations**
❌ No `arguments` object  
❌ Cannot be used as a constructor (`new` keyword won’t work)  
❌ Cannot use `this` inside an object method  

🔹 **Example of `this` issue:**
```javascript
const obj = {
    name: "John",
    sayHi: () => {
        console.log(this.name); // 'this' does NOT refer to obj, it refers to global scope
    }
};
obj.sayHi(); // → undefined
```

### **When to Use?**
- When writing **short functions**  
- When using **callbacks**, e.g., `map`, `filter`, `reduce`  

🔹 **Example: Arrow function in `map`**
```javascript
const numbers = [1, 2, 3];
const squared = numbers.map(n => n * n);
console.log(squared); // → [1, 4, 9]
```

### **When NOT to Use?**
- When using `this` inside **object methods**  
- When needing the `arguments` object  

---

# **4. Immediately Invoked Function Expression (IIFE)**
An IIFE executes **immediately after defining it**.

### **Example**
```javascript
(function() {
    console.log("This runs immediately!");
})();
```

### **Key Features**
✅ Avoids **polluting global scope**  
✅ Runs only once  

### **Limitation**
❌ **Not reusable**  

### **When to Use?**
- When you need a **self-contained** function that runs once (e.g., initialization code).  

---

# **5. Generator Function (`function*`)**
A generator function can **pause execution** and **resume** using `yield`.

### **Example**
```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // → 1
console.log(gen.next().value); // → 2
console.log(gen.next().value); // → 3
```

### **Key Features**
✅ Can **pause and resume execution**  
✅ Great for **lazy iteration**  

### **Limitation**
❌ More complex syntax  

### **When to Use?**
- When dealing with **infinite sequences** or **large data processing**  

🔹 **Example: Generating Fibonacci numbers**
```javascript
function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log(fib.next().value); // → 0
console.log(fib.next().value); // → 1
console.log(fib.next().value); // → 1
console.log(fib.next().value); // → 2
```

---

# **6. Constructor Function (`new`)**
A constructor function creates objects using the `new` keyword.

### **Example**
```javascript
function Person(name) {
    this.name = name;
}

const person1 = new Person("David");
console.log(person1.name); // → "David"
```

### **Key Features**
✅ Used to create **multiple objects of the same type**  

### **Limitation**
❌ Must be called with `new`  

### **When to Use?**
- When creating multiple **similar objects**  

🔹 **Example: Defining a Car**
```javascript
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

const car1 = new Car("Toyota", "Corolla");
console.log(car1.brand); // → "Toyota"
```

---

# **7. Object Methods**
A method is a function inside an object.

### **Example**
```javascript
const person = {
    name: "Eve",
    greet() {
        return `Hello, ${this.name}!`;
    }
};

console.log(person.greet()); // → "Hello, Eve!"
```

### **Key Features**
✅ Belongs to an **object**  

### **When to Use?**
- When defining **behavior** inside objects  

---

