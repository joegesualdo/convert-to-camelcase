## convert-to-camelcase [![Build Status](https://travis-ci.org/joegesualdo/convert-to-camelcase.svg?branch=master)](https://travis-ci.org/joegesualdo/convert-to-camelcase)
> Convert string to camelcase

## Install
```
$ npm install --save convert-to-camelcase
```

## Usage
```javascript
var convertToCamelcase = require("convert-to-camelcase").default

convertToCamelcase("the-really-cool-app");
//=> theReallyCoolApp
```

## Test
```
$ npm test
```

## API
### `convertToCamelcase(str)`
> What does this method do?

| Name | Type | Description |
|------|------|-------------|
| str | `String` | String to convert |

Returns: `String`, camelcased string 

```javascript
var convertToCamelcase = require("convert-to-camelcase").default

convertToCamelcase("the-really-cool-app");
//=> theReallyCoolApp
```

## License
MIT © [Joe Gesualdo]()
