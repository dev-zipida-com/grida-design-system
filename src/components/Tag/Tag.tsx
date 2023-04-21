import './tag.css'

import React from 'react'
import {
  AiFillCheckCircle as SuccessIcon,
  AiFillCloseCircle as ErrorIcon,
  AiFillInfoCircle as InfoIcon,
  AiFillWarning as WarningIcon,
  AiOutlineClose as CloseIcon,
  AiOutlineSmile as PrimaryIcon,
} from 'react-icons/ai'

/**
 * Tag 컴포넌트의 props입니다.
 */
export interface TagProps {
  /**
   * Tag를 닫을 수 있는지 여부입니다.
   */
  closable?: boolean
  /**
   * 사용자 정의 닫기 아이콘입니다.
   * closable이 true일때만 사용가능합니다.
   */
  closeIcon?: React.ReactNode
  /**
   * 태그 색상을 지정할 수 있는 속성입니다.
   */
  color?: string
  /**
   * 태그 안 내용을 지정할 수 있는 속성입니다.
   * type 속성보다 우선입니다.
   */
  text?: string
  /**
   * 사용자 정의 아이콘입니다.
   */
  icon?: React.ReactNode
  /**
   * Tag 스타일의 타입입니다.
   * 옵션: default, primary, error, success, warning processing입니다.
   * 기본값은 default입니다.
   */
  type?: 'default' | 'primary' | 'error' | 'success' | 'warning' | 'processing'
  /**
   * Tag가 닫힐 때 호출되는 콜백 함수입니다.
   */
  onClose?: (e: React.MouseEvent) => void
  /**
   * Tag의 크기입니다.
   * 옵션: small, medium, large, xlarge입니다.
   * 기본 값은 small입니다.
   */
  size?: 'small' | 'medium' | 'large'
}

const TAG_TYPE = {
  default: { style: 'tag-default', icon: PrimaryIcon },
  primary: { style: 'tag-primary', icon: PrimaryIcon },
  error: { style: 'tag-error', icon: ErrorIcon },
  success: { style: 'tag-success', icon: SuccessIcon },
  warning: { style: 'tag-warning', icon: WarningIcon },
  processing: { style: 'tag-processing', icon: InfoIcon },
} as const

/**
 * 분류 또는 마크업을 위한 태그입니다.
 *
 * ## 언제 사용하나요?
 * - 차원 또는 속성별로 태그를 지정하는 데 사용할 수 있습니다.
 * - 분류할 때 사용할 수 있습니다.
 *
 * ```js
 * import { Tag } from "grida";
 * ```
 */
export default function Tag({
  closable,
  closeIcon,
  color,
  text,
  icon,
  type = 'default',
  onClose,
  size = 'small',
}: TagProps) {
  const tagType = TAG_TYPE[type]
  const colorAlpha: string = color + '1A'

  const handleClick = (e: React.MouseEvent) => {
    onClose?.(e)
  }

  return (
    <div
      style={color ? { background: colorAlpha } : undefined}
      className={`tag ${tagType.style} ${
        size === 'large' ? 'tag-large' : size === 'medium' ? 'tag-medium' : 'tag-small'
      }`}
    >
      <section className="icon-section">
        {icon &&
          (React.isValidElement(icon) ? (
            React.cloneElement(icon as React.ReactElement, {
              style: { color: color },
              className: 'icon',
            })
          ) : (
            <tagType.icon className="icon" />
          ))}
      </section>
      <section className="tag-text">
        <span style={{ color: color }} className="text">
          {text}
        </span>
      </section>
      <section className="close-section">
        {closable && (
          <button className="cursor-pointer" onClick={handleClick}>
            {React.isValidElement(closeIcon) ? (
              React.cloneElement(closeIcon as React.ReactElement, {
                style: { color: color },
                className: 'icon',
              })
            ) : (
              <CloseIcon style={{ color }} />
            )}
          </button>
        )}
      </section>
    </div>
  )
}
