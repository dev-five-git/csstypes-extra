/** biome-ignore-all lint/complexity/noBannedTypes: <this is a generated file> */
export as namespace CSS
export type CustomColors = {}
export type AccentColor = 'auto' | TColor
export type AlignContent =
  | 'normal'
  | TBaselinePosition
  | TContentDistribution
  | TOverflowPosition
  | TContentPosition
export type AlignItems =
  | 'normal'
  | 'stretch'
  | TBaselinePosition
  | TOverflowPosition
  | TSelfPosition
  | 'anchor-center'
export type AlignSelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | TBaselinePosition
  | TOverflowPosition
  | TSelfPosition
  | 'anchor-center'
export type AlignmentBaseline =
  | 'baseline'
  | 'alphabetic'
  | 'ideographic'
  | 'middle'
  | 'central'
  | 'mathematical'
  | 'text-before-edge'
  | 'text-after-edge'
export type All = 'initial' | 'inherit' | 'unset' | 'revert' | 'revert-layer'
export type Animation = TSingleAnimation
export type AnimationComposition = TSingleAnimationComposition
export type AnimationDelay = string & {}
export type AnimationDirection = TSingleAnimationDirection
export type AnimationDuration = 'auto'
export type AnimationFillMode = TSingleAnimationFillMode
export type AnimationIterationCount = TSingleAnimationIterationCount
export type AnimationName = 'none' | TKeyframesName
export type AnimationPlayState = TSingleAnimationPlayState
export type AnimationTimingFunction = TEasingFunction
export type Appearance = 'none' | 'auto' | TCompatAuto | TCompatSpecial
export type AspectRatio = 'auto' | TRatio
export type BackdropFilter = 'none' | TFilterValueList
export type BackfaceVisibility = 'visible' | 'hidden'
export type Background = TBgLayer | TFinalBgLayer
export type BackgroundAttachment = TAttachment
export type BackgroundBlendMode = TBlendMode
export type BackgroundClip = TBgClip
export type BackgroundColor = TColor
export type BackgroundImage = TBgImage
export type BackgroundOrigin = TVisualBox
export type BackgroundPosition = TBgPosition
export type BackgroundPositionX =
  | 'center'
  | 'left'
  | 'right'
  | 'x-start'
  | 'x-end'
  | TLengthPercentage
export type BackgroundPositionY =
  | 'center'
  | 'top'
  | 'bottom'
  | 'y-start'
  | 'y-end'
  | TLengthPercentage
export type BackgroundRepeat = TRepeatStyle
export type BackgroundSize = TBgSize
export type BaselineShift = TLengthPercentage | 'sub' | 'super' | 'baseline'
export type BlockSize = Width
export type Border = TLineWidth | TLineStyle | TColor
export type BorderBlock = BorderBlockStart
export type BorderBlockColor = BorderTopColor
export type BorderBlockEnd = BorderTopWidth | BorderTopStyle | TColor
export type BorderBlockEndColor = BorderTopColor
export type BorderBlockEndStyle = BorderTopStyle
export type BorderBlockEndWidth = BorderTopWidth
export type BorderBlockStart = BorderTopWidth | BorderTopStyle | TColor
export type BorderBlockStartColor = BorderTopColor
export type BorderBlockStartStyle = BorderTopStyle
export type BorderBlockStartWidth = BorderTopWidth
export type BorderBlockStyle = BorderTopStyle
export type BorderBlockWidth = BorderTopWidth
export type BorderBottom = TLineWidth | TLineStyle | TColor
export type BorderBottomColor = BorderTopColor
export type BorderBottomLeftRadius = TLengthPercentage
export type BorderBottomRightRadius = TLengthPercentage
export type BorderBottomStyle = TLineStyle
export type BorderBottomWidth = TLineWidth
export type BorderCollapse = 'separate' | 'collapse'
export type BorderColor = TColor
export type BorderEndEndRadius = BorderTopLeftRadius
export type BorderEndStartRadius = BorderTopLeftRadius
export type BorderImage =
  | BorderImageSource
  | BorderImageSlice
  | BorderImageWidth
  | BorderImageWidth
  | BorderImageOutset
  | BorderImageRepeat
export type BorderImageOutset = number
export type BorderImageRepeat = 'stretch' | 'repeat' | 'round' | 'space'
export type BorderImageSlice = number | 'fill'
export type BorderImageSource = 'none' | TImage
export type BorderImageWidth = TLengthPercentage | number | 'auto'
export type BorderInline = BorderBlockStart
export type BorderInlineColor = BorderTopColor
export type BorderInlineEnd = BorderTopWidth | BorderTopStyle | TColor
export type BorderInlineEndColor = BorderTopColor
export type BorderInlineEndStyle = BorderTopStyle
export type BorderInlineEndWidth = BorderTopWidth
export type BorderInlineStart = BorderTopWidth | BorderTopStyle | TColor
export type BorderInlineStartColor = BorderTopColor
export type BorderInlineStartStyle = BorderTopStyle
export type BorderInlineStartWidth = BorderTopWidth
export type BorderInlineStyle = BorderTopStyle
export type BorderInlineWidth = BorderTopWidth
export type BorderLeft = TLineWidth | TLineStyle | TColor
export type BorderLeftColor = TColor
export type BorderLeftStyle = TLineStyle
export type BorderLeftWidth = TLineWidth
export type BorderRadius = TLengthPercentage
export type BorderRight = TLineWidth | TLineStyle | TColor
export type BorderRightColor = TColor
export type BorderRightStyle = TLineStyle
export type BorderRightWidth = TLineWidth
export type BorderSpacing = string & {}
export type BorderStartEndRadius = BorderTopLeftRadius
export type BorderStartStartRadius = BorderTopLeftRadius
export type BorderStyle = TLineStyle
export type BorderTop = TLineWidth | TLineStyle | TColor
export type BorderTopColor = TColor
export type BorderTopLeftRadius = TLengthPercentage
export type BorderTopRightRadius = TLengthPercentage
export type BorderTopStyle = TLineStyle
export type BorderTopWidth = TLineWidth
export type BorderWidth = TLineWidth
export type Bottom = 'auto' | TLengthPercentage
export type BoxDecorationBreak = 'slice' | 'clone'
export type BoxShadow = 'none' | TShadow
export type BoxSizing = 'content-box' | 'border-box'
export type BreakAfter =
  | 'auto'
  | 'avoid'
  | 'always'
  | 'all'
  | 'avoid-page'
  | 'page'
  | 'left'
  | 'right'
  | 'recto'
  | 'verso'
  | 'avoid-column'
  | 'column'
  | 'avoid-region'
  | 'region'
export type BreakBefore =
  | 'auto'
  | 'avoid'
  | 'always'
  | 'all'
  | 'avoid-page'
  | 'page'
  | 'left'
  | 'right'
  | 'recto'
  | 'verso'
  | 'avoid-column'
  | 'column'
  | 'avoid-region'
  | 'region'
export type BreakInside =
  | 'auto'
  | 'avoid'
  | 'avoid-page'
  | 'avoid-column'
  | 'avoid-region'
export type CaptionSide = 'top' | 'bottom'
export type Caret = CaretColor | CaretShape
export type CaretColor = 'auto' | TColor
export type CaretShape = 'auto' | 'bar' | 'block' | 'underscore'
export type Clear =
  | 'none'
  | 'left'
  | 'right'
  | 'both'
  | 'inline-start'
  | 'inline-end'
export type ClipPath = TClipSource | TBasicShape | TGeometryBox | 'none'
export type ClipRule = 'nonzero' | 'evenodd'
export type Color = TColor
export type ColorInterpolationFilters = 'auto' | 'sRGB' | 'linearRGB'
export type ColorScheme = 'normal' | 'light' | 'dark' | (string & {}) | 'only'
export type ColumnCount = number | 'auto'
export type ColumnFill = 'auto' | 'balance'
export type ColumnGap = 'normal' | TLengthPercentage
export type ColumnRule = ColumnRuleWidth | ColumnRuleStyle | ColumnRuleColor
export type ColumnRuleColor = TColor
export type ColumnRuleStyle = BorderStyle
export type ColumnRuleWidth = BorderWidth
export type ColumnSpan = 'none' | 'all'
export type ColumnWidth = 'auto'
export type Columns = ColumnWidth | ColumnCount
export type Contain =
  | 'none'
  | 'strict'
  | 'content'
  | 'size'
  | 'inline-size'
  | 'layout'
  | 'style'
  | 'paint'
export type ContainIntrinsicBlockSize = 'auto' | 'none'
export type ContainIntrinsicHeight = 'auto' | 'none'
export type ContainIntrinsicInlineSize = 'auto' | 'none'
export type ContainIntrinsicSize = 'auto' | 'none'
export type ContainIntrinsicWidth = 'auto' | 'none'
export type Container = ContainerName | ContainerType
export type ContainerName = 'none' | (string & {})
export type ContainerType = 'normal' | 'size' | 'inline-size' | 'scroll-state'
export type Content =
  | 'normal'
  | 'none'
  | TContentReplacement
  | TContentList
  | (string & {})
  | TCounter
export type ContentVisibility = 'visible' | 'auto' | 'hidden'
export type CounterIncrement = TCounterName | number | 'none'
export type CounterReset =
  | TCounterName
  | number
  | TReversedCounterName
  | number
  | 'none'
export type CounterSet = TCounterName | number | 'none'
export type Cursor = TCursorPredefined
export type Cx = number
export type Cy = number
export type D = 'none' | (string & {})
export type Direction = 'ltr' | 'rtl'
export type Display =
  | TDisplayOutside
  | TDisplayInside
  | TDisplayListitem
  | TDisplayInternal
  | TDisplayBox
  | TDisplayLegacy
export type DominantBaseline =
  | 'auto'
  | 'text-bottom'
  | 'alphabetic'
  | 'ideographic'
  | 'middle'
  | 'central'
  | 'mathematical'
  | 'hanging'
  | 'text-top'
export type EmptyCells = 'show' | 'hide'
export type Fill = TPaint
export type FillOpacity = Opacity
export type FillRule = 'nonzero' | 'evenodd'
export type Filter = 'none' | TFilterValueList
export type Flex = 'none' | FlexGrow | FlexShrink | FlexBasis
export type FlexBasis = 'content' | Width
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type FlexFlow = FlexDirection | FlexWrap
export type FlexGrow = number
export type FlexShrink = number
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
export type Float = 'left' | 'right' | 'none' | 'inline-start' | 'inline-end'
export type FloodColor = TColor
export type FloodOpacity = Opacity
export type Font =
  | FontStyle
  | TFontVariantCss2
  | FontWeight
  | TFontWidthCss3
  | FontSize
  | LineHeight
  | FontFamily
  | TSystemFamilyName
export type FontFamily = TFamilyName | TGenericFamily
export type FontFeatureSettings = 'normal' | TFeatureTagValue
export type FontKerning = 'auto' | 'normal' | 'none'
export type FontLanguageOverride = 'normal' | (string & {})
export type FontOpticalSizing = 'auto' | 'none'
export type FontPalette = 'normal' | 'light' | 'dark' | TPaletteIdentifier
export type FontSize =
  | TAbsoluteSize
  | TRelativeSize
  | TLengthPercentage
  | 'math'
export type FontSizeAdjust =
  | 'none'
  | 'ex-height'
  | 'cap-height'
  | 'ch-width'
  | 'ic-width'
  | 'ic-height'
  | 'from-font'
  | number
export type FontStyle = 'normal' | 'italic' | 'oblique'
export type FontSynthesis =
  | 'none'
  | 'weight'
  | 'style'
  | 'small-caps'
  | 'position'
export type FontSynthesisSmallCaps = 'auto' | 'none'
export type FontSynthesisStyle = 'auto' | 'none'
export type FontSynthesisWeight = 'auto' | 'none'
export type FontVariant =
  | 'normal'
  | 'none'
  | TCommonLigValues
  | TDiscretionaryLigValues
  | THistoricalLigValues
  | TContextualAltValues
  | TFeatureValueName
  | 'historical-forms'
  | 'small-caps'
  | 'all-small-caps'
  | 'petite-caps'
  | 'all-petite-caps'
  | 'unicase'
  | 'titling-caps'
  | TNumericFigureValues
  | TNumericSpacingValues
  | TNumericFractionValues
  | 'ordinal'
  | 'slashed-zero'
  | TEastAsianVariantValues
  | TEastAsianWidthValues
  | 'ruby'
export type FontVariantAlternates =
  | 'normal'
  | TFeatureValueName
  | 'historical-forms'
export type FontVariantCaps =
  | 'normal'
  | 'small-caps'
  | 'all-small-caps'
  | 'petite-caps'
  | 'all-petite-caps'
  | 'unicase'
  | 'titling-caps'
export type FontVariantEastAsian =
  | 'normal'
  | TEastAsianVariantValues
  | TEastAsianWidthValues
  | 'ruby'
export type FontVariantEmoji = 'normal' | 'text' | 'emoji' | 'unicode'
export type FontVariantLigatures =
  | 'normal'
  | 'none'
  | TCommonLigValues
  | TDiscretionaryLigValues
  | THistoricalLigValues
  | TContextualAltValues
export type FontVariantNumeric =
  | 'normal'
  | TNumericFigureValues
  | TNumericSpacingValues
  | TNumericFractionValues
  | 'ordinal'
  | 'slashed-zero'
export type FontVariantPosition = 'normal' | 'sub' | 'super'
export type FontVariationSettings = 'normal' | (string & {}) | number
export type FontWeight = TFontWeightAbsolute | 'bolder' | 'lighter'
export type ForcedColorAdjust = 'auto' | 'none' | 'preserve-parent-color'
export type Gap = RowGap | ColumnGap
export type Grid =
  | GridTemplate
  | GridTemplateRows
  | 'auto-flow'
  | 'dense'
  | GridAutoColumns
  | 'auto-flow'
  | 'dense'
  | GridAutoRows
  | GridTemplateColumns
export type GridArea = TGridLine
export type GridAutoColumns = TTrackSize
export type GridAutoFlow = 'row' | 'column' | 'dense'
export type GridAutoRows = TTrackSize
export type GridColumn = TGridLine
export type GridColumnEnd = TGridLine
export type GridColumnStart = TGridLine
export type GridRow = TGridLine
export type GridRowEnd = TGridLine
export type GridRowStart = TGridLine
export type GridTemplate =
  | 'none'
  | GridTemplateRows
  | GridTemplateColumns
  | TLineNames
  | (string & {})
  | TTrackSize
  | TExplicitTrackList
export type GridTemplateAreas = 'none' | (string & {})
export type GridTemplateColumns =
  | 'none'
  | TTrackList
  | TAutoTrackList
  | 'subgrid'
  | TLineNameList
export type GridTemplateRows =
  | 'none'
  | TTrackList
  | TAutoTrackList
  | 'subgrid'
  | TLineNameList
export type HangingPunctuation =
  | 'none'
  | 'first'
  | 'force-end'
  | 'allow-end'
  | 'last'
export type Height =
  | 'auto'
  | TLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
export type HyphenateCharacter = 'auto' | (string & {})
export type HyphenateLimitChars = 'auto' | number
export type Hyphens = 'none' | 'manual' | 'auto'
export type ImageOrientation = 'from-image' | 'flip'
export type ImageRendering = 'auto' | 'crisp-edges' | 'pixelated' | 'smooth'
export type InitialLetter = 'normal' | number
export type InlineSize = Width
export type Inset = Top
export type InsetBlock = Top
export type InsetBlockEnd = Top
export type InsetBlockStart = Top
export type InsetInline = Top
export type InsetInlineEnd = Top
export type InsetInlineStart = Top
export type Isolation = 'auto' | 'isolate'
export type JustifyContent =
  | 'normal'
  | TContentDistribution
  | TOverflowPosition
  | TContentPosition
  | 'left'
  | 'right'
export type JustifyItems =
  | 'normal'
  | 'stretch'
  | TBaselinePosition
  | TOverflowPosition
  | TSelfPosition
  | 'left'
  | 'right'
  | 'legacy'
  | 'legacy'
  | 'left'
  | 'right'
  | 'center'
  | 'anchor-center'
export type JustifySelf =
  | 'auto'
  | 'normal'
  | 'stretch'
  | TBaselinePosition
  | TOverflowPosition
  | TSelfPosition
  | 'left'
  | 'right'
  | 'anchor-center'
export type Left = 'auto' | TLengthPercentage
export type LetterSpacing = 'normal'
export type LightingColor = TColor
export type LineBreak = 'auto' | 'loose' | 'normal' | 'strict' | 'anywhere'
export type LineClamp = 'none' | number
export type LineHeight = 'normal' | number
export type ListStyle = ListStyleType | ListStylePosition | ListStyleImage
export type ListStyleImage = TImage | 'none'
export type ListStylePosition = 'inside' | 'outside'
export type ListStyleType = TCounterStyle | (string & {}) | 'none'
export type Margin = MarginTop
export type MarginBlock = MarginTop
export type MarginBlockEnd = MarginTop
export type MarginBlockStart = MarginTop
export type MarginBottom = TLengthPercentage | 'auto'
export type MarginInline = MarginTop
export type MarginInlineEnd = MarginTop
export type MarginInlineStart = MarginTop
export type MarginLeft = TLengthPercentage | 'auto'
export type MarginRight = TLengthPercentage | 'auto'
export type MarginTop = TLengthPercentage | 'auto'
export type Marker = 'none'
export type MarkerEnd = 'none'
export type MarkerMid = 'none'
export type MarkerStart = 'none'
export type Mask = TMaskLayer
export type MaskBorder =
  | MaskBorderSource
  | MaskBorderSlice
  | MaskBorderWidth
  | MaskBorderOutset
  | MaskBorderRepeat
  | MaskBorderMode
export type MaskBorderMode = 'luminance' | 'alpha'
export type MaskBorderOutset = number
export type MaskBorderRepeat = 'stretch' | 'repeat' | 'round' | 'space'
export type MaskBorderSlice = TNumberPercentage | 'fill'
export type MaskBorderSource = 'none' | TImage
export type MaskBorderWidth = TLengthPercentage | number | 'auto'
export type MaskClip = TCoordBox | 'no-clip'
export type MaskComposite = TCompositingOperator
export type MaskImage = TMaskReference
export type MaskMode = TMaskingMode
export type MaskOrigin = TCoordBox
export type MaskPosition = TPosition
export type MaskRepeat = TRepeatStyle
export type MaskSize = TBgSize
export type MaskType = 'luminance' | 'alpha'
export type MathDepth = 'auto-add' | number
export type MathStyle = 'normal' | 'compact'
export type MaxBlockSize = MaxWidth
export type MaxHeight =
  | 'none'
  | TLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
export type MaxInlineSize = MaxWidth
export type MaxWidth =
  | 'none'
  | TLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
export type MinBlockSize = MinWidth
export type MinHeight =
  | 'auto'
  | TLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
export type MinInlineSize = MinWidth
export type MinWidth =
  | 'auto'
  | TLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
export type MixBlendMode = TBlendMode | 'plus-darker' | 'plus-lighter'
export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
export type ObjectPosition = TPosition
export type Offset =
  | OffsetPosition
  | OffsetPath
  | OffsetDistance
  | OffsetRotate
  | OffsetAnchor
export type OffsetAnchor = 'auto' | TPosition
export type OffsetDistance = TLengthPercentage
export type OffsetPath = 'none' | TOffsetPath | TCoordBox
export type OffsetPosition = 'normal' | 'auto' | TPosition
export type OffsetRotate = 'auto' | 'reverse'
export type Opacity = TOpacityValue
export type Order = number
export type Orphans = number
export type Outline = OutlineWidth | OutlineStyle | OutlineColor
export type OutlineColor = 'auto' | TColor
export type OutlineOffset = string & {}
export type OutlineStyle = 'auto' | TOutlineLineStyle
export type OutlineWidth = TLineWidth
export type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
export type OverflowAnchor = 'auto' | 'none'
export type OverflowBlock = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
export type OverflowClipMargin = TVisualBox
export type OverflowInline = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
export type OverflowWrap = 'normal' | 'break-word' | 'anywhere'
export type OverflowX = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
export type OverflowY = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
export type OverscrollBehavior = 'contain' | 'none' | 'auto'
export type OverscrollBehaviorBlock = 'contain' | 'none' | 'auto'
export type OverscrollBehaviorInline = 'contain' | 'none' | 'auto'
export type OverscrollBehaviorX = 'contain' | 'none' | 'auto'
export type OverscrollBehaviorY = 'contain' | 'none' | 'auto'
export type Padding = PaddingTop
export type PaddingBlock = PaddingTop
export type PaddingBlockEnd = PaddingTop
export type PaddingBlockStart = PaddingTop
export type PaddingBottom = TLengthPercentage
export type PaddingInline = PaddingTop
export type PaddingInlineEnd = PaddingTop
export type PaddingInlineStart = PaddingTop
export type PaddingLeft = TLengthPercentage
export type PaddingRight = TLengthPercentage
export type PaddingTop = TLengthPercentage
export type Page = 'auto' | (string & {})
export type PaintOrder = 'normal' | 'fill' | 'stroke' | 'markers'
export type Perspective = 'none'
export type PerspectiveOrigin = TPosition
export type PlaceContent = AlignContent | JustifyContent
export type PlaceItems = AlignItems | JustifyItems
export type PlaceSelf = AlignSelf | JustifySelf
export type PointerEvents =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'inherit'
export type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
export type PrintColorAdjust = 'economy' | 'exact'
export type Quotes = 'none' | 'auto' | (string & {})
export type R = number
export type Resize =
  | 'none'
  | 'both'
  | 'horizontal'
  | 'vertical'
  | 'block'
  | 'inline'
export type Right = 'auto' | TLengthPercentage
export type Rotate = 'none' | 'x' | 'y' | 'z' | number
export type RowGap = 'normal' | TLengthPercentage
export type RubyAlign = 'start' | 'center' | 'space-between' | 'space-around'
export type RubyOverhang = 'auto' | 'none'
export type RubyPosition = 'alternate' | 'over' | 'under' | 'inter-character'
export type Rx = number
export type Ry = number
export type Scale = 'none' | number
export type ScrollBehavior = 'auto' | 'smooth'
export type ScrollMargin = string & {}
export type ScrollMarginBlock = string & {}
export type ScrollMarginBlockEnd = string & {}
export type ScrollMarginBlockStart = string & {}
export type ScrollMarginBottom = string & {}
export type ScrollMarginInline = string & {}
export type ScrollMarginInlineEnd = string & {}
export type ScrollMarginInlineStart = string & {}
export type ScrollMarginLeft = string & {}
export type ScrollMarginRight = string & {}
export type ScrollMarginTop = string & {}
export type ScrollPadding = 'auto' | TLengthPercentage
export type ScrollPaddingBlock = 'auto' | TLengthPercentage
export type ScrollPaddingBlockEnd = 'auto' | TLengthPercentage
export type ScrollPaddingBlockStart = 'auto' | TLengthPercentage
export type ScrollPaddingBottom = 'auto' | TLengthPercentage
export type ScrollPaddingInline = 'auto' | TLengthPercentage
export type ScrollPaddingInlineEnd = 'auto' | TLengthPercentage
export type ScrollPaddingInlineStart = 'auto' | TLengthPercentage
export type ScrollPaddingLeft = 'auto' | TLengthPercentage
export type ScrollPaddingRight = 'auto' | TLengthPercentage
export type ScrollPaddingTop = 'auto' | TLengthPercentage
export type ScrollSnapAlign = 'none' | 'start' | 'end' | 'center'
export type ScrollSnapStop = 'normal' | 'always'
export type ScrollSnapType =
  | 'none'
  | 'x'
  | 'y'
  | 'block'
  | 'inline'
  | 'both'
  | 'mandatory'
  | 'proximity'
export type ScrollbarColor = 'auto' | TColor
export type ScrollbarGutter = 'auto' | 'stable' | 'both-edges'
export type ScrollbarWidth = 'auto' | 'thin' | 'none'
export type ShapeImageThreshold = TOpacityValue
export type ShapeMargin = TLengthPercentage
export type ShapeOutside = 'none' | TShapeBox | TBasicShape | TImage
export type ShapeRendering =
  | 'auto'
  | 'optimizeSpeed'
  | 'crispEdges'
  | 'geometricPrecision'
export type StopColor = Color
export type StopOpacity = Opacity
export type Stroke = TPaint
export type StrokeDasharray = 'none' | TDasharray
export type StrokeDashoffset = TLengthPercentage | number
export type StrokeLinecap = 'butt' | 'round' | 'square'
export type StrokeLinejoin = 'miter' | 'miter-clip' | 'round' | 'bevel' | 'arcs'
export type StrokeMiterlimit = number
export type StrokeOpacity = Opacity
export type StrokeWidth = TLengthPercentage | number
export type TabSize = number
export type TableLayout = 'auto' | 'fixed'
export type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent'
export type TextAlignLast =
  | 'auto'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
export type TextAnchor = 'start' | 'middle' | 'end'
export type TextAutospace = 'normal' | 'auto'
export type TextBox = 'normal' | TextBoxTrim | TextBoxEdge
export type TextBoxEdge = 'auto' | TTextEdge
export type TextBoxTrim = 'none' | 'trim-start' | 'trim-end' | 'trim-both'
export type TextCombineUpright = 'none' | 'all' | 'digits' | number
export type TextDecoration =
  | TextDecorationLine
  | TextDecorationStyle
  | TextDecorationColor
  | TextDecorationThickness
export type TextDecorationColor = TColor
export type TextDecorationLine =
  | 'none'
  | 'underline'
  | 'overline'
  | 'line-through'
  | 'blink'
  | 'spelling-error'
  | 'grammar-error'
export type TextDecorationSkipInk = 'auto' | 'all' | 'none'
export type TextDecorationStyle =
  | 'solid'
  | 'double'
  | 'dotted'
  | 'dashed'
  | 'wavy'
export type TextDecorationThickness = 'auto' | 'from-font' | number
export type TextEmphasis = TextEmphasisStyle | TextEmphasisColor
export type TextEmphasisColor = TColor
export type TextEmphasisPosition = 'auto' | 'over' | 'under' | 'right' | 'left'
export type TextEmphasisStyle =
  | 'none'
  | 'filled'
  | 'open'
  | 'dot'
  | 'circle'
  | 'double-circle'
  | 'triangle'
  | 'sesame'
  | (string & {})
export type TextIndent = TLengthPercentage | 'hanging' | 'each-line'
export type TextJustify = 'auto' | 'inter-character' | 'inter-word' | 'none'
export type TextOrientation = 'mixed' | 'upright' | 'sideways'
export type TextOverflow = 'clip' | 'ellipsis' | (string & {})
export type TextRendering =
  | 'auto'
  | 'optimizeSpeed'
  | 'optimizeLegibility'
  | 'geometricPrecision'
export type TextShadow = 'none' | TShadowT
export type TextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana'
  | 'math-auto'
export type TextUnderlineOffset = 'auto' | number
export type TextUnderlinePosition =
  | 'auto'
  | 'from-font'
  | 'under'
  | 'left'
  | 'right'
export type TextWrap = TextWrapMode | TextWrapStyle
export type TextWrapMode = 'wrap' | 'nowrap'
export type TextWrapStyle = 'auto' | 'balance' | 'stable' | 'pretty'
export type Top = 'auto' | TLengthPercentage
export type TouchAction =
  | 'auto'
  | 'none'
  | 'pan-x'
  | 'pan-left'
  | 'pan-right'
  | 'pan-y'
  | 'pan-up'
  | 'pan-down'
  | 'pinch-zoom'
  | 'manipulation'
export type Transform = 'none' | TTransformList
export type TransformBox =
  | 'content-box'
  | 'border-box'
  | 'fill-box'
  | 'stroke-box'
  | 'view-box'
export type TransformOrigin =
  | TLengthPercentage
  | 'left'
  | 'center'
  | 'right'
  | 'top'
  | 'bottom'
  | TLengthPercentage
  | 'left'
  | 'center'
  | 'right'
  | TLengthPercentage
  | 'top'
  | 'center'
  | 'bottom'
export type TransformStyle = 'flat' | 'preserve-3d'
export type Transition = TSingleTransition
export type TransitionBehavior = TTransitionBehaviorValue
export type TransitionDelay = string & {}
export type TransitionDuration = string & {}
export type TransitionProperty = 'none' | TSingleTransitionProperty
export type TransitionTimingFunction = TEasingFunction
export type Translate = 'none' | TLengthPercentage
export type UnicodeBidi =
  | 'normal'
  | 'embed'
  | 'isolate'
  | 'bidi-override'
  | 'isolate-override'
  | 'plaintext'
export type UserSelect = 'auto' | 'text' | 'none' | 'all'
export type VectorEffect =
  | 'none'
  | 'non-scaling-stroke'
  | 'non-scaling-size'
  | 'non-rotation'
  | 'fixed-position'
export type VerticalAlign =
  | 'baseline'
  | 'sub'
  | 'super'
  | 'text-top'
  | 'text-bottom'
  | 'middle'
  | 'top'
  | 'bottom'
  | number
export type ViewTransitionClass = 'none' | (string & {})
export type ViewTransitionName = 'none' | (string & {}) | 'match-element'
export type Visibility = 'visible' | 'hidden' | 'collapse'
export type WhiteSpace =
  | 'normal'
  | 'pre'
  | 'pre-wrap'
  | 'pre-line'
  | WhiteSpaceCollapse
  | TextWrapMode
export type WhiteSpaceCollapse =
  | 'collapse'
  | 'preserve'
  | 'preserve-breaks'
  | 'preserve-spaces'
  | 'break-spaces'
export type Widows = number
export type Width =
  | 'auto'
  | TLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'fit-content'
export type WillChange = 'auto' | TAnimateableFeature
export type WordBreak =
  | 'normal'
  | 'break-all'
  | 'keep-all'
  | 'break-word'
  | 'auto-phrase'
export type WordSpacing = 'normal'
export type WordWrap = 'normal' | 'break-word'
export type WritingMode =
  | 'horizontal-tb'
  | 'vertical-rl'
  | 'vertical-lr'
  | 'sideways-rl'
  | 'sideways-lr'
export type X = number
export type Y = number
export type ZIndex = 'auto' | number
export type Zoom = 'normal' | 'reset' | number
export interface StandardProperties {
  accentColor: AccentColor
  alignContent: AlignContent
  alignItems: AlignItems
  alignSelf: AlignSelf
  alignmentBaseline: AlignmentBaseline
  all: All
  animation: Animation
  animationComposition: AnimationComposition
  animationDelay: AnimationDelay
  animationDirection: AnimationDirection
  animationDuration: AnimationDuration
  animationFillMode: AnimationFillMode
  animationIterationCount: AnimationIterationCount
  animationName: AnimationName
  animationPlayState: AnimationPlayState
  animationTimingFunction: AnimationTimingFunction
  appearance: Appearance
  aspectRatio: AspectRatio
  backdropFilter: BackdropFilter
  backfaceVisibility: BackfaceVisibility
  background: Background
  backgroundAttachment: BackgroundAttachment
  backgroundBlendMode: BackgroundBlendMode
  backgroundClip: BackgroundClip
  backgroundColor: BackgroundColor
  backgroundImage: BackgroundImage
  backgroundOrigin: BackgroundOrigin
  backgroundPosition: BackgroundPosition
  backgroundPositionX: BackgroundPositionX
  backgroundPositionY: BackgroundPositionY
  backgroundRepeat: BackgroundRepeat
  backgroundSize: BackgroundSize
  baselineShift: BaselineShift
  blockSize: BlockSize
  border: Border
  borderBlock: BorderBlock
  borderBlockColor: BorderBlockColor
  borderBlockEnd: BorderBlockEnd
  borderBlockEndColor: BorderBlockEndColor
  borderBlockEndStyle: BorderBlockEndStyle
  borderBlockEndWidth: BorderBlockEndWidth
  borderBlockStart: BorderBlockStart
  borderBlockStartColor: BorderBlockStartColor
  borderBlockStartStyle: BorderBlockStartStyle
  borderBlockStartWidth: BorderBlockStartWidth
  borderBlockStyle: BorderBlockStyle
  borderBlockWidth: BorderBlockWidth
  borderBottom: BorderBottom
  borderBottomColor: BorderBottomColor
  borderBottomLeftRadius: BorderBottomLeftRadius
  borderBottomRightRadius: BorderBottomRightRadius
  borderBottomStyle: BorderBottomStyle
  borderBottomWidth: BorderBottomWidth
  borderCollapse: BorderCollapse
  borderColor: BorderColor
  borderEndEndRadius: BorderEndEndRadius
  borderEndStartRadius: BorderEndStartRadius
  borderImage: BorderImage
  borderImageOutset: BorderImageOutset
  borderImageRepeat: BorderImageRepeat
  borderImageSlice: BorderImageSlice
  borderImageSource: BorderImageSource
  borderImageWidth: BorderImageWidth
  borderInline: BorderInline
  borderInlineColor: BorderInlineColor
  borderInlineEnd: BorderInlineEnd
  borderInlineEndColor: BorderInlineEndColor
  borderInlineEndStyle: BorderInlineEndStyle
  borderInlineEndWidth: BorderInlineEndWidth
  borderInlineStart: BorderInlineStart
  borderInlineStartColor: BorderInlineStartColor
  borderInlineStartStyle: BorderInlineStartStyle
  borderInlineStartWidth: BorderInlineStartWidth
  borderInlineStyle: BorderInlineStyle
  borderInlineWidth: BorderInlineWidth
  borderLeft: BorderLeft
  borderLeftColor: BorderLeftColor
  borderLeftStyle: BorderLeftStyle
  borderLeftWidth: BorderLeftWidth
  borderRadius: BorderRadius
  borderRight: BorderRight
  borderRightColor: BorderRightColor
  borderRightStyle: BorderRightStyle
  borderRightWidth: BorderRightWidth
  borderSpacing: BorderSpacing
  borderStartEndRadius: BorderStartEndRadius
  borderStartStartRadius: BorderStartStartRadius
  borderStyle: BorderStyle
  borderTop: BorderTop
  borderTopColor: BorderTopColor
  borderTopLeftRadius: BorderTopLeftRadius
  borderTopRightRadius: BorderTopRightRadius
  borderTopStyle: BorderTopStyle
  borderTopWidth: BorderTopWidth
  borderWidth: BorderWidth
  bottom: Bottom
  boxDecorationBreak: BoxDecorationBreak
  boxShadow: BoxShadow
  boxSizing: BoxSizing
  breakAfter: BreakAfter
  breakBefore: BreakBefore
  breakInside: BreakInside
  captionSide: CaptionSide
  caret: Caret
  caretColor: CaretColor
  caretShape: CaretShape
  clear: Clear
  clipPath: ClipPath
  clipRule: ClipRule
  color: Color
  colorInterpolationFilters: ColorInterpolationFilters
  colorScheme: ColorScheme
  columnCount: ColumnCount
  columnFill: ColumnFill
  columnGap: ColumnGap
  columnRule: ColumnRule
  columnRuleColor: ColumnRuleColor
  columnRuleStyle: ColumnRuleStyle
  columnRuleWidth: ColumnRuleWidth
  columnSpan: ColumnSpan
  columnWidth: ColumnWidth
  columns: Columns
  contain: Contain
  containIntrinsicBlockSize: ContainIntrinsicBlockSize
  containIntrinsicHeight: ContainIntrinsicHeight
  containIntrinsicInlineSize: ContainIntrinsicInlineSize
  containIntrinsicSize: ContainIntrinsicSize
  containIntrinsicWidth: ContainIntrinsicWidth
  container: Container
  containerName: ContainerName
  containerType: ContainerType
  content: Content
  contentVisibility: ContentVisibility
  counterIncrement: CounterIncrement
  counterReset: CounterReset
  counterSet: CounterSet
  cursor: Cursor
  cx: Cx
  cy: Cy
  d: D
  direction: Direction
  display: Display
  dominantBaseline: DominantBaseline
  emptyCells: EmptyCells
  fill: Fill
  fillOpacity: FillOpacity
  fillRule: FillRule
  filter: Filter
  flex: Flex
  flexBasis: FlexBasis
  flexDirection: FlexDirection
  flexFlow: FlexFlow
  flexGrow: FlexGrow
  flexShrink: FlexShrink
  flexWrap: FlexWrap
  float: Float
  floodColor: FloodColor
  floodOpacity: FloodOpacity
  font: Font
  fontFamily: FontFamily
  fontFeatureSettings: FontFeatureSettings
  fontKerning: FontKerning
  fontLanguageOverride: FontLanguageOverride
  fontOpticalSizing: FontOpticalSizing
  fontPalette: FontPalette
  fontSize: FontSize
  fontSizeAdjust: FontSizeAdjust
  fontStyle: FontStyle
  fontSynthesis: FontSynthesis
  fontSynthesisSmallCaps: FontSynthesisSmallCaps
  fontSynthesisStyle: FontSynthesisStyle
  fontSynthesisWeight: FontSynthesisWeight
  fontVariant: FontVariant
  fontVariantAlternates: FontVariantAlternates
  fontVariantCaps: FontVariantCaps
  fontVariantEastAsian: FontVariantEastAsian
  fontVariantEmoji: FontVariantEmoji
  fontVariantLigatures: FontVariantLigatures
  fontVariantNumeric: FontVariantNumeric
  fontVariantPosition: FontVariantPosition
  fontVariationSettings: FontVariationSettings
  fontWeight: FontWeight
  forcedColorAdjust: ForcedColorAdjust
  gap: Gap
  grid: Grid
  gridArea: GridArea
  gridAutoColumns: GridAutoColumns
  gridAutoFlow: GridAutoFlow
  gridAutoRows: GridAutoRows
  gridColumn: GridColumn
  gridColumnEnd: GridColumnEnd
  gridColumnStart: GridColumnStart
  gridRow: GridRow
  gridRowEnd: GridRowEnd
  gridRowStart: GridRowStart
  gridTemplate: GridTemplate
  gridTemplateAreas: GridTemplateAreas
  gridTemplateColumns: GridTemplateColumns
  gridTemplateRows: GridTemplateRows
  hangingPunctuation: HangingPunctuation
  height: Height
  hyphenateCharacter: HyphenateCharacter
  hyphenateLimitChars: HyphenateLimitChars
  hyphens: Hyphens
  imageOrientation: ImageOrientation
  imageRendering: ImageRendering
  initialLetter: InitialLetter
  inlineSize: InlineSize
  inset: Inset
  insetBlock: InsetBlock
  insetBlockEnd: InsetBlockEnd
  insetBlockStart: InsetBlockStart
  insetInline: InsetInline
  insetInlineEnd: InsetInlineEnd
  insetInlineStart: InsetInlineStart
  isolation: Isolation
  justifyContent: JustifyContent
  justifyItems: JustifyItems
  justifySelf: JustifySelf
  left: Left
  letterSpacing: LetterSpacing
  lightingColor: LightingColor
  lineBreak: LineBreak
  lineClamp: LineClamp
  lineHeight: LineHeight
  listStyle: ListStyle
  listStyleImage: ListStyleImage
  listStylePosition: ListStylePosition
  listStyleType: ListStyleType
  margin: Margin
  marginBlock: MarginBlock
  marginBlockEnd: MarginBlockEnd
  marginBlockStart: MarginBlockStart
  marginBottom: MarginBottom
  marginInline: MarginInline
  marginInlineEnd: MarginInlineEnd
  marginInlineStart: MarginInlineStart
  marginLeft: MarginLeft
  marginRight: MarginRight
  marginTop: MarginTop
  marker: Marker
  markerEnd: MarkerEnd
  markerMid: MarkerMid
  markerStart: MarkerStart
  mask: Mask
  maskBorder: MaskBorder
  maskBorderMode: MaskBorderMode
  maskBorderOutset: MaskBorderOutset
  maskBorderRepeat: MaskBorderRepeat
  maskBorderSlice: MaskBorderSlice
  maskBorderSource: MaskBorderSource
  maskBorderWidth: MaskBorderWidth
  maskClip: MaskClip
  maskComposite: MaskComposite
  maskImage: MaskImage
  maskMode: MaskMode
  maskOrigin: MaskOrigin
  maskPosition: MaskPosition
  maskRepeat: MaskRepeat
  maskSize: MaskSize
  maskType: MaskType
  mathDepth: MathDepth
  mathStyle: MathStyle
  maxBlockSize: MaxBlockSize
  maxHeight: MaxHeight
  maxInlineSize: MaxInlineSize
  maxWidth: MaxWidth
  minBlockSize: MinBlockSize
  minHeight: MinHeight
  minInlineSize: MinInlineSize
  minWidth: MinWidth
  mixBlendMode: MixBlendMode
  objectFit: ObjectFit
  objectPosition: ObjectPosition
  offset: Offset
  offsetAnchor: OffsetAnchor
  offsetDistance: OffsetDistance
  offsetPath: OffsetPath
  offsetPosition: OffsetPosition
  offsetRotate: OffsetRotate
  opacity: Opacity
  order: Order
  orphans: Orphans
  outline: Outline
  outlineColor: OutlineColor
  outlineOffset: OutlineOffset
  outlineStyle: OutlineStyle
  outlineWidth: OutlineWidth
  overflow: Overflow
  overflowAnchor: OverflowAnchor
  overflowBlock: OverflowBlock
  overflowClipMargin: OverflowClipMargin
  overflowInline: OverflowInline
  overflowWrap: OverflowWrap
  overflowX: OverflowX
  overflowY: OverflowY
  overscrollBehavior: OverscrollBehavior
  overscrollBehaviorBlock: OverscrollBehaviorBlock
  overscrollBehaviorInline: OverscrollBehaviorInline
  overscrollBehaviorX: OverscrollBehaviorX
  overscrollBehaviorY: OverscrollBehaviorY
  padding: Padding
  paddingBlock: PaddingBlock
  paddingBlockEnd: PaddingBlockEnd
  paddingBlockStart: PaddingBlockStart
  paddingBottom: PaddingBottom
  paddingInline: PaddingInline
  paddingInlineEnd: PaddingInlineEnd
  paddingInlineStart: PaddingInlineStart
  paddingLeft: PaddingLeft
  paddingRight: PaddingRight
  paddingTop: PaddingTop
  page: Page
  paintOrder: PaintOrder
  perspective: Perspective
  perspectiveOrigin: PerspectiveOrigin
  placeContent: PlaceContent
  placeItems: PlaceItems
  placeSelf: PlaceSelf
  pointerEvents: PointerEvents
  position: Position
  printColorAdjust: PrintColorAdjust
  quotes: Quotes
  r: R
  resize: Resize
  right: Right
  rotate: Rotate
  rowGap: RowGap
  rubyAlign: RubyAlign
  rubyOverhang: RubyOverhang
  rubyPosition: RubyPosition
  rx: Rx
  ry: Ry
  scale: Scale
  scrollBehavior: ScrollBehavior
  scrollMargin: ScrollMargin
  scrollMarginBlock: ScrollMarginBlock
  scrollMarginBlockEnd: ScrollMarginBlockEnd
  scrollMarginBlockStart: ScrollMarginBlockStart
  scrollMarginBottom: ScrollMarginBottom
  scrollMarginInline: ScrollMarginInline
  scrollMarginInlineEnd: ScrollMarginInlineEnd
  scrollMarginInlineStart: ScrollMarginInlineStart
  scrollMarginLeft: ScrollMarginLeft
  scrollMarginRight: ScrollMarginRight
  scrollMarginTop: ScrollMarginTop
  scrollPadding: ScrollPadding
  scrollPaddingBlock: ScrollPaddingBlock
  scrollPaddingBlockEnd: ScrollPaddingBlockEnd
  scrollPaddingBlockStart: ScrollPaddingBlockStart
  scrollPaddingBottom: ScrollPaddingBottom
  scrollPaddingInline: ScrollPaddingInline
  scrollPaddingInlineEnd: ScrollPaddingInlineEnd
  scrollPaddingInlineStart: ScrollPaddingInlineStart
  scrollPaddingLeft: ScrollPaddingLeft
  scrollPaddingRight: ScrollPaddingRight
  scrollPaddingTop: ScrollPaddingTop
  scrollSnapAlign: ScrollSnapAlign
  scrollSnapStop: ScrollSnapStop
  scrollSnapType: ScrollSnapType
  scrollbarColor: ScrollbarColor
  scrollbarGutter: ScrollbarGutter
  scrollbarWidth: ScrollbarWidth
  shapeImageThreshold: ShapeImageThreshold
  shapeMargin: ShapeMargin
  shapeOutside: ShapeOutside
  shapeRendering: ShapeRendering
  stopColor: StopColor
  stopOpacity: StopOpacity
  stroke: Stroke
  strokeDasharray: StrokeDasharray
  strokeDashoffset: StrokeDashoffset
  strokeLinecap: StrokeLinecap
  strokeLinejoin: StrokeLinejoin
  strokeMiterlimit: StrokeMiterlimit
  strokeOpacity: StrokeOpacity
  strokeWidth: StrokeWidth
  tabSize: TabSize
  tableLayout: TableLayout
  textAlign: TextAlign
  textAlignLast: TextAlignLast
  textAnchor: TextAnchor
  textAutospace: TextAutospace
  textBox: TextBox
  textBoxEdge: TextBoxEdge
  textBoxTrim: TextBoxTrim
  textCombineUpright: TextCombineUpright
  textDecoration: TextDecoration
  textDecorationColor: TextDecorationColor
  textDecorationLine: TextDecorationLine
  textDecorationSkipInk: TextDecorationSkipInk
  textDecorationStyle: TextDecorationStyle
  textDecorationThickness: TextDecorationThickness
  textEmphasis: TextEmphasis
  textEmphasisColor: TextEmphasisColor
  textEmphasisPosition: TextEmphasisPosition
  textEmphasisStyle: TextEmphasisStyle
  textIndent: TextIndent
  textJustify: TextJustify
  textOrientation: TextOrientation
  textOverflow: TextOverflow
  textRendering: TextRendering
  textShadow: TextShadow
  textTransform: TextTransform
  textUnderlineOffset: TextUnderlineOffset
  textUnderlinePosition: TextUnderlinePosition
  textWrap: TextWrap
  textWrapMode: TextWrapMode
  textWrapStyle: TextWrapStyle
  top: Top
  touchAction: TouchAction
  transform: Transform
  transformBox: TransformBox
  transformOrigin: TransformOrigin
  transformStyle: TransformStyle
  transition: Transition
  transitionBehavior: TransitionBehavior
  transitionDelay: TransitionDelay
  transitionDuration: TransitionDuration
  transitionProperty: TransitionProperty
  transitionTimingFunction: TransitionTimingFunction
  translate: Translate
  unicodeBidi: UnicodeBidi
  userSelect: UserSelect
  vectorEffect: VectorEffect
  verticalAlign: VerticalAlign
  viewTransitionClass: ViewTransitionClass
  viewTransitionName: ViewTransitionName
  visibility: Visibility
  whiteSpace: WhiteSpace
  whiteSpaceCollapse: WhiteSpaceCollapse
  widows: Widows
  width: Width
  willChange: WillChange
  wordBreak: WordBreak
  wordSpacing: WordSpacing
  wordWrap: WordWrap
  writingMode: WritingMode
  x: X
  y: Y
  zIndex: ZIndex
  zoom: Zoom
}
export type MsAccelerator = 'false' | 'true'
export type MsBlockProgression = 'tb' | 'rl' | 'bt' | 'lr'
export type MsContentZoomChaining = 'none' | 'chained'
export type MsContentZoomLimit = MsContentZoomLimitMin | MsContentZoomLimitMax
export type MsContentZoomLimitMax = number
export type MsContentZoomLimitMin = number
export type MsContentZoomSnap = MsContentZoomSnapType | MsContentZoomSnapPoints
export type MsContentZoomSnapPoints = number
export type MsContentZoomSnapType = 'none' | 'proximity' | 'mandatory'
export type MsContentZooming = 'none' | 'zoom'
export type MsFilter = string & {}
export type MsFlowFrom = 'none' | (string & {})
export type MsFlowInto = 'none' | (string & {})
export type MsGridColumns = 'none' | TTrackList | TAutoTrackList
export type MsGridRows = 'none' | TTrackList | TAutoTrackList
export type MsHighContrastAdjust = 'auto' | 'none'
export type MsHyphenateLimitChars = 'auto' | number
export type MsHyphenateLimitLines = 'no-limit' | number
export type MsHyphenateLimitZone = number
export type MsImeAlign = 'auto' | 'after'
export type MsOverflowStyle =
  | 'auto'
  | 'none'
  | 'scrollbar'
  | '-ms-autohiding-scrollbar'
export type MsScrollChaining = 'chained' | 'none'
export type MsScrollLimit =
  | MsScrollLimitXMin
  | MsScrollLimitYMin
  | MsScrollLimitXMax
  | MsScrollLimitYMax
export type MsScrollLimitXMax = 'auto'
export type MsScrollLimitXMin = string & {}
export type MsScrollLimitYMax = 'auto'
export type MsScrollLimitYMin = string & {}
export type MsScrollRails = 'none' | 'railed'
export type MsScrollSnapPointsX = TLengthPercentage
export type MsScrollSnapPointsY = TLengthPercentage
export type MsScrollSnapType = 'none' | 'proximity' | 'mandatory'
export type MsScrollSnapX = MsScrollSnapType | MsScrollSnapPointsX
export type MsScrollSnapY = MsScrollSnapType | MsScrollSnapPointsY
export type MsScrollTranslation = 'none' | 'vertical-to-horizontal'
export type MsScrollbar3dlightColor = TColor
export type MsScrollbarArrowColor = TColor
export type MsScrollbarBaseColor = TColor
export type MsScrollbarDarkshadowColor = TColor
export type MsScrollbarFaceColor = TColor
export type MsScrollbarHighlightColor = TColor
export type MsScrollbarShadowColor = TColor
export type MsScrollbarTrackColor = TColor
export type MsTextAutospace =
  | 'none'
  | 'ideograph-alpha'
  | 'ideograph-numeric'
  | 'ideograph-parenthesis'
  | 'ideograph-space'
export type MsTouchSelect = 'grippers' | 'none'
export type MsUserSelect = 'none' | 'element' | 'text'
export type MsWrapFlow = 'auto' | 'both' | 'start' | 'end' | 'maximum' | 'clear'
export type MsWrapMargin = string & {}
export type MsWrapThrough = 'wrap' | 'none'
export type MozAppearance =
  | 'none'
  | 'button'
  | 'button-arrow-down'
  | 'button-arrow-next'
  | 'button-arrow-previous'
  | 'button-arrow-up'
  | 'button-bevel'
  | 'button-focus'
  | 'caret'
  | 'checkbox'
  | 'checkbox-container'
  | 'checkbox-label'
  | 'checkmenuitem'
  | 'dualbutton'
  | 'groupbox'
  | 'listbox'
  | 'listitem'
  | 'menuarrow'
  | 'menubar'
  | 'menucheckbox'
  | 'menuimage'
  | 'menuitem'
  | 'menuitemtext'
  | 'menulist'
  | 'menulist-button'
  | 'menulist-text'
  | 'menulist-textfield'
  | 'menupopup'
  | 'menuradio'
  | 'menuseparator'
  | 'meterbar'
  | 'meterchunk'
  | 'progressbar'
  | 'progressbar-vertical'
  | 'progresschunk'
  | 'progresschunk-vertical'
  | 'radio'
  | 'radio-container'
  | 'radio-label'
  | 'radiomenuitem'
  | 'range'
  | 'range-thumb'
  | 'resizer'
  | 'resizerpanel'
  | 'scale-horizontal'
  | 'scalethumbend'
  | 'scalethumb-horizontal'
  | 'scalethumbstart'
  | 'scalethumbtick'
  | 'scalethumb-vertical'
  | 'scale-vertical'
  | 'scrollbarbutton-down'
  | 'scrollbarbutton-left'
  | 'scrollbarbutton-right'
  | 'scrollbarbutton-up'
  | 'scrollbarthumb-horizontal'
  | 'scrollbarthumb-vertical'
  | 'scrollbartrack-horizontal'
  | 'scrollbartrack-vertical'
  | 'searchfield'
  | 'separator'
  | 'sheet'
  | 'spinner'
  | 'spinner-downbutton'
  | 'spinner-textfield'
  | 'spinner-upbutton'
  | 'splitter'
  | 'statusbar'
  | 'statusbarpanel'
  | 'tab'
  | 'tabpanel'
  | 'tabpanels'
  | 'tab-scroll-arrow-back'
  | 'tab-scroll-arrow-forward'
  | 'textfield'
  | 'textfield-multiline'
  | 'toolbar'
  | 'toolbarbutton'
  | 'toolbarbutton-dropdown'
  | 'toolbargripper'
  | 'toolbox'
  | 'tooltip'
  | 'treeheader'
  | 'treeheadercell'
  | 'treeheadersortarrow'
  | 'treeitem'
  | 'treeline'
  | 'treetwisty'
  | 'treetwistyopen'
  | 'treeview'
  | '-moz-mac-unified-toolbar'
  | '-moz-win-borderless-glass'
  | '-moz-win-browsertabbar-toolbox'
  | '-moz-win-communicationstext'
  | '-moz-win-communications-toolbox'
  | '-moz-win-exclude-glass'
  | '-moz-win-glass'
  | '-moz-win-mediatext'
  | '-moz-win-media-toolbox'
  | '-moz-window-button-box'
  | '-moz-window-button-box-maximized'
  | '-moz-window-button-close'
  | '-moz-window-button-maximize'
  | '-moz-window-button-minimize'
  | '-moz-window-button-restore'
  | '-moz-window-frame-bottom'
  | '-moz-window-frame-left'
  | '-moz-window-frame-right'
  | '-moz-window-titlebar'
  | '-moz-window-titlebar-maximized'
export type MozBinding = 'none'
export type MozBorderBottomColors = TColor | 'none'
export type MozBorderLeftColors = TColor | 'none'
export type MozBorderRightColors = TColor | 'none'
export type MozBorderTopColors = TColor | 'none'
export type MozContextProperties =
  | 'none'
  | 'fill'
  | 'fill-opacity'
  | 'stroke'
  | 'stroke-opacity'
export type MozFloatEdge =
  | 'border-box'
  | 'content-box'
  | 'margin-box'
  | 'padding-box'
export type MozForceBrokenImageIcon = '0' | '1'
export type MozOrient = 'inline' | 'block' | 'horizontal' | 'vertical'
export type MozOutlineRadius = TOutlineRadius
export type MozOutlineRadiusBottomleft = TOutlineRadius
export type MozOutlineRadiusBottomright = TOutlineRadius
export type MozOutlineRadiusTopleft = TOutlineRadius
export type MozOutlineRadiusTopright = TOutlineRadius
export type MozStackSizing = 'ignore' | 'stretch-to-fit'
export type MozTextBlink = 'none' | 'blink'
export type MozUserFocus =
  | 'ignore'
  | 'normal'
  | 'select-after'
  | 'select-before'
  | 'select-menu'
  | 'select-same'
  | 'select-all'
  | 'none'
export type MozUserInput = 'auto' | 'none' | 'enabled' | 'disabled'
export type MozUserModify = 'read-only' | 'read-write' | 'write-only'
export type MozWindowDragging = 'drag' | 'no-drag'
export type MozWindowShadow = 'default' | 'menu' | 'tooltip' | 'sheet' | 'none'
export type WebkitAppearance =
  | 'none'
  | 'button'
  | 'button-bevel'
  | 'caret'
  | 'checkbox'
  | 'default-button'
  | 'inner-spin-button'
  | 'listbox'
  | 'listitem'
  | 'media-controls-background'
  | 'media-controls-fullscreen-background'
  | 'media-current-time-display'
  | 'media-enter-fullscreen-button'
  | 'media-exit-fullscreen-button'
  | 'media-fullscreen-button'
  | 'media-mute-button'
  | 'media-overlay-play-button'
  | 'media-play-button'
  | 'media-seek-back-button'
  | 'media-seek-forward-button'
  | 'media-slider'
  | 'media-sliderthumb'
  | 'media-time-remaining-display'
  | 'media-toggle-closed-captions-button'
  | 'media-volume-slider'
  | 'media-volume-slider-container'
  | 'media-volume-sliderthumb'
  | 'menulist'
  | 'menulist-button'
  | 'menulist-text'
  | 'menulist-textfield'
  | 'meter'
  | 'progress-bar'
  | 'progress-bar-value'
  | 'push-button'
  | 'radio'
  | 'searchfield'
  | 'searchfield-cancel-button'
  | 'searchfield-decoration'
  | 'searchfield-results-button'
  | 'searchfield-results-decoration'
  | 'slider-horizontal'
  | 'slider-vertical'
  | 'sliderthumb-horizontal'
  | 'sliderthumb-vertical'
  | 'square-button'
  | 'textarea'
  | 'textfield'
  | '-apple-pay-button'
export type WebkitBorderBefore = BorderWidth | BorderStyle | TColor
export type WebkitBorderBeforeColor = TColor
export type WebkitBorderBeforeStyle = BorderStyle
export type WebkitBorderBeforeWidth = BorderWidth
export type WebkitBoxReflect = 'above' | 'below' | 'right' | 'left' | TImage
export type WebkitLineClamp = 'none' | number
export type WebkitMask =
  | TMaskReference
  | TPosition
  | TBgSize
  | TRepeatStyle
  | TVisualBox
  | 'border'
  | 'padding'
  | 'content'
  | 'text'
  | TVisualBox
  | 'border'
  | 'padding'
  | 'content'
export type WebkitMaskAttachment = TAttachment
export type WebkitMaskClip =
  | TCoordBox
  | 'no-clip'
  | 'border'
  | 'padding'
  | 'content'
  | 'text'
export type WebkitMaskComposite = TCompositeStyle
export type WebkitMaskImage = TMaskReference
export type WebkitMaskOrigin = TCoordBox | 'border' | 'padding' | 'content'
export type WebkitMaskPosition = TPosition
export type WebkitMaskPositionX =
  | TLengthPercentage
  | 'left'
  | 'center'
  | 'right'
export type WebkitMaskPositionY =
  | TLengthPercentage
  | 'top'
  | 'center'
  | 'bottom'
export type WebkitMaskRepeat = TRepeatStyle
export type WebkitMaskRepeatX = 'repeat' | 'no-repeat' | 'space' | 'round'
export type WebkitMaskRepeatY = 'repeat' | 'no-repeat' | 'space' | 'round'
export type WebkitMaskSize = TBgSize
export type WebkitOverflowScrolling = 'auto' | 'touch'
export type WebkitTapHighlightColor = TColor
export type WebkitTextFillColor = TColor
export type WebkitTextStroke = TColor
export type WebkitTextStrokeColor = TColor
export type WebkitTextStrokeWidth = string & {}
export type WebkitTouchCallout = 'default' | 'none'
export type WebkitUserModify =
  | 'read-only'
  | 'read-write'
  | 'read-write-plaintext-only'
export type WebkitUserSelect = 'auto' | 'text' | 'none' | 'all'
export interface VendorProperties {
  MsAccelerator: MsAccelerator
  MsBlockProgression: MsBlockProgression
  MsContentZoomChaining: MsContentZoomChaining
  MsContentZoomLimit: MsContentZoomLimit
  MsContentZoomLimitMax: MsContentZoomLimitMax
  MsContentZoomLimitMin: MsContentZoomLimitMin
  MsContentZoomSnap: MsContentZoomSnap
  MsContentZoomSnapPoints: MsContentZoomSnapPoints
  MsContentZoomSnapType: MsContentZoomSnapType
  MsContentZooming: MsContentZooming
  MsFilter: MsFilter
  MsFlowFrom: MsFlowFrom
  MsFlowInto: MsFlowInto
  MsGridColumns: MsGridColumns
  MsGridRows: MsGridRows
  MsHighContrastAdjust: MsHighContrastAdjust
  MsHyphenateLimitChars: MsHyphenateLimitChars
  MsHyphenateLimitLines: MsHyphenateLimitLines
  MsHyphenateLimitZone: MsHyphenateLimitZone
  MsImeAlign: MsImeAlign
  MsOverflowStyle: MsOverflowStyle
  MsScrollChaining: MsScrollChaining
  MsScrollLimit: MsScrollLimit
  MsScrollLimitXMax: MsScrollLimitXMax
  MsScrollLimitXMin: MsScrollLimitXMin
  MsScrollLimitYMax: MsScrollLimitYMax
  MsScrollLimitYMin: MsScrollLimitYMin
  MsScrollRails: MsScrollRails
  MsScrollSnapPointsX: MsScrollSnapPointsX
  MsScrollSnapPointsY: MsScrollSnapPointsY
  MsScrollSnapType: MsScrollSnapType
  MsScrollSnapX: MsScrollSnapX
  MsScrollSnapY: MsScrollSnapY
  MsScrollTranslation: MsScrollTranslation
  MsScrollbar3dlightColor: MsScrollbar3dlightColor
  MsScrollbarArrowColor: MsScrollbarArrowColor
  MsScrollbarBaseColor: MsScrollbarBaseColor
  MsScrollbarDarkshadowColor: MsScrollbarDarkshadowColor
  MsScrollbarFaceColor: MsScrollbarFaceColor
  MsScrollbarHighlightColor: MsScrollbarHighlightColor
  MsScrollbarShadowColor: MsScrollbarShadowColor
  MsScrollbarTrackColor: MsScrollbarTrackColor
  MsTextAutospace: MsTextAutospace
  MsTouchSelect: MsTouchSelect
  MsUserSelect: MsUserSelect
  MsWrapFlow: MsWrapFlow
  MsWrapMargin: MsWrapMargin
  MsWrapThrough: MsWrapThrough
  MozAppearance: MozAppearance
  MozBinding: MozBinding
  MozBorderBottomColors: MozBorderBottomColors
  MozBorderLeftColors: MozBorderLeftColors
  MozBorderRightColors: MozBorderRightColors
  MozBorderTopColors: MozBorderTopColors
  MozContextProperties: MozContextProperties
  MozFloatEdge: MozFloatEdge
  MozForceBrokenImageIcon: MozForceBrokenImageIcon
  MozOrient: MozOrient
  MozOutlineRadius: MozOutlineRadius
  MozOutlineRadiusBottomleft: MozOutlineRadiusBottomleft
  MozOutlineRadiusBottomright: MozOutlineRadiusBottomright
  MozOutlineRadiusTopleft: MozOutlineRadiusTopleft
  MozOutlineRadiusTopright: MozOutlineRadiusTopright
  MozStackSizing: MozStackSizing
  MozTextBlink: MozTextBlink
  MozUserFocus: MozUserFocus
  MozUserInput: MozUserInput
  MozUserModify: MozUserModify
  MozWindowDragging: MozWindowDragging
  MozWindowShadow: MozWindowShadow
  WebkitAppearance: WebkitAppearance
  WebkitBorderBefore: WebkitBorderBefore
  WebkitBorderBeforeColor: WebkitBorderBeforeColor
  WebkitBorderBeforeStyle: WebkitBorderBeforeStyle
  WebkitBorderBeforeWidth: WebkitBorderBeforeWidth
  WebkitBoxReflect: WebkitBoxReflect
  WebkitLineClamp: WebkitLineClamp
  WebkitMask: WebkitMask
  WebkitMaskAttachment: WebkitMaskAttachment
  WebkitMaskClip: WebkitMaskClip
  WebkitMaskComposite: WebkitMaskComposite
  WebkitMaskImage: WebkitMaskImage
  WebkitMaskOrigin: WebkitMaskOrigin
  WebkitMaskPosition: WebkitMaskPosition
  WebkitMaskPositionX: WebkitMaskPositionX
  WebkitMaskPositionY: WebkitMaskPositionY
  WebkitMaskRepeat: WebkitMaskRepeat
  WebkitMaskRepeatX: WebkitMaskRepeatX
  WebkitMaskRepeatY: WebkitMaskRepeatY
  WebkitMaskSize: WebkitMaskSize
  WebkitOverflowScrolling: WebkitOverflowScrolling
  WebkitTapHighlightColor: WebkitTapHighlightColor
  WebkitTextFillColor: WebkitTextFillColor
  WebkitTextStroke: WebkitTextStroke
  WebkitTextStrokeColor: WebkitTextStrokeColor
  WebkitTextStrokeWidth: WebkitTextStrokeWidth
  WebkitTouchCallout: WebkitTouchCallout
  WebkitUserModify: WebkitUserModify
  WebkitUserSelect: WebkitUserSelect
}
export type TAbsoluteSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'
export type TAlphaValue = number
export type TAnchorName = string & {}
export type TAnchorSide =
  | 'inside'
  | 'outside'
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | number
  | 'center'
export type TAnchorSize =
  | 'width'
  | 'height'
  | 'block'
  | 'inline'
  | 'self-block'
  | 'self-inline'
export type TAnglePercentage = number
export type TAngularColorHint = TAnglePercentage
export type TAngularColorStop = TColor | TColorStopAngle
export type TAngularColorStopList =
  | TAngularColorStop
  | TAngularColorHint
  | TAngularColorStop
export type TAnimateableFeature = 'scroll-position' | 'contents' | (string & {})
export type TAttachment = 'scroll' | 'fixed' | 'local'
export type TAttrMatcher = "'~'" | "'|'" | "'^'" | "'$'" | "'*'" | "'='"
export type TAttrModifier = 'i' | 's'
export type TAttrType = 'raw-string' | 'number'
export type TAttributeSelector =
  | "'['"
  | TWqName
  | "']'"
  | "'['"
  | TWqName
  | TAttrMatcher
  | TAttrModifier
  | "']'"
export type TAutoRepeat =
  | 'auto-fill'
  | 'auto-fit'
  | TLineNames
  | TFixedSize
  | TLineNames
export type TAutoTrackList =
  | TLineNames
  | TFixedSize
  | TFixedRepeat
  | TLineNames
  | TAutoRepeat
export type TAxis = 'block' | 'inline' | 'x' | 'y'
export type TBaselinePosition = 'first' | 'last' | 'baseline'
export type TBasicShape = string & {}
export type TBasicShapeRect = string & {}
export type TBgClip = TVisualBox | 'border-area' | 'text'
export type TBgImage = TImage | 'none'
export type TBgLayer =
  | TBgImage
  | TBgPosition
  | TBgSize
  | TRepeatStyle
  | TAttachment
  | TVisualBox
export type TBgPosition =
  | 'left'
  | 'center'
  | 'right'
  | 'top'
  | 'bottom'
  | TLengthPercentage
  | 'left'
  | 'center'
  | 'right'
  | TLengthPercentage
  | 'top'
  | 'center'
  | 'bottom'
  | TLengthPercentage
  | 'center'
  | 'left'
  | 'right'
  | TLengthPercentage
  | 'center'
  | 'top'
  | 'bottom'
  | TLengthPercentage
export type TBgSize = TLengthPercentage | 'auto' | 'cover' | 'contain'
export type TBlendMode =
  | 'normal'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity'
export type TCalcConstant = 'e' | 'pi' | 'infinity' | '-infinity' | 'NaN'
export type TCalcProduct = TCalcValue | "'*'" | TCalcValue | "'/'" | number
export type TCalcSizeBasis = 'any' | TCalcSum
export type TCalcSum = TCalcProduct | "'+'" | "'-'" | TCalcProduct
export type TCalcValue = number | TCalcConstant | TCalcSum
export type TCfFinalImage = TImage | TColor
export type TCfMixingImage = number | TImage
export type TClassSelector = "'.'"
export type TClipSource = string & {}
export type TColor =
  | TColorBase
  | 'currentColor'
  | TSystemColor
  | TDeprecatedSystemColor
  | keyof CustomColors
export type TColorBase = TColorFunction | TNamedColor | 'transparent'
export type TColorFunction = string & {}
export type TColorInterpolationMethod =
  | 'in'
  | TRectangularColorSpace
  | TPolarColorSpace
  | THueInterpolationMethod
  | TCustomColorSpace
export type TColorStop = TColorStopLength | TColorStopAngle
export type TColorStopAngle = TAnglePercentage
export type TColorStopLength = TLengthPercentage
export type TColorStopList =
  | TLinearColorStop
  | TLinearColorHint
  | TLinearColorStop
export type TColorspaceParams =
  | TCustomParams
  | TPredefinedRgbParams
  | TXyzParams
export type TCombinator = "'>'" | "'+'" | "'~'" | "'||'"
export type TCommonLigValues = 'common-ligatures' | 'no-common-ligatures'
export type TCompatAuto =
  | 'searchfield'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'menulist'
  | 'listbox'
  | 'meter'
  | 'progress-bar'
  | 'button'
export type TCompatSpecial = 'textfield' | 'menulist-button'
export type TComplexSelector =
  | TCompoundSelector
  | TCombinator
  | TCompoundSelector
export type TComplexSelectorList = TComplexSelector
export type TCompositeStyle =
  | 'clear'
  | 'copy'
  | 'source-over'
  | 'source-in'
  | 'source-out'
  | 'source-atop'
  | 'destination-over'
  | 'destination-in'
  | 'destination-out'
  | 'destination-atop'
  | 'xor'
export type TCompositingOperator = 'add' | 'subtract' | 'intersect' | 'exclude'
export type TCompoundSelector =
  | TTypeSelector
  | TSubclassSelector
  | TPseudoElementSelector
  | TPseudoClassSelector
export type TCompoundSelectorList = TCompoundSelector
export type TConicGradientSyntax =
  | 'from'
  | 'at'
  | TPosition
  | TColorInterpolationMethod
  | TAngularColorStopList
export type TContainerCondition = TContainerName | TContainerQuery
export type TContainerName = string & {}
export type TContainerQuery =
  | 'not'
  | TQueryInParens
  | TQueryInParens
  | 'and'
  | TQueryInParens
  | 'or'
  | TQueryInParens
export type TContentDistribution =
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
export type TContentList = (string & {}) | TImage | TQuote | TCounter
export type TContentPosition =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
export type TContentReplacement = TImage
export type TContextualAltValues = 'contextual' | 'no-contextual'
export type TCoordBox = TPaintBox | 'view-box'
export type TCounter = string & {}
export type TCounterName = string & {}
export type TCounterStyle = TCounterStyleName
export type TCounterStyleName = string & {}
export type TCubicBezierEasingFunction =
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
export type TCursorPredefined =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out'
  | 'grab'
  | 'grabbing'
export type TCustomColorSpace = string & {}
export type TCustomParams = (string & {}) | number | 'none'
export type TDasharray = TLengthPercentage | number
export type TDashndashdigitIdent = string & {}
export type TDeprecatedSystemColor =
  | 'ActiveBorder'
  | 'ActiveCaption'
  | 'AppWorkspace'
  | 'Background'
  | 'ButtonHighlight'
  | 'ButtonShadow'
  | 'CaptionText'
  | 'InactiveBorder'
  | 'InactiveCaption'
  | 'InactiveCaptionText'
  | 'InfoBackground'
  | 'InfoText'
  | 'Menu'
  | 'MenuText'
  | 'Scrollbar'
  | 'ThreeDDarkShadow'
  | 'ThreeDFace'
  | 'ThreeDHighlight'
  | 'ThreeDLightShadow'
  | 'ThreeDShadow'
  | 'Window'
  | 'WindowFrame'
  | 'WindowText'
export type TDiscretionaryLigValues =
  | 'discretionary-ligatures'
  | 'no-discretionary-ligatures'
export type TDisplayBox = 'contents' | 'none'
export type TDisplayInside =
  | 'flow'
  | 'flow-root'
  | 'table'
  | 'flex'
  | 'grid'
  | 'ruby'
export type TDisplayInternal =
  | 'table-row-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-caption'
  | 'ruby-base'
  | 'ruby-text'
  | 'ruby-base-container'
  | 'ruby-text-container'
export type TDisplayLegacy =
  | 'inline-block'
  | 'inline-list-item'
  | 'inline-table'
  | 'inline-flex'
  | 'inline-grid'
export type TDisplayListitem =
  | TDisplayOutside
  | 'flow'
  | 'flow-root'
  | 'list-item'
export type TDisplayOutside = 'block' | 'inline' | 'run-in'
export type TEasingFunction =
  | TLinearEasingFunction
  | TCubicBezierEasingFunction
  | TStepEasingFunction
export type TEastAsianVariantValues =
  | 'jis78'
  | 'jis83'
  | 'jis90'
  | 'jis04'
  | 'simplified'
  | 'traditional'
export type TEastAsianWidthValues = 'full-width' | 'proportional-width'
export type TExplicitTrackList = TLineNames | TTrackSize | TLineNames
export type TFamilyName = string & {}
export type TFeatureTagValue = (string & {}) | number | 'on' | 'off'
export type TFeatureValueBlock =
  | TFeatureType
  | "'{'"
  | TFeatureValueDeclarationList
  | "'}'"
export type TFeatureValueBlockList = TFeatureValueBlock
export type TFeatureValueDeclaration = (string & {}) | number
export type TFeatureValueDeclarationList = TFeatureValueDeclaration
export type TFeatureValueName = string & {}
export type TFilterFunction = string & {}
export type TFilterValueList = TFilterFunction
export type TFinalBgLayer =
  | TBgImage
  | TBgPosition
  | TBgSize
  | TRepeatStyle
  | TAttachment
  | TVisualBox
  | BackgroundColor
export type TFixedBreadth = TLengthPercentage
export type TFixedRepeat = number | TLineNames | TFixedSize | TLineNames
export type TFixedSize =
  | TFixedBreadth
  | TFixedBreadth
  | TTrackBreadth
  | TInflexibleBreadth
  | TFixedBreadth
export type TFontStretchAbsolute =
  | 'normal'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded'
  | number
export type TFontVariantCss2 = 'normal' | 'small-caps'
export type TFontWeightAbsolute = 'normal' | 'bold' | number
export type TFontWidthCss3 =
  | 'normal'
  | 'ultra-condensed'
  | 'extra-condensed'
  | 'condensed'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'expanded'
  | 'extra-expanded'
  | 'ultra-expanded'
export type TFormControlIdentifier = 'select'
export type TFrequencyPercentage = number
export type TGenericComplete =
  | 'serif'
  | 'sans-serif'
  | 'system-ui'
  | 'cursive'
  | 'fantasy'
  | 'math'
  | 'monospace'
export type TGeneralEnclosed = string & {}
export type TGenericFamily =
  | TGenericComplete
  | TGenericIncomplete
  | 'emoji'
  | 'fangsong'
export type TGenericIncomplete =
  | 'ui-serif'
  | 'ui-sans-serif'
  | 'ui-monospace'
  | 'ui-rounded'
export type TGeometryBox = TShapeBox | 'fill-box' | 'stroke-box' | 'view-box'
export type TGradient = string & {}
export type TGridLine =
  | 'auto'
  | (string & {})
  | number
  | (string & {})
  | 'span'
  | number
  | (string & {})
export type THistoricalLigValues =
  | 'historical-ligatures'
  | 'no-historical-ligatures'
export type THue = number
export type THueInterpolationMethod =
  | 'shorter'
  | 'longer'
  | 'increasing'
  | 'decreasing'
  | 'hue'
export type TIdSelector = string & {}
export type TImage = TGradient
export type TImageSetOption = TImage | (string & {}) | (string & {})
export type TImageSrc = string & {}
export type TImageTags = 'ltr' | 'rtl'
export type TInflexibleBreadth =
  | TLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'auto'
export type TKeyframeBlock = TKeyframeSelector
export type TKeyframeSelector =
  | 'from'
  | 'to'
  | number
  | TTimelineRangeName
  | number
export type TKeyframesName = string & {}
export type TLayerName = "'.'"
export type TLeaderType = 'dotted' | 'solid' | 'space' | (string & {})
export type TLengthPercentage = number
export type TLineNameList = TLineNames | TNameRepeat
export type TLineNames = "'['" | (string & {}) | "']'"
export type TLineStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
export type TLineWidth = 'thin' | 'medium' | 'thick'
export type TLinearColorHint = TLengthPercentage
export type TLinearColorStop = TColor | TColorStopLength
export type TLinearEasingFunction = 'linear'
export type TLinearGradientSyntax =
  | 'to'
  | TSideOrCorner
  | TColorInterpolationMethod
  | TColorStopList
export type TMaskLayer =
  | TMaskReference
  | TPosition
  | TBgSize
  | TRepeatStyle
  | TGeometryBox
  | TGeometryBox
  | 'no-clip'
  | TCompositingOperator
  | TMaskingMode
export type TMaskPosition =
  | TLengthPercentage
  | 'left'
  | 'center'
  | 'right'
  | TLengthPercentage
  | 'top'
  | 'center'
  | 'bottom'
export type TMaskReference = 'none' | TImage | TMaskSource
export type TMaskSource = string & {}
export type TMaskingMode = 'alpha' | 'luminance' | 'match-source'
export type TMediaAnd = TMediaInParens | 'and' | TMediaInParens
export type TMediaCondition = TMediaNot | TMediaAnd | TMediaOr | TMediaInParens
export type TMediaConditionWithoutOr = TMediaNot | TMediaAnd | TMediaInParens
export type TMediaFeature = TMfPlain | TMfBoolean | TMfRange
export type TMediaInParens = TMediaCondition | TMediaFeature | TGeneralEnclosed
export type TMediaNot = 'not' | TMediaInParens
export type TMediaOr = TMediaInParens | 'or' | TMediaInParens
export type TMediaQuery =
  | TMediaCondition
  | 'not'
  | 'only'
  | TMediaType
  | 'and'
  | TMediaConditionWithoutOr
export type TMediaQueryList = TMediaQuery
export type TMediaType = string & {}
export type TMfBoolean = TMfName
export type TMfName = string & {}
export type TMfPlain = TMfName | TMfValue
export type TMfRange =
  | TMfName
  | "'<'"
  | "'>'"
  | "'='"
  | TMfValue
  | TMfValue
  | "'<'"
  | "'>'"
  | "'='"
  | TMfName
  | TMfValue
  | "'<'"
  | "'='"
  | TMfName
  | TMfValue
  | "'>'"
  | "'='"
  | TMfName
export type TMfValue = number | TRatio
export type TNDimension = string & {}
export type TNameRepeat = number | 'auto-fill' | TLineNames
export type TNamedColor =
  | 'aliceblue'
  | 'antiquewhite'
  | 'aqua'
  | 'aquamarine'
  | 'azure'
  | 'beige'
  | 'bisque'
  | 'black'
  | 'blanchedalmond'
  | 'blue'
  | 'blueviolet'
  | 'brown'
  | 'burlywood'
  | 'cadetblue'
  | 'chartreuse'
  | 'chocolate'
  | 'coral'
  | 'cornflowerblue'
  | 'cornsilk'
  | 'crimson'
  | 'cyan'
  | 'darkblue'
  | 'darkcyan'
  | 'darkgoldenrod'
  | 'darkgray'
  | 'darkgreen'
  | 'darkgrey'
  | 'darkkhaki'
  | 'darkmagenta'
  | 'darkolivegreen'
  | 'darkorange'
  | 'darkorchid'
  | 'darkred'
  | 'darksalmon'
  | 'darkseagreen'
  | 'darkslateblue'
  | 'darkslategray'
  | 'darkslategrey'
  | 'darkturquoise'
  | 'darkviolet'
  | 'deeppink'
  | 'deepskyblue'
  | 'dimgray'
  | 'dimgrey'
  | 'dodgerblue'
  | 'firebrick'
  | 'floralwhite'
  | 'forestgreen'
  | 'fuchsia'
  | 'gainsboro'
  | 'ghostwhite'
  | 'gold'
  | 'goldenrod'
  | 'gray'
  | 'green'
  | 'greenyellow'
  | 'grey'
  | 'honeydew'
  | 'hotpink'
  | 'indianred'
  | 'indigo'
  | 'ivory'
  | 'khaki'
  | 'lavender'
  | 'lavenderblush'
  | 'lawngreen'
  | 'lemonchiffon'
  | 'lightblue'
  | 'lightcoral'
  | 'lightcyan'
  | 'lightgoldenrodyellow'
  | 'lightgray'
  | 'lightgreen'
  | 'lightgrey'
  | 'lightpink'
  | 'lightsalmon'
  | 'lightseagreen'
  | 'lightskyblue'
  | 'lightslategray'
  | 'lightslategrey'
  | 'lightsteelblue'
  | 'lightyellow'
  | 'lime'
  | 'limegreen'
  | 'linen'
  | 'magenta'
  | 'maroon'
  | 'mediumaquamarine'
  | 'mediumblue'
  | 'mediumorchid'
  | 'mediumpurple'
  | 'mediumseagreen'
  | 'mediumslateblue'
  | 'mediumspringgreen'
  | 'mediumturquoise'
  | 'mediumvioletred'
  | 'midnightblue'
  | 'mintcream'
  | 'mistyrose'
  | 'moccasin'
  | 'navajowhite'
  | 'navy'
  | 'oldlace'
  | 'olive'
  | 'olivedrab'
  | 'orange'
  | 'orangered'
  | 'orchid'
  | 'palegoldenrod'
  | 'palegreen'
  | 'paleturquoise'
  | 'palevioletred'
  | 'papayawhip'
  | 'peachpuff'
  | 'peru'
  | 'pink'
  | 'plum'
  | 'powderblue'
  | 'purple'
  | 'rebeccapurple'
  | 'red'
  | 'rosybrown'
  | 'royalblue'
  | 'saddlebrown'
  | 'salmon'
  | 'sandybrown'
  | 'seagreen'
  | 'seashell'
  | 'sienna'
  | 'silver'
  | 'skyblue'
  | 'slateblue'
  | 'slategray'
  | 'slategrey'
  | 'snow'
  | 'springgreen'
  | 'steelblue'
  | 'tan'
  | 'teal'
  | 'thistle'
  | 'tomato'
  | 'turquoise'
  | 'violet'
  | 'wheat'
  | 'white'
  | 'whitesmoke'
  | 'yellow'
  | 'yellowgreen'
export type TNamespacePrefix = string & {}
export type TNdashDimension = string & {}
export type TNdashdigitDimension = string & {}
export type TNdashdigitIdent = string & {}
export type TNsPrefix = "'*'" | "'|'"
export type TNumberPercentage = number
export type TNumericFigureValues = 'lining-nums' | 'oldstyle-nums'
export type TNumericFractionValues = 'diagonal-fractions' | 'stacked-fractions'
export type TNumericSpacingValues = 'proportional-nums' | 'tabular-nums'
export type TOffsetPath = TBasicShape
export type TOpacityValue = number
export type TOutlineLineStyle =
  | 'none'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
export type TOutlineRadius = number
export type TOverflowPosition = 'unsafe' | 'safe'
export type TPageBody = TPageBody | TPageMarginBox | TPageBody
export type TPageMarginBox = TPageMarginBoxType | "'{'" | "'}'"
export type TPageSelector = TPseudoPage
export type TPageSelectorList = TPageSelector
export type TPageSize =
  | 'A5'
  | 'A4'
  | 'A3'
  | 'B5'
  | 'B4'
  | 'JIS-B5'
  | 'JIS-B4'
  | 'letter'
  | 'legal'
  | 'ledger'
export type TPaint =
  | 'none'
  | TColor
  | 'none'
  | TColor
  | 'context-fill'
  | 'context-stroke'
export type TPaintBox = TVisualBox | 'fill-box' | 'stroke-box'
export type TPaletteIdentifier = string & {}
export type TPolarColorSpace = 'hsl' | 'hwb' | 'lch' | 'oklch'
export type TPosition =
  | 'left'
  | 'center'
  | 'right'
  | 'top'
  | 'center'
  | 'bottom'
  | 'left'
  | 'center'
  | 'right'
  | TLengthPercentage
  | 'top'
  | 'center'
  | 'bottom'
  | TLengthPercentage
  | 'left'
  | 'right'
  | TLengthPercentage
  | 'top'
  | 'bottom'
  | TLengthPercentage
export type TPositionArea =
  | 'left'
  | 'center'
  | 'right'
  | 'span-left'
  | 'span-right'
  | 'x-start'
  | 'x-end'
  | 'span-x-start'
  | 'span-x-end'
  | 'x-self-start'
  | 'x-self-end'
  | 'span-x-self-start'
  | 'span-x-self-end'
  | 'span-all'
  | 'top'
  | 'center'
  | 'bottom'
  | 'span-top'
  | 'span-bottom'
  | 'y-start'
  | 'y-end'
  | 'span-y-start'
  | 'span-y-end'
  | 'y-self-start'
  | 'y-self-end'
  | 'span-y-self-start'
  | 'span-y-self-end'
  | 'span-all'
  | 'block-start'
  | 'center'
  | 'block-end'
  | 'span-block-start'
  | 'span-block-end'
  | 'span-all'
  | 'inline-start'
  | 'center'
  | 'inline-end'
  | 'span-inline-start'
  | 'span-inline-end'
  | 'span-all'
  | 'self-block-start'
  | 'center'
  | 'self-block-end'
  | 'span-self-block-start'
  | 'span-self-block-end'
  | 'span-all'
  | 'self-inline-start'
  | 'center'
  | 'self-inline-end'
  | 'span-self-inline-start'
  | 'span-self-inline-end'
  | 'span-all'
  | 'start'
  | 'center'
  | 'end'
  | 'span-start'
  | 'span-end'
  | 'span-all'
  | 'self-start'
  | 'center'
  | 'self-end'
  | 'span-self-start'
  | 'span-self-end'
  | 'span-all'
export type TPredefinedRgb =
  | 'srgb'
  | 'srgb-linear'
  | 'display-p3'
  | 'a98-rgb'
  | 'prophoto-rgb'
  | 'rec2020'
export type TPredefinedRgbParams = TPredefinedRgb | number | 'none'
export type TPseudoClassSelector = "':'" | "':'" | "')'"
export type TPseudoElementSelector = "':'" | TPseudoClassSelector
export type TPseudoPage = 'left' | 'right' | 'first' | 'blank'
export type TQueryInParens =
  | TContainerQuery
  | TSizeFeature
  | TStyleQuery
  | TScrollStateQuery
  | TGeneralEnclosed
export type TQuote =
  | 'open-quote'
  | 'close-quote'
  | 'no-open-quote'
  | 'no-close-quote'
export type TRadialExtent =
  | 'closest-corner'
  | 'closest-side'
  | 'farthest-corner'
  | 'farthest-side'
export type TRadialGradientSyntax =
  | TRadialShape
  | TRadialSize
  | 'at'
  | TPosition
  | TColorInterpolationMethod
  | TColorStopList
export type TRadialShape = 'circle' | 'ellipse'
export type TRadialSize = TRadialExtent | TLengthPercentage
export type TRatio = number
export type TRaySize =
  | 'closest-side'
  | 'closest-corner'
  | 'farthest-side'
  | 'farthest-corner'
  | 'sides'
export type TRectangularColorSpace =
  | 'srgb'
  | 'srgb-linear'
  | 'display-p3'
  | 'a98-rgb'
  | 'prophoto-rgb'
  | 'rec2020'
  | 'lab'
  | 'oklab'
  | 'xyz'
  | 'xyz-d50'
  | 'xyz-d65'
export type TRelativeSelector = TCombinator | TComplexSelector
export type TRelativeSelectorList = TRelativeSelector
export type TRelativeSize = 'larger' | 'smaller'
export type TRepeatStyle =
  | 'repeat-x'
  | 'repeat-y'
  | 'repeat'
  | 'space'
  | 'round'
  | 'no-repeat'
export type TReversedCounterName = TCounterName
export type TRoundingStrategy = 'nearest' | 'up' | 'down' | 'to-zero'
export type TScopeEnd = TSelectorList
export type TScopeStart = TSelectorList
export type TScroller = 'root' | 'nearest' | 'self'
export type TScrollStateFeature = TMediaQueryList
export type TScrollStateInParens =
  | TScrollStateQuery
  | TScrollStateFeature
  | TGeneralEnclosed
export type TScrollStateQuery =
  | 'not'
  | TScrollStateInParens
  | TScrollStateInParens
  | 'and'
  | TScrollStateInParens
  | 'or'
  | TScrollStateInParens
  | TScrollStateFeature
export type TSelectorList = TComplexSelectorList
export type TSelfPosition =
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
export type TShadow = 'inset' | TColor
export type TShadowT = TColor
export type TShape = string & {}
export type TShapeBox = TVisualBox | 'margin-box'
export type TSideOrCorner = 'left' | 'right' | 'top' | 'bottom'
export type TSignedInteger = string & {}
export type TSignlessInteger = string & {}
export type TSingleAnimation =
  | AnimationDuration
  | TEasingFunction
  | AnimationDelay
  | TSingleAnimationIterationCount
  | TSingleAnimationDirection
  | TSingleAnimationFillMode
  | TSingleAnimationPlayState
  | 'none'
  | TKeyframesName
  | TSingleAnimationTimeline
export type TSingleAnimationComposition = 'replace' | 'add' | 'accumulate'
export type TSingleAnimationDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse'
export type TSingleAnimationFillMode =
  | 'none'
  | 'forwards'
  | 'backwards'
  | 'both'
export type TSingleAnimationIterationCount = 'infinite' | number
export type TSingleAnimationPlayState = 'running' | 'paused'
export type TSingleAnimationTimeline = 'auto' | 'none' | (string & {})
export type TSingleTransition =
  | 'none'
  | TSingleTransitionProperty
  | TEasingFunction
  | TTransitionBehaviorValue
export type TSingleTransitionProperty = 'all' | (string & {})
export type TSize =
  | 'closest-side'
  | 'farthest-side'
  | 'closest-corner'
  | 'farthest-corner'
  | TLengthPercentage
export type TSizeFeature = TMediaQueryList
export type TStepPosition =
  | 'jump-start'
  | 'jump-end'
  | 'jump-none'
  | 'jump-both'
  | 'start'
  | 'end'
export type TStepEasingFunction = 'step-start' | 'step-end'
export type TStyleFeature = string & {}
export type TStyleInParens = TStyleQuery | TStyleFeature | TGeneralEnclosed
export type TStyleQuery =
  | 'not'
  | TStyleInParens
  | TStyleInParens
  | 'and'
  | TStyleInParens
  | 'or'
  | TStyleInParens
  | TStyleFeature
export type TSubclassSelector =
  | TIdSelector
  | TClassSelector
  | TAttributeSelector
  | TPseudoClassSelector
export type TSupportsCondition =
  | 'not'
  | TSupportsInParens
  | TSupportsInParens
  | 'and'
  | TSupportsInParens
  | TSupportsInParens
  | 'or'
  | TSupportsInParens
export type TSupportsDecl = string & {}
export type TSupportsFeature = TSupportsDecl | TSupportsSelectorFn
export type TSupportsInParens =
  | TSupportsCondition
  | TSupportsFeature
  | TGeneralEnclosed
export type TSupportsSelectorFn = TComplexSelector
export type TSymbol = (string & {}) | TImage
export type TSymbolsType =
  | 'cyclic'
  | 'numeric'
  | 'alphabetic'
  | 'symbolic'
  | 'fixed'
export type TSystemColor =
  | 'AccentColor'
  | 'AccentColorText'
  | 'ActiveText'
  | 'ButtonBorder'
  | 'ButtonFace'
  | 'ButtonText'
  | 'Canvas'
  | 'CanvasText'
  | 'Field'
  | 'FieldText'
  | 'GrayText'
  | 'Highlight'
  | 'HighlightText'
  | 'LinkText'
  | 'Mark'
  | 'MarkText'
  | 'SelectedItem'
  | 'SelectedItemText'
  | 'VisitedText'
export type TSystemFamilyName =
  | 'caption'
  | 'icon'
  | 'menu'
  | 'message-box'
  | 'small-caption'
  | 'status-bar'
export type TTarget = string & {}
export type TTextEdge =
  | 'text'
  | 'cap'
  | 'ex'
  | 'ideographic'
  | 'ideographic-ink'
  | 'text'
  | 'alphabetic'
  | 'ideographic'
  | 'ideographic-ink'
export type TTimePercentage = number
export type TTimelineRangeName =
  | 'cover'
  | 'contain'
  | 'entry'
  | 'exit'
  | 'entry-crossing'
  | 'exit-crossing'
export type TTrackBreadth =
  | TLengthPercentage
  | 'min-content'
  | 'max-content'
  | 'auto'
export type TTrackList = TLineNames | TTrackSize | TTrackRepeat | TLineNames
export type TTrackRepeat = number | TLineNames | TTrackSize | TLineNames
export type TTrackSize =
  | TTrackBreadth
  | TInflexibleBreadth
  | TTrackBreadth
  | TLengthPercentage
export type TTransformFunction = string & {}
export type TTransformList = TTransformFunction
export type TTransitionBehaviorValue = 'normal' | 'allow-discrete'
export type TTrySize =
  | 'most-width'
  | 'most-height'
  | 'most-block-size'
  | 'most-inline-size'
export type TTryTactic = 'flip-block' | 'flip-inline' | 'flip-start'
export type TTypeOrUnit =
  | 'string'
  | 'color'
  | 'url'
  | 'integer'
  | 'number'
  | 'length'
  | 'angle'
  | 'time'
  | 'frequency'
  | 'cap'
  | 'ch'
  | 'em'
  | 'ex'
  | 'ic'
  | 'lh'
  | 'rlh'
  | 'rem'
  | 'vb'
  | 'vi'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | 'mm'
  | 'Q'
  | 'cm'
  | 'in'
  | 'pt'
  | 'pc'
  | 'px'
  | 'deg'
  | 'grad'
  | 'rad'
  | 'turn'
  | 'ms'
  | 's'
  | 'Hz'
  | 'kHz'
export type TTypeSelector = TWqName | TNsPrefix | "'*'"
export type TViewportLength = 'auto' | TLengthPercentage
export type TVisualBox = 'content-box' | 'padding-box' | 'border-box'
export type TWqName = TNsPrefix
export type TXyz = 'xyz' | 'xyz-d50' | 'xyz-d65'
export type TXyzParams = TXyz | number | 'none'
