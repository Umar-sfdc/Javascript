# **JavaScript Date & Time – Complete Guide**  

JavaScript provides the `Date` object to work with **date and time**. The `Date` object includes methods for creating, formatting, modifying, and extracting date/time information.

---

## **1. Creating Date Objects**  
You can create a `Date` object in multiple ways.

### **1.1 Using `new Date()` (Current Date & Time)**
```javascript
let now = new Date();
console.log(now); // Current date and time
```

### **1.2 Creating Date from a Specific Date**
```javascript
let specificDate = new Date("2025-03-08T15:30:00"); // ISO format
console.log(specificDate);
```

### **1.3 Using Year, Month, Day, Hour, Minute, Second**
```javascript
let customDate = new Date(2025, 2, 8, 15, 30, 0); 
// Year, Month (0-based), Day, Hours, Minutes, Seconds
console.log(customDate); // Sat Mar 08 2025 15:30:00
```

### **1.4 Using Timestamp (Milliseconds since 1 Jan 1970)**
```javascript
let timestampDate = new Date(1709911800000);
console.log(timestampDate); // Date corresponding to this timestamp
```

---

## **2. Getting Date & Time Components**
You can extract parts of a date using `get` methods.

| Method | Description | Example Output |
|--------|-------------|---------------|
| `getFullYear()` | Gets the 4-digit year | `2025` |
| `getMonth()` | Gets the month (0-11) | `2` (March) |
| `getDate()` | Gets the day of the month (1-31) | `8` |
| `getDay()` | Gets the day of the week (0-6) | `6` (Saturday) |
| `getHours()` | Gets the hour (0-23) | `15` |
| `getMinutes()` | Gets the minutes (0-59) | `30` |
| `getSeconds()` | Gets the seconds (0-59) | `0` |
| `getMilliseconds()` | Gets milliseconds (0-999) | `500` |
| `getTime()` | Gets timestamp (ms since 1970) | `1709911800000` |

### **Example**
```javascript
let date = new Date();
console.log(date.getFullYear()); // 2025
console.log(date.getMonth()); // 2 (March)
console.log(date.getDate()); // 8
console.log(date.getDay()); // 6 (Saturday)
console.log(date.getHours()); // 15
console.log(date.getMinutes()); // 30
console.log(date.getSeconds()); // 0
console.log(date.getMilliseconds()); // 500
console.log(date.getTime()); // Timestamp in milliseconds
```

---

## **3. Setting Date & Time**
Modify a `Date` object using `set` methods.

| Method | Description |
|--------|-------------|
| `setFullYear(year)` | Sets the year |
| `setMonth(month)` | Sets the month (0-11) |
| `setDate(day)` | Sets the day of the month |
| `setHours(hours)` | Sets the hour (0-23) |
| `setMinutes(min)` | Sets the minutes (0-59) |
| `setSeconds(sec)` | Sets the seconds (0-59) |
| `setMilliseconds(ms)` | Sets the milliseconds (0-999) |
| `setTime(timestamp)` | Sets date using milliseconds since 1970 |

### **Example**
```javascript
let myDate = new Date();
myDate.setFullYear(2026);
myDate.setMonth(5); // June (0-based)
myDate.setDate(15);
myDate.setHours(10);
console.log(myDate); // New modified date
```

---

## **4. Formatting Dates**
### **4.1 Converting Date to String**
| Method | Output Format |
|--------|--------------|
| `toString()` | Full date-time string |
| `toDateString()` | Date only (short format) |
| `toTimeString()` | Time only |
| `toUTCString()` | UTC format |
| `toLocaleDateString()` | Localized date format |
| `toLocaleTimeString()` | Localized time format |

### **Example**
```javascript
let date = new Date();
console.log(date.toString()); // Sat Mar 08 2025 15:30:00 GMT+0000
console.log(date.toDateString()); // Sat Mar 08 2025
console.log(date.toTimeString()); // 15:30:00 GMT+0000
console.log(date.toUTCString()); // Sat, 08 Mar 2025 15:30:00 GMT
console.log(date.toLocaleDateString()); // 3/8/2025 (US format)
console.log(date.toLocaleTimeString()); // 3:30:00 PM
```

---

## **5. Comparing Dates**
You can compare two dates using comparison operators.

### **Example**
```javascript
let date1 = new Date("2025-03-08");
let date2 = new Date("2025-03-09");

console.log(date1 < date2); // true (March 8 is before March 9)
console.log(date1.getTime() === date2.getTime()); // false (Different timestamps)
```

---

## **6. Working with Timestamps**
Timestamps represent the number of milliseconds since **January 1, 1970**.

### **6.1 Get Current Timestamp**
```javascript
let now = Date.now();
console.log(now); // Timestamp in milliseconds
```

### **6.2 Convert Timestamp to Date**
```javascript
let timestamp = 1709911800000;
let dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp); // Sat Mar 08 2025 15:30:00
```

---

## **7. Adding or Subtracting Time**
To add or subtract time, modify the timestamp.

### **Example**
```javascript
let date = new Date();
date.setDate(date.getDate() + 7); // Add 7 days
console.log(date);

date.setFullYear(date.getFullYear() - 1); // Subtract 1 year
console.log(date);
```

---

## **8. Get Time Difference Between Two Dates**
Calculate the difference in days, hours, or minutes.

### **Example**
```javascript
let startDate = new Date("2025-03-01");
let endDate = new Date("2025-03-08");

let difference = endDate - startDate; // Milliseconds
let days = difference / (1000 * 60 * 60 * 24); // Convert to days
console.log(days); // 7 days
```

---

## **9. Working with Time Zones**
Use `Intl.DateTimeFormat` for proper time zone formatting.

### **Example**
```javascript
let date = new Date();
let options = { timeZone: "Asia/Kolkata", hour12: false };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
```

---

# **Summary of Date Methods**
| Method | Description |
|--------|-------------|
| `new Date()` | Creates a new Date object |
| `getFullYear()` | Gets the year |
| `getMonth()` | Gets the month (0-11) |
| `getDate()` | Gets the day of the month |
| `getHours()` | Gets the hours |
| `getMinutes()` | Gets the minutes |
| `getSeconds()` | Gets the seconds |
| `setFullYear(year)` | Sets the year |
| `setMonth(month)` | Sets the month |
| `setDate(day)` | Sets the day |
| `toLocaleDateString()` | Formats date for the locale |
| `toLocaleTimeString()` | Formats time for the locale |
| `getTime()` | Gets the timestamp (ms since 1970) |
| `Date.now()` | Gets the current timestamp |

---
