import { ColorGroup, ColorMap } from './ColorTypes'

export enum UIMessageType {
  SET_COLOR_MAP = 'SET_COLOR_MAP',
  GET_COLOR_MAP = 'GET_COLOR_MAP',
  INVERT = 'INVERT',
}

export type UIMessage = {
  type: UIMessageType
}

export enum ControllerMessageType {
  SET_COLOR_MAP_SUCCESS = 'SET_COLOR_MAP_SUCCESS',
  GET_COLOR_MAP_SUCCESS = 'GET_COLOR_MAP_SUCCESS',
  INVERT_SUCCESS = 'INVERT_SUCCESS',
}

type SetColorMapSuccessMessage = {
  type: ControllerMessageType.SET_COLOR_MAP_SUCCESS
  payload: ColorGroup[]
}

type GetColorMapSuccessMessage = {
  type: ControllerMessageType.GET_COLOR_MAP_SUCCESS
  payload: ColorGroup[]
}

type InvertSuccessMessage = {
  type: ControllerMessageType.INVERT_SUCCESS
}

export type ControllerMessage =
  SetColorMapSuccessMessage |
  GetColorMapSuccessMessage |
  InvertSuccessMessage
