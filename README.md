# koa-method-match

[![Greenkeeper badge](https://badges.greenkeeper.io/Qard/koa-method-match.svg)](https://greenkeeper.io/)

Method match router for koa, does not handle path matching. It is intended to be
used with [koa-path](https://www.npmjs.org/package/koa-path), but is not tied to it.

## Usage

```js
var method = require('koa-method-match')
var path = require('koa-path')()

// You can simply pass the method in as a string
app.use(method('get', path('/user/:id', handler)))

// Or you can use method types as functions
var post = method.post
var get = method.get

app.use(post(path('/user', handler)))
app.use(get(path('/user/:id', handler)))
```
