# Difference between Callbacks vs promises vs async await

## What are callbacks ?

In javascript functions are first class citizens. For example,

- you can store functions in variables

```javascript
function multiply(x, y) {
  return x * y;
}

const value = multiply;
```

We are actually not calling the function multiply, when assigning to the const variable `value`. Now, think of `value` as just another reference to the actual function `multiply`. We can call the function `multiply` by calling it via `value` - like so.

```javascript
const amount = value(2, 3); // The value of amount now will be 6
```

Also, just like we can pass variables as arguments to functions, we can also pass functions as arguments to a function. Now, imagine another function that multiplies two numbers and squares them.

```javascript
function multiplyAndSquare(x, y, fn) {
  return fn(x, y) ** 2;
}
```

Now, when calling the function `multiplyAndSquare` the last argument `fn` here can be passed as follows.

```javascript
const amount = multiplyAndSquare(2, 3, multiply); // amount will be 36
```

In this case, the function that is taken in as an argument is called a `callback` function or simply `callback`.

This example, might not seem very useful in itself. Let's build a more useful

## What are higher order functions

Since functions are first class citizens in javascript, a javascript function can take in a function as an argument or return a function, or do both. When a function does any of this, it is called as a `higher order function`.
