# **JavaScript Numbers & Math Functions – Complete Guide**  

In JavaScript, **numbers** are a primitive data type used for arithmetic operations. Unlike other programming languages, JavaScript **does not differentiate** between integers and floating-point numbers—all numbers are stored as **floating-point (64-bit IEEE 754 format)**.

---

## **1. Declaring Numbers in JavaScript**
Numbers can be declared in different ways:

```javascript
let num1 = 42;  // Integer
let num2 = 3.14; // Floating point
let num3 = 1e6;  // Exponential notation (1 × 10⁶ = 1000000)
let num4 = 0b1010; // Binary (10 in decimal)
let num5 = 0o52;   // Octal (42 in decimal)
let num6 = 0x2A;   // Hexadecimal (42 in decimal)

console.log(num1, num2, num3, num4, num5, num6);
```

---

## **2. Number Properties**
| Property | Description |
|----------|-------------|
| `Number.MAX_VALUE` | Largest possible number (`1.7976931348623157e+308`) |
| `Number.MIN_VALUE` | Smallest possible positive number (`5e-324`) |
| `Number.POSITIVE_INFINITY` | Represents **∞** |
| `Number.NEGATIVE_INFINITY` | Represents **-∞** |
| `Number.NaN` | Represents "Not-a-Number" |

### **Example**
```javascript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
```

---

## **3. Checking Number Types**
| Method | Description |
|--------|-------------|
| `typeof` | Checks the type of a variable. |
| `isNaN(value)` | Checks if the value is **NaN**. |
| `isFinite(value)` | Checks if a number is finite. |
| `Number.isInteger(value)` | Checks if a number is an integer. |

### **Examples**
```javascript
console.log(typeof 42); // "number"
console.log(isNaN("hello")); // true (not a number)
console.log(isFinite(100)); // true (100 is finite)
console.log(isFinite(Infinity)); // false
console.log(Number.isInteger(4.5)); // false (4.5 is not an integer)
```

---

## **4. Number Conversion Methods**
JavaScript provides methods to convert values to numbers.

| Method | Description |
|--------|-------------|
| `Number(value)` | Converts a value to a number. |
| `parseInt(value)` | Converts a string to an integer. |
| `parseFloat(value)` | Converts a string to a floating-point number. |
| `toFixed(n)` | Formats a number with `n` decimal places. |
| `toPrecision(n)` | Formats a number with `n` total digits. |

### **Examples**
```javascript
console.log(Number("123")); // 123
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14meters")); // 3.14
console.log((123.456).toFixed(2)); // "123.46"
console.log((123.456).toPrecision(4)); // "123.5"
```

---

# **JavaScript Math Object**
JavaScript provides the `Math` object, which contains built-in mathematical functions.

## **1. Basic Math Properties**
| Property | Description |
|----------|-------------|
| `Math.PI` | Returns π (3.14159...) |
| `Math.E` | Returns Euler's number (2.718...) |
| `Math.SQRT2` | Returns √2 (1.414...) |

### **Example**
```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.SQRT2); // 1.4142135623730951
```

---

## **2. Rounding Methods**
| Method | Description |
|--------|-------------|
| `Math.round(x)` | Rounds to the nearest integer. |
| `Math.ceil(x)` | Rounds **up** to the nearest integer. |
| `Math.floor(x)` | Rounds **down** to the nearest integer. |
| `Math.trunc(x)` | Removes the decimal part (keeps only integer part). |

### **Examples**
```javascript
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.trunc(4.9)); // 4
```

---

## **3. Exponents & Roots**
| Method | Description |
|--------|-------------|
| `Math.pow(x, y)` | Returns `x^y`. |
| `Math.sqrt(x)` | Returns `√x`. |
| `Math.cbrt(x)` | Returns `³√x`. |

### **Examples**
```javascript
console.log(Math.pow(2, 3)); // 8 (2³)
console.log(Math.sqrt(25)); // 5 (√25)
console.log(Math.cbrt(27)); // 3 (³√27)
```

---

## **4. Logarithmic & Trigonometric Functions**
| Method | Description |
|--------|-------------|
| `Math.log(x)` | Natural log (base e) of `x`. |
| `Math.log10(x)` | Log base 10 of `x`. |
| `Math.sin(x)` | Sine of `x` (in radians). |
| `Math.cos(x)` | Cosine of `x` (in radians). |
| `Math.tan(x)` | Tangent of `x` (in radians). |

### **Examples**
```javascript
console.log(Math.log(1)); // 0
console.log(Math.log10(100)); // 2
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1
```

---

## **5. Generating Random Numbers**
| Method | Description |
|--------|-------------|
| `Math.random()` | Generates a random number between `0` and `1`. |

### **Examples**
```javascript
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10
```

---

## **6. Finding Min & Max**
| Method | Description |
|--------|-------------|
| `Math.min(a, b, c, ...)` | Returns the smallest number. |
| `Math.max(a, b, c, ...)` | Returns the largest number. |

### **Example**
```javascript
console.log(Math.min(5, 2, 8, 1)); // 1
console.log(Math.max(5, 2, 8, 1)); // 8
```

---

# **Summary of Math Functions**
| Method | Description |
|--------|-------------|
| `Math.round(x)` | Rounds to nearest integer |
| `Math.ceil(x)` | Rounds up |
| `Math.floor(x)` | Rounds down |
| `Math.trunc(x)` | Removes decimal part |
| `Math.pow(x, y)` | Raises `x` to power `y` |
| `Math.sqrt(x)` | Square root |
| `Math.random()` | Random number between `0-1` |
| `Math.min(a, b, c, …)` | Minimum value |
| `Math.max(a, b, c, …)` | Maximum value |
| `Math.abs(x)` | Absolute value |
| `Math.sin(x), Math.cos(x), Math.tan(x)` | Trigonometric functions |

---
