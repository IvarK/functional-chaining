# functional-chaining
Module that modifies prototypes of Array, String, Number and Object with useful functions.

## How to use
`npm i --save functional-chaining`

```js
import fc from 'functional-chaining';

fc.init()
```

or

```js
const fc = require('functional-chaining');

fc.init()
```

## Arrays
Includes the following functions for arrays:

### Array._last
returns the last element from the array

```js
[0, 1, 2, 3, 4]._last // 4
```

### Array._head
returns the first element from the array

```js
[0, 1, 2, 3, 4]._head // 0
```

### Array._tail
returns the array except the first element

```js
[0, 1, 2, 3, 4]._tail // [1, 2, 3, 4]
```

### Array._distinct
returns the array with only unique values

```js
[0, 0, 1, 0, 3, 3]._distinct // [0, 1, 3]
```

### Array._count
Counts the elements which satisfy a function

```js
[0, 1, 2, 3, 4]._count(v => v > 2) // 2
```

### Array._take
Takes the first n elements of the array

```js
[0, 1, 2, 3, 4]._take(3) // [0, 1, 2]
```


### Array._drop
Takes all but the first n elements of the array

```js
[0, 1, 2, 3, 4]._drop(3) // [3, 4]
```

### Array._toSet
creates a set from the array

```js
[0, 1, 2, 3, 4].toSet // [3, 4]
```

## Strings

The following array properties are also defined for strings, with the same functionalities:
* String._last
* String._head
* String._tail
* String._take
* String._drop

## Numbers

### Number.isNaN
Equivalent of `isNaN(number)`

## Objects

### Object._forEach
Performs a function for each key-value pair

```js
const obj = {a: 1, b: 2, c: 3};
obj._forEach((key, value) => {
  console.log(`${value}${key}`)
})
// Logs 1a, 2b and 3c
```


### Object._forEachValue
Same as ._forEach but only takes the value as the callback function parameter

```js
const obj = {a: 1, b: 2, c: 3};
obj._forEachValue(value => {
  console.log(value)
})
// Logs 1, 2 and 3
```

### Object._map
Returns a new object mapped with a function

```js
const obj = {a: 1, b: 2, c: 3};
obj._map((key, value) => {
  return value * 2
})
// {a: 2, b: 4, c: 6}
```

### Object._mapValues
Same as ._map but only takes the value as the callback function parameter

```js
const obj = {a: 1, b: 2, c: 3};
obj._mapValues(value => {
  return value * 2
})
// {a: 2, b: 4, c: 6}
```
