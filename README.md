# circle
ES6 module for working with angles in circles

## install
```sh
$ npm install @robireton/circle
```

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
`number`: an angle expressed in degrees in the range [0 – 360)

#### example
```js
circle.normalizedDegrees(1122)
// => 42
```


### normalizedRadians( `number` )

#### arguments
`number`: an angle expressed in radians

#### returns
`number`: an angle expressed in radians in the range [0 – 2π)

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
`string`: an angle formatted as _d° m′ sʺ_

#### example
```js
circle.DDtoDMS(42.1024)
// => '42° 6′ 8ʺ'
```
