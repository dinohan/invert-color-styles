import ColorMapService from './ColorMapService'
import { ColorMap, ControllerMessage, ControllerMessageType, UIMessage, UIMessageType } from '../types'
import { updateTheme } from './inverter'
import { getColorMapSuccess, invertSuccess, setColorMapSuccess } from './postMessage'

// Plugin window dimensions
figma.showUI(__html__, { width: 320, height: 358 })

async function invert() {
  const promises = figma.currentPage.selection.map(updateTheme)
  await Promise.all(promises)
}

figma.ui.onmessage = (msg: UIMessage) => {
  switch(msg.type) {
    case UIMessageType.SET_COLOR_MAP:
      ColorMapService.setColorMap()
        .then(setColorMapSuccess)
      break
    case UIMessageType.GET_COLOR_MAP:
      ColorMapService.getColorMap()
        .then(getColorMapSuccess)
      break
    case UIMessageType.INVERT:
      invert()
        .then(invertSuccess)
      break
  }
}
