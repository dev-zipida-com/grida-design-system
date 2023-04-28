import React from 'react'

type widthUnit = number | string

export interface SkeletonTextBoxProps {
  style?: React.CSSProperties
  /** 문단의 너비를 설정합니다. */
  width?: widthUnit | null | undefined | object
  /** 표시할 문단의 줄 수를 설정합니다. */
  rows?: number
}

const SkeletonTextBox: React.FC<SkeletonTextBoxProps> = ({ style, width, rows = 2 }) => {
  const getWidth = (index: number) => {
    if (Array.isArray(width)) {
      return width[index]
    }

    if (rows - 1 === index) {
      return width
    }
    return null
  }

  const rowList = [...Array(rows)].map((_, index) => {
    return <li key={index} style={{ width: getWidth(index) }} />
  })

  return (
    <ul className={'skeleton-textbox'} style={style}>
      {rowList}
    </ul>
  )
}

export default SkeletonTextBox
