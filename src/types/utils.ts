import { NodeWithChildren, NodeWithFillStyle, NodeWithStrokeStyle } from './NodeTypes'

export function hasChild(node: SceneNode): node is NodeWithChildren {
  return !(!node ||
  node.type === 'SLICE' ||
  node.type === 'VECTOR' ||
  node.type === 'STAR' ||
  node.type === 'LINE' ||
  node.type === 'POLYGON' ||
  node.type === 'RECTANGLE' ||
  node.type === 'TEXT' ||
  node.type === 'STICKY' ||
  node.type === 'CONNECTOR' ||
  node.type === 'SHAPE_WITH_TEXT' ||
  node.type === 'CODE_BLOCK' ||
  node.type === 'STAMP' ||
  node.type === 'WIDGET' ||
  node.type === 'EMBED' ||
  node.type === 'LINK_UNFURL' ||
  node.type === 'ELLIPSE' ||
  node.type === 'MEDIA') &&
    !!node.children
}

export function hasFillStyle(node: SceneNode): node is NodeWithFillStyle {
  return !(!node ||
    node.type === 'SLICE' ||
    node.type === 'CONNECTOR' ||
    node.type === 'CODE_BLOCK' ||
    node.type === 'WIDGET' ||
    node.type === 'EMBED' ||
    node.type === 'LINK_UNFURL' ||
    node.type === 'GROUP' ||
    node.type === 'MEDIA'
  ) && !!node.fillStyleId
}

export function hasStrokeStyle(node: SceneNode): node is NodeWithStrokeStyle {
  return !(!node ||
    node.type === 'SLICE' ||
    node.type === 'GROUP' ||
    node.type === 'STICKY' ||
    node.type === 'CODE_BLOCK' ||
    node.type === 'WIDGET' ||
    node.type === 'EMBED' ||
    node.type === 'LINK_UNFURL' ||
    node.type === 'MEDIA'
  ) && !!node.strokeStyleId
}

export function isValidString(o: unknown): o is string {
  return typeof o === 'string' && !!o
}
