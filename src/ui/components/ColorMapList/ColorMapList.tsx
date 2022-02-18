import * as React from 'react'

import { ColorGroup as ColorGroupModel, ColorMap, ColorMapItem } from '../../../types'
import { ColorGroup } from './ColorGroup'
import './ColorMapList.css'

interface ColorMapProps {
  colorGroupList: ColorGroupModel[]
}

export const ColorMapList = React.memo(({
  colorGroupList,
}: ColorMapProps) => {
  return (
    <ul className="list-wrapper">
      { colorGroupList.map((colorGroup, index) => (
        <React.Fragment key={colorGroup.name}>
          { index ? <hr className="group-divider"/> : null }
          <ColorGroup colorGroup={colorGroup} />
        </React.Fragment>
      )) }
    </ul>
  )
})