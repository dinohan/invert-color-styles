import { HexColor } from '../types'

function getHexNumber(percentage: number) {
  return Math.floor(percentage * 255).toString(16);
}

export function getHexColor(paint: Paint): HexColor {
  if (paint.type !== 'SOLID') { return null }

  const r = getHexNumber(paint.color.r ?? 1) 
  const g = getHexNumber(paint.color.g ?? 1)
  const b = getHexNumber(paint.color.b ?? 1)
  const a = getHexNumber(paint.opacity ?? 1)

  return `#${r}${g}${b}${a}`
}
