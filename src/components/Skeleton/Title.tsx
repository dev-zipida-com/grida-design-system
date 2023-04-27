import React from 'react'

export interface SkeletonTitleProps {
  style?: React.CSSProperties
  /** 제목의 너비를 설정합니다. */
  width?: string | number | (string | number)[]
}

const SkeletonTitle: React.FC<SkeletonTitleProps> = (props) => {
  const { width, style } = props
  return <h3 className={`skeleton-title`} style={{ width: `${width}`, ...style }} />
}

export default SkeletonTitle
