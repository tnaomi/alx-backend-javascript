# 0x01-ES6_promise

## Author

Tadala N. Kapengule

## Requirements

### Install

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Resources

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Javascript Promise: An Introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw, and try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Tasks

### 0. Keep every promise you make and only make promises you can keep

Return a Promise using this prototype function `getResponseFromAPI()`

```bash
npm run dev 0-main.js 
```

__File__
`0-promise.js`

### 1. Don't make a promise, if you know you can't keep it

Using the prototype below, return a promise. The parameter is a `boolean`.

`getFullResponseFromAPI(success)`

When the argument is:

- `true`
- - resolve the promise by passing an object with 2 attributes:
- - - `status`: `200`
- - - `body`: `'Success'`
- `false`
- - reject the promise with an error object with the message `The fake API is not working currently`

Try testing it out for yourself

__File__
`1-promise.js`

### 2. Catch me if you can

Using the function prototype below

`function handleResponseFromAPI(promise)`

Append three handlers to the function:

- When the Promise resolves, return an object with the following attributes
- - `status`: `200`
- - `body`: `success`
- When the Promise rejects, return an empty `Error` object
- For every resolution, log `Got a response from the API` to the console

__File__
`2-then.js`

### 3. Handle multiple successful promises

In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

```js
function handleProfileSignup()
```

In the event of an error, log `Signup system offline` to the console

__File__
`3-all.js`

### 4. Simple promise

Using the following prototype

```js
function signUpUser(firstName, lastName) {
}
```

That returns a resolved promise with this object:

```bash
{
  firstName: value,
  lastName: value,
}
```

__File__
`4-user-promise.js`

### 5. Reject the promises

Write and export a function named `uploadPhoto`. It should accept one argument `fileName (string)`.

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`

```js
export default function uploadPhoto(filename) {

}
```

__File__
`5-photo-reject.js`

### 6. Handle multiple promises

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

```bash
[
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ]
```

__File__
`6-final-user.js`

### 7. Load Balancer

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).

The function should return the value returned by the promise that resolved the first.

```js
export default function loadBalancer(chinaDownload, USDownload) {

}
```

__File__
`7-load_balancer.js`

### 8. Throw error, try catch

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).

When the `denominator` argument is equal to `0`, the function should throw a new error with the message `cannot divide by 0`. Otherwise it should return the `numerator` divided by the `denominator`.

```js
export default function divideFunction(numerator, denominator) {

}
```

__File__
`8-try.js`

### 9. Throw an error

Write a function named `guardrail` that will accept one argument `mathFunction` (Function).

This function should create and return an array named `queue`.

When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.

Example:

```bash
[
  1000,
  'Guardrail was processed',
]
```

__File__
`9-try.js`

### __OPTIONAL <> <> TASKS__

### 10. Await/ Async

Import `uploadPhoto` and `createUser` from `utils.js`

Write an async function named `asyncUploadUser` that will call these two functions and return an object with the following format:

```bash
{
  photo: response_from_uploadPhoto_function,
  user: response_from_createUser_function,
}
```

If one of the async function fails, return an empty object. Example:

```bash
{
  photo: null,
  user: null,
}
```

__File__
`100-await.js`
