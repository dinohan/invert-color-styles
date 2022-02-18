import ColorMapService from './ColorMapService'
import { hasChild, hasFillStyle, hasStrokeStyle, isValidString } from '../types'
import { NodeWithFillStyle, NodeWithStrokeStyle } from '../types/NodeTypes'

async function invertFillStyle(node: NodeWithFillStyle) {
  if (!isValidString(node.fillStyleId)) { return }
  const key = figma.getStyleById(node.fillStyleId).key
  const currentPaintStyle = ColorMapService.colorMap[key]
  if (!currentPaintStyle) { return }
  let newStyle = await figma.importStyleByKeyAsync(currentPaintStyle.invertedKey);
  node.fillStyleId = newStyle.id
}

async function invertStrokeStyle(node: NodeWithStrokeStyle) {
  if (!isValidString(node.strokeStyleId)) { return }
  const key = figma.getStyleById(node.strokeStyleId).key
  const currentPaintStyle = ColorMapService.colorMap[key]
  if (!currentPaintStyle) { return }
  let newStyle = await figma.importStyleByKeyAsync(currentPaintStyle.invertedKey);
  node.strokeStyleId = newStyle.id
}

export async function updateTheme(node: SceneNode) {
  if (hasChild(node)) {
    if (node.children) {
      const promises = node.children.map(updateTheme)
      await Promise.all(promises)
    }
  }

  if (hasFillStyle(node)) {
    await invertFillStyle(node)
  }

  if (hasStrokeStyle(node)) {
    await invertStrokeStyle(node)
  }
}
