import { ColorGroup, ColorGroupItem, ColorMap, ControllerMessage, ControllerMessageType } from '../types'

export function postMessage(msg: ControllerMessage) {
  figma.ui.postMessage(msg)
}

function getColorGroupList(colorMap: ColorMap): ColorGroup[] {
  const colorMapItemList = Object.values(colorMap)
  const newGroupList: ColorGroup[] = []
  colorMapItemList.forEach((colorMapItem) => {
    const [first, ...rest] = colorMapItem.name.split('/')

    if (first === 'inverted') { return }

    const groupName = first
    const colorName = rest.length ? rest[rest.length - 1] : 'none'
    const newColor: ColorGroupItem = {
      name: colorName,
      color: colorMapItem.color,
      invertedColor: colorMap[colorMapItem.invertedKey].color
    }

    const groupIndex = newGroupList.findIndex((colorGroup) => colorGroup.name === groupName)
    if (groupIndex >= 0) {
      newGroupList[groupIndex].children.push(newColor)
    } else {
      newGroupList.push({
        name: groupName,
        children: [newColor],
      })
    }
  })

  return newGroupList.sort((a, b) => a.name.localeCompare(b.name))
}

export function setColorMapSuccess(colorMap: ColorMap) {
  postMessage({
    type: ControllerMessageType.SET_COLOR_MAP_SUCCESS,
    payload: getColorGroupList(colorMap),
  })
}

export function getColorMapSuccess(colorMap: ColorMap) {
  postMessage({
    type: ControllerMessageType.GET_COLOR_MAP_SUCCESS,
    payload: getColorGroupList(colorMap),
  })
}

export function invertSuccess() {
  postMessage({
    type: ControllerMessageType.INVERT_SUCCESS,
  })
}
