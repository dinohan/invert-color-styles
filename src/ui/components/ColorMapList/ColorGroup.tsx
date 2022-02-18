import * as React from 'react'
import { ColorGroup } from '../../../types'
import { ColorItem } from './ColorItem'

interface ColorGroupProps {
  colorGroup: ColorGroup
}

export function ColorGroup({
  colorGroup,
}: ColorGroupProps) {
  return (
    <li className="group-wrapper">
      <h3 className="group-name">{ colorGroup.name }</h3>
      <ul>
        { colorGroup.children.map((colorItem) => (
          <React.Fragment key={colorItem.name}>
            <hr className="item-divider"/>
            <ColorItem colorItem={colorItem} />
          </React.Fragment>
        ))}
      </ul>
    </li>
  )
}
