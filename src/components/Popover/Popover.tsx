import './popover.css'

import React from 'react'

/**
 * Popover 컴포넌트의 props입니다.
 */
export interface PopoverProps {
  /**
   * Popover 텍스트 위치 정렬입니다.
   * left, center, right 중 선택합니다.
   * 기본값은 left 입니다.
   */
  align?: 'left' | 'center' | 'right'
  /**
   * Popover 내용입니다.
   * 기본값은 tooltip 입니다.
   */
  content?: string
  /**
   * Popover 제목입니다.
   * Bold가 적용되어있습니다.
   */
  title?: string
  /**
   * Popover가 동작하는 이벤트를 선택합니다.
   * hover, focus, click이 있습니다.
   * 기본은 hover입니다.
   */
  trigger?: 'hover' | 'focus' | 'click'
  children?: React.ReactNode
}

/**
 * 플로팅 카드는 클릭하거나 마우스를 가져가면 팝업됩니다.
 *
 * ## 언제 사용하나요?
 * - 추가 정보 또는 작업을 제공하는 간단한 팝업 메뉴입니다.
 * - Tooltip과 비교하여 팝오버 카드는 정보 외에도 링크 및 버튼과 같은 작업 요소를 제공할 수 있습니다.
 *
 * ```js
 * import { Popover } from "grida";
 * ```
 */
export default function Popover({
  align = 'left',
  title,
  content,
  trigger = 'hover',
  children,
}: PopoverProps) {
  return (
    <div className={`popover`} style={{ textAlign: align }}>
      {title && (
        <div className="popover-title">
          <span className="popover-title-text">{title}</span>
        </div>
      )}
      {content && (
        <div className="popover-content">
          <span className="popover-content-text">{content}</span>
        </div>
      )}
      {children && <div className="popover-content">{children}</div>}
    </div>
  )
}
