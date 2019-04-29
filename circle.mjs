export default {
  DegreesToRadians: degrees => degrees * Math.PI / 180,

  RadiansToDegrees: radians => radians * 180 / Math.PI,

  normalizedDegrees: degrees => {
    const τ = 360
    const θ = Math.abs(degrees)
    return degrees < 0 && θ % τ != 0 ? τ - θ % τ : θ % τ
  },

  normalizedRadians: radians => {
    const τ = 2 * Math.PI
    const θ = Math.abs(radians)
    return radians < 0 && θ % τ != 0 ? τ - θ % τ : θ % τ
  },

  DDtoDMS: dd => {
    let value = Math.abs(dd)

    const degrees = Math.floor(value)
    value -= degrees
    value *= 60

    const minutes = Math.floor(value)
    value -= minutes
    value *= 60
    value = Math.floor(value)

    const parts = []
    if (value > 0) parts.unshift(`${value}ʺ`)
    if (parts.length || minutes > 0) parts.unshift(`${minutes}′`)
    parts.unshift(`${dd < 0 ? '-' : ''}${degrees}°`)

    return parts.join(' ') // narrow no-break space
  }
}
