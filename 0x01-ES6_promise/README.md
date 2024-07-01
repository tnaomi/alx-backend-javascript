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
