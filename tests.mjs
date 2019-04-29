import assert from 'assert'
import circle from './circle'

for (const test of [
  { degrees: 0, normalized: 0 },
  { degrees: 45, normalized: 45 },
  { degrees: 45.5, normalized: 45.5 },
  { degrees: 90, normalized: 90 },
  { degrees: 135, normalized: 135 },
  { degrees: 180, normalized: 180 },
  { degrees: 225, normalized: 225 },
  { degrees: 270, normalized: 270 },
  { degrees: 315, normalized: 315 },
  { degrees: 360, normalized: 0 },
  { degrees: -45, normalized: 315 },
  { degrees: -45.5, normalized: 314.5 },
  { degrees: -90, normalized: 270 },
  { degrees: -135, normalized: 225 },
  { degrees: -180, normalized: 180 },
  { degrees: -225, normalized: 135 },
  { degrees: -270, normalized: 90 },
  { degrees: -315, normalized: 45 },
  { degrees: -360, normalized: 0 },
  { degrees: -720, normalized: 0 },
  { degrees: 720, normalized: 0 },
  { degrees: 765, normalized: 45 },
  { degrees: 765.5, normalized: 45.5 },
  { degrees: 810, normalized: 90 },
  { degrees: 855, normalized: 135 },
  { degrees: 900, normalized: 180 },
  { degrees: 945, normalized: 225 },
  { degrees: 990, normalized: 270 },
  { degrees: 1035, normalized: 315 },
  { degrees: -765, normalized: 315 },
  { degrees: -765.5, normalized: 314.5 },
  { degrees: -810, normalized: 270 },
  { degrees: -855, normalized: 225 },
  { degrees: -900, normalized: 180 },
  { degrees: -945, normalized: 135 },
  { degrees: -990, normalized: 90 },
  { degrees: -1035, normalized: 45 },
  { degrees: 127.27922061357856, normalized: 127.27922061357856 },
  { degrees: 847.2792206135786, normalized: 127.27922061357856 },
  { degrees: -847.2792206135786, normalized: 232.72077938642144 }
]) {
  assert.strictEqual(circle.normalizedDegrees(test.degrees), test.normalized)
}

for (const test of [
  { radians: 0, normalized: 0 },
  { radians: 0.7853981633974483, normalized: 0.7853981633974483 },
  { radians: 1.5707963267948966, normalized: 1.5707963267948966 },
  { radians: 2.356194490192345, normalized: 2.356194490192345 },
  { radians: 3.141592653589793, normalized: 3.141592653589793 },
  { radians: 3.9269908169872414, normalized: 3.9269908169872414 },
  { radians: 4.71238898038469, normalized: 4.71238898038469 },
  { radians: 5.497787143782138, normalized: 5.497787143782138 },
  { radians: 6.283185307179586, normalized: 0 },
  { radians: -0.7853981633974483, normalized: 5.497787143782138 },
  { radians: -1.5707963267948966, normalized: 4.71238898038469 },
  { radians: -2.356194490192345, normalized: 3.9269908169872414 },
  { radians: -3.141592653589793, normalized: 3.141592653589793 },
  { radians: -3.9269908169872414, normalized: 2.356194490192345 },
  { radians: -4.71238898038469, normalized: 1.5707963267948966 },
  { radians: -5.497787143782138, normalized: 0.7853981633974483 },
  { radians: -6.283185307179586, normalized: 0 },
  { radians: 18.84955592153876, normalized: 0 },
  { radians: 25.918139392115794, normalized: 0.7853981633974492 },
  { radians: 32.98672286269283, normalized: 1.5707963267948983 },
  { radians: 40.05530633326986, normalized: 2.356194490192344 },
  { radians: 47.12388980384689, normalized: 3.1415926535897896 },
  { radians: 54.19247327442393, normalized: 3.9269908169872423 },
  { radians: 61.261056745000964, normalized: 4.712388980384688 },
  { radians: 68.329640215578, normalized: 5.4977871437821335 },
  { radians: -75.39822368615503, normalized: 0 },
  { radians: -13.351768777756622, normalized: 5.497787143782137 },
  { radians: -20.420352248333657, normalized: 4.712388980384688 },
  { radians: -27.48893571891069, normalized: 3.9269908169872423 },
  { radians: -34.55751918948772, normalized: 3.1415926535897967 },
  { radians: -41.62610266006476, normalized: 2.356194490192344 },
  { radians: -48.69468613064179, normalized: 1.5707963267948983 },
  { radians: -55.76326960121883, normalized: 0.7853981633974456 }
]) {
  // Number.EPSILON doesn’t seem to be in node yet.
  // assert.ok(Math.abs(circle.normalizedRadians(test.radians) - test.normalized) < Number.EPISLON, `circle.normalizedRadians(${test.radians}) not close enough to ${test.normalized}`)
  assert.strictEqual(circle.normalizedRadians(test.radians), test.normalized)
}
console.log('all tests passed')
