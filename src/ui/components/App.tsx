import * as React from "react"

import {
  ColorGroup,
  ControllerMessage,
  ControllerMessageType,
  UIMessage,
  UIMessageType,
} from '../../types'
import './App.css'
import ColorMapList from "./ColorMapList"

function App() {
  const [colorGroupList, setColorGroupList] = React.useState<ColorGroup[]>([])

  const [isInverting, setIsInverting] = React.useState(false)

  window.onmessage = async (event: MessageEvent) => {
    const pluginMessage: ControllerMessage = event.data.pluginMessage
    switch(pluginMessage.type) {
      case ControllerMessageType.SET_COLOR_MAP_SUCCESS:
      case ControllerMessageType.GET_COLOR_MAP_SUCCESS: {
        setColorGroupList(pluginMessage.payload)
      }
      case ControllerMessageType.INVERT_SUCCESS: {
        setIsInverting(false)
      }
    }
  }

  const postMessage = (message: UIMessage) => {
    parent.postMessage({ pluginMessage: message }, '*')
  }

  const requestSetColorMap = () => {
    setColorGroupList([])
    postMessage({ type: UIMessageType.SET_COLOR_MAP })
  }

  const requestGetColorMap = () => {
    setColorGroupList([])
    postMessage({ type: UIMessageType.GET_COLOR_MAP })
  }

  const invert = () => {
    if (!isInverting) {
      setIsInverting(true)
      postMessage({ type: UIMessageType.INVERT })
    }
  }

  React.useEffect(requestGetColorMap, []) 

  return (
    <div className="body">
      <header>
        <h2>Theme inverter</h2>
        <button onClick={requestSetColorMap}>refresh</button>
      </header>
      <ColorMapList colorGroupList={colorGroupList} />
      <div className="button-wrapper">
        <button id="invert-button" onClick={invert}>Invert !!</button>
      </div>
    </div>
  )
}

export default App
