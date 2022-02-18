type NodeWithoutChildren =
SliceNode |
VectorNode |
StarNode |
LineNode |
PolygonNode |
RectangleNode |
TextNode |
StickyNode |
ConnectorNode |
ShapeWithTextNode |
CodeBlockNode |
StampNode |
WidgetNode |
EmbedNode |
LinkUnfurlNode |
EllipseNode |
MediaNode |
GroupNode

type NodeWithoutFillStyle =
SliceNode |
ConnectorNode |
CodeBlockNode |
WidgetNode |
EmbedNode |
LinkUnfurlNode |
GroupNode |
MediaNode

type NodeWithoutStrokeStyle =
SliceNode |
GroupNode |
StickyNode |
CodeBlockNode |
WidgetNode |
EmbedNode |
LinkUnfurlNode |
MediaNode

export type NodeWithChildren = Exclude<SceneNode, NodeWithoutChildren>

export type NodeWithFillStyle = Exclude<SceneNode, NodeWithoutFillStyle>

export type NodeWithStrokeStyle = Exclude<SceneNode, NodeWithoutStrokeStyle>