# circle

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![current version](https://img.shields.io/npm/v/zgm053uka)](https://www.npmjs.com/package/@robireton/circle)
[![install size](https://packagephobia.com/badge?p=@robireton/circle)](https://packagephobia.com/result?p=@robireton/circle)


ES6 module for working with angles in circles

## usage
```js
import circle from '@robireton/circle'

circle.DegreesToRadians(90)
```

## methods

### DegreesToRadians( `number` )

#### arguments
`number`: an angle expressed in degrees

#### returns
`number`: an angle expressed in radians

#### example
```js
circle.DegreesToRadians(90)
// => 1.5707963267948966
```


### RadiansToDegrees( `number` )

#### arguments
`number`: an angle expressed in radians

#### returns
`number`: an angle expressed in degrees

#### example
```js
circle.RadiansToDegrees(Math.PI)
// => 180
```


### normalizedDegrees( `number` )

#### arguments
`number`: an angle expressed in degrees

#### returns
`number`: an angle expressed in degrees in the interval [0, 360)

#### example
```js
circle.normalizedDegrees(1122)
// => 42
```


### normalizedRadians( `number` )

#### arguments
`number`: an angle expressed in radians

#### returns
`number`: an angle expressed in radians in the interval [0, 2π)

#### example
```js
circle.normalizedRadians(-12.3)
// => 0.26637061435917175
```


### DDtoDMS( `number` )
decimal degrees to degrees, minutes, and seconds

#### arguments
`number`: an angle expressed in degrees

#### returns
`string`: an angle formatted as _d° m′ sʺ_ (that space is a narrow no-break space, U+202F)

#### example
```js
circle.DDtoDMS(42.1024)
// => '42° 6′ 8ʺ'
```
