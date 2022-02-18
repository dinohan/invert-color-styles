export type HexColor = `#${string}`

export type ColorMapItem = {
  name: string
  color: HexColor
  invertedKey: string
  invertedName: string
}

export type ColorGroupItem = {
  name: string
  color: HexColor
  invertedColor: HexColor
}

export type ColorGroup = {
  name: string
  children: ColorGroupItem[]
}

export type ColorMap = {[key: string]: ColorMapItem}
