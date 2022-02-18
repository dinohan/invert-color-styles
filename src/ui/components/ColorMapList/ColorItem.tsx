import * as React from 'react'
import { ColorGroupItem } from '../../../types'

interface ColorItemProps {
  colorItem: ColorGroupItem
}

export function ColorItem({
  colorItem,
}: ColorItemProps) {
  return (
    <li className="item-wrapper">
      <div className="item-name">{ colorItem.name }</div>
      <div className="color-palette-wrapper">
        <div
          className="color-palette"
          title={colorItem.color}
          style={{ backgroundColor: colorItem.color }}
        />
        <div
          className="color-palette"
          title={colorItem.invertedColor}
          style={{ backgroundColor: colorItem.invertedColor }}
        />
      </div>
    </li>
  )
}
