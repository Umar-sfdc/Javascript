# **JavaScript Strings – Complete Guide with Methods & Examples**
A **string** in JavaScript is a sequence of characters enclosed in **single (`'`), double (`"`), or backticks (` `` `)**. JavaScript provides various built-in methods to manipulate strings efficiently.

---

## **1. Declaring Strings**
JavaScript allows creating strings in multiple ways:

### **Using String Literals (Recommended)**
```javascript
let str1 = "Hello, World!";
let str2 = 'JavaScript Strings';
let str3 = `Template Literals`;
```

### **Using the `String` Constructor (Not Recommended)**
```javascript
let str4 = new String("I am a string object"); 
console.log(typeof str4); // Output: object
```
> ⚠️ The `String` object creates an object, not a primitive string.

---

## **2. Escape Characters in Strings**
Escape characters are used to insert special characters in a string.

| Escape Sequence | Description      |
|----------------|-----------------|
| `\'`           | Single quote     |
| `\"`           | Double quote     |
| `\\`           | Backslash        |
| `\n`           | New line         |
| `\t`           | Tab space        |
| `\r`           | Carriage return  |

### **Example**
```javascript
let str = "Hello \"JavaScript\" \n Welcome to Strings!";
console.log(str);
```

---

## **3. String Methods in JavaScript**
JavaScript provides various built-in methods to manipulate strings.

### **A. Finding Length**
```javascript
let text = "Hello, JavaScript!";
console.log(text.length); // Output: 18
```

---

### **B. Accessing Characters**
```javascript
let str = "JavaScript";
console.log(str[0]);  // Output: J
console.log(str.charAt(1)); // Output: a
console.log(str.at(-1));  // Output: t (ES2022+)
```

---

### **C. Changing Case**
```javascript
let msg = "JavaScript";
console.log(msg.toUpperCase()); // Output: JAVASCRIPT
console.log(msg.toLowerCase()); // Output: javascript
```

---

### **D. Searching in Strings**
| Method             | Description |
|--------------------|-------------|
| `indexOf()`       | Finds the index of the first occurrence. |
| `lastIndexOf()`   | Finds the index of the last occurrence. |
| `includes()`      | Checks if a substring exists (returns `true/false`). |
| `startsWith()`    | Checks if a string starts with a specific value. |
| `endsWith()`      | Checks if a string ends with a specific value. |

#### **Examples**
```javascript
let text = "JavaScript is amazing";

console.log(text.indexOf("is")); // Output: 11
console.log(text.lastIndexOf("a")); // Output: 14
console.log(text.includes("amazing")); // Output: true
console.log(text.startsWith("Java")); // Output: true
console.log(text.endsWith("ing")); // Output: true
```

---

### **E. Extracting a Substring**
| Method         | Description |
|---------------|-------------|
| `slice(start, end)`  | Extracts part of a string. |
| `substring(start, end)` | Similar to `slice()`, but does not accept negative indexes. |
| `substr(start, length)` | Extracts characters from a given start position with a specified length. |

#### **Examples**
```javascript
let text = "JavaScript Programming";

console.log(text.slice(0, 10)); // Output: JavaScript
console.log(text.substring(0, 10)); // Output: JavaScript
console.log(text.substr(4, 6)); // Output: Script
```

---

### **F. Replacing Text**
| Method        | Description |
|--------------|-------------|
| `replace(old, new)` | Replaces first match. |
| `replaceAll(old, new)` | Replaces all matches (ES2021). |

#### **Example**
```javascript
let text = "Hello JavaScript, JavaScript is great!";
console.log(text.replace("JavaScript", "Python")); // Output: Hello Python, JavaScript is great!
console.log(text.replaceAll("JavaScript", "Python")); // Output: Hello Python, Python is great!
```

---

### **G. Splitting & Joining Strings**
| Method  | Description |
|---------|-------------|
| `split(separator)` | Splits a string into an array. |
| `join(separator)` | Joins array elements into a string. |

#### **Example**
```javascript
let text = "Apple, Banana, Cherry";
let fruits = text.split(", "); 
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

let joinedText = fruits.join(" - ");
console.log(joinedText); // Output: Apple - Banana - Cherry
```

---

### **H. Trimming Spaces**
| Method | Description |
|--------|-------------|
| `trim()` | Removes whitespace from both ends. |
| `trimStart()` | Removes leading whitespace. |
| `trimEnd()` | Removes trailing whitespace. |

#### **Example**
```javascript
let text = "   JavaScript   ";
console.log(text.trim()); // Output: "JavaScript"
console.log(text.trimStart()); // Output: "JavaScript   "
console.log(text.trimEnd()); // Output: "   JavaScript"
```

---

### **I. Repeating Strings**
```javascript
let text = "Hello ";
console.log(text.repeat(3)); // Output: Hello Hello Hello
```

---

### **J. Converting to String**
```javascript
let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"
```

---

### **4. Template Literals (Backticks `` ` ` `)**
Template literals provide **multi-line** and **embedded expressions**.

#### **Example**
```javascript
let name = "Alice";
let age = 25;

let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
```

---

## **5. Comparing Strings**
JavaScript compares strings **lexicographically** (alphabetically by Unicode values).

```javascript
console.log("apple" > "banana"); // false (because "a" < "b")
console.log("Zebra" < "apple"); // true (Uppercase letters come before lowercase in Unicode)
```

---

## **Summary Table of String Methods**
| Method | Description |
|--------|-------------|
| `.length` | Returns string length |
| `.charAt(index)` | Returns character at index |
| `.indexOf(substring)` | Finds first occurrence |
| `.lastIndexOf(substring)` | Finds last occurrence |
| `.includes(substring)` | Checks if substring exists |
| `.startsWith(substring)` | Checks if starts with |
| `.endsWith(substring)` | Checks if ends with |
| `.toUpperCase()` | Converts to uppercase |
| `.toLowerCase()` | Converts to lowercase |
| `.slice(start, end)` | Extracts substring |
| `.replace(old, new)` | Replaces first occurrence |
| `.replaceAll(old, new)` | Replaces all occurrences |
| `.split(separator)` | Splits into array |
| `.trim()` | Removes spaces |
| `.repeat(n)` | Repeats string |
| `.concat(string)` | Joins strings |

---
