node-tcheck
===========

### Lightweight type check library for JavaScript

## Installation

    $ npm install tcheck

## How to include

```js
    var tcheck = require('tcheck');
```

## Examples

### Verify if `foo` is of type String

```js
    var foo = 'bar';
    console.log(tcheck(foo, String)); // Should output "true"
```

### Multiple type checks

```js
    var str1 = 'foo';
    var str2 = new String('bar');
    var num1 = 12345;
    var num2 = 12.34;
    var date = new Date();
    console.log(tcheck(str1, String, str2, String, num1, Number, num2, Number, date, Date)); // Should also output "true"
```

### Using own classes

```js
    function User(name, age) {
      this.name = name;
      this.age = age;
    }
    var userObj = new User('Joko van Klaas', 30);
    console.log(tcheck(userObj, User)); // Outputs "true"
```
