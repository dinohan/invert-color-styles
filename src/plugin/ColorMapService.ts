import { ColorMap } from '../types'
import { getHexColor } from './colorUtils'

const STORAGE_KEY = 'THEME_INVERTER_COLORMAP_V1'

class ColorMapService {
  colorMap: ColorMap = {}

  localPaintStyles: PaintStyle[] = []

  async getColorMap() {
    this.colorMap = await figma.clientStorage.getAsync(STORAGE_KEY)
    return this.colorMap
  }

  async setColorMap() {
    this.localPaintStyles = figma.getLocalPaintStyles()
    this.localPaintStyles.forEach(paintStyle => {
      const invertedPaintStyle = this.getInvertedColorStyle(paintStyle)
      this.colorMap = {
        ...this.colorMap,
        [paintStyle.key]: {
          name: paintStyle.name,
          color: getHexColor(paintStyle.paints[0]),
          invertedKey: invertedPaintStyle.key,
          invertedName: invertedPaintStyle.name,
        }
      }
    })
    await figma.clientStorage.setAsync(STORAGE_KEY, this.colorMap)
    return this.colorMap
  }

  getInvertedColorStyle(paintStyle: PaintStyle): PaintStyle {
    if (paintStyle.name.includes('inverted/')) {
      const invertedPaintStyle = this.localPaintStyles.find($paintStyle => 
        $paintStyle.name === paintStyle.name.replace('inverted/', ''))
      return invertedPaintStyle ?? paintStyle
    } else {
      const invertedPaintStyle = this.localPaintStyles.find($paintStyle => 
        $paintStyle.name === `inverted/${paintStyle.name}`)
      return invertedPaintStyle ?? paintStyle
    }
  }
}

export default new ColorMapService()
