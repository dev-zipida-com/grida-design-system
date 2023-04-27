import './tooltip.css'

import React from 'react'
import { AiFillCaretDown, AiFillCaretLeft, AiFillCaretRight, AiFillCaretUp } from 'react-icons/ai'

/**
 * Tooltip 컴포넌트의 props입니다.
 */
export interface TooltipProps {
  /**
   * Tooltip의 제목입니다.
   * Bold가 적용되어있습니다.
   */
  title?: string
  /**
   * Tooltip의 내용입니다.
   * 기본값은 tooltip 입니다.
   */
  content?: string
  /**
   * Tooltip의 배경색입니다.
   * theme보다 우선순위입니다.
   */
  color?: string
  /**
   * Tooltip의 위치 설정입니다.
   * * topRight, top, topLeft, rightTop, right, rightBottom, bottomLeft, bottom, bottomRight, leftTop, left, leftBottom중 하나입니다.
   * 기본값은 top입니다.
   */
  placement:
    | 'topRight'
    | 'top'
    | 'topLeft'
    | 'rightTop'
    | 'right'
    | 'rightBottom'
    | 'bottomLeft'
    | 'bottom'
    | 'bottomRight'
    | 'leftTop'
    | 'left'
    | 'leftBottom'
  /**
   * 대상을 기준으로 한 도구 설명의 위치입니다.
   * top, right, bottom, left 중 하나일 수 있습니다.
   * 기본값은 top입니다.
   */
  isButton?: boolean
  /**
   * Button의 text입니다.
   * 기본값은 Got It 입니다.
   */
  buttonText: string
  /**
   * Tooltip의 테마를 선택할 수 있습니다.
   * color 속성이 없을때 적용됩니다.
   * 기본값은 basic 입니다.
   */
  theme: 'basic' | 'primary' | 'error'
  children?: React.ReactNode
}

type ColorCodeType = {
  [key in 'basic' | 'error' | 'primary']: string
}

/**
 * 간단한 텍스트 팝업 팁입니다.
 *
 * ## 언제 사용하나요?
 * - 마우스를 입력하면 팁이 표시되고 마우스를 놓으면 숨겨집니다. 툴팁은 복잡한 텍스트나 연산을 지원하지 않습니다.
 * - 버튼/텍스트/작업에 대한 설명을 제공합니다. HTML 제목 속성 대신 자주 사용됩니다.
 *
 * ```js
 * import { Tooltip } from "grida";
 * ```
 */
export default function Tooltip({
  title,
  content,
  color,
  placement = 'top',
  isButton = false,
  buttonText = 'Got It',
  theme = 'basic',
  children,
}: TooltipProps) {
  const colorCode: ColorCodeType = {
    basic: '#3F4155',
    error: '#f26460',
    primary: '#8c3eff',
  }

  return (
    <div
      className={`tooltip tooltip-${theme}`}
      style={color ? { backgroundColor: color } : { backgroundColor: colorCode[theme || 'basic'] }}
    >
      {title && <span className="tooltip-title tooltip-text">{title}</span>}
      {content && <span className="tooltip-content tooltip-text">{content}</span>}
      {isButton && (
        <div className="tooltip-button">
          <button className="tooltip-button-section tooltip-text">{buttonText}</button>
        </div>
      )}
      <div className={`tooltip-caret tooltip-caret-${placement}`}>
        {placement === 'top' || placement === 'topRight' || placement === 'topLeft' ? (
          <AiFillCaretDown color={color ? color : colorCode[theme || 'basic']} />
        ) : placement === 'rightTop' || placement === 'right' || placement === 'rightBottom' ? (
          <AiFillCaretLeft color={color ? color : colorCode[theme || 'basic']} />
        ) : placement === 'bottom' || placement === 'bottomLeft' || placement === 'bottomRight' ? (
          <AiFillCaretUp color={color ? color : colorCode[theme || 'basic']} />
        ) : (
          <AiFillCaretRight color={color ? color : colorCode[theme || 'basic']} />
        )}
      </div>
    </div>
  )
}
