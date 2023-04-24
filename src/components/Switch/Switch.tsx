import './switch.css'

import React, { useState } from 'react'

/**
 * Switch 컴포넌트의 props입니다.
 */
export interface SwitchProps {
  /**
   * 해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
   * 기본 값은 false입니다.
   */
  autoFocus?: boolean
  /**
   * 스위치 선택 여부 확인하는 속성입니다.
   * 기본 값은 false입니다.
   */
  checked?: boolean
  /**
   * 상태 확인 시 표시되는 콘텐츠입니다.
   */
  checkedChildren?: React.ReactNode
  /**
   * 스위치 비활성화 속성입니다.
   * 기본 값은 false입니다.
   */
  disabled?: boolean
  /**
   * 스위치의 크기를 선택하는 속성입니다.
   * 옵션 : small, medium
   * 기본값은 small입니다.
   */
  size?: 'small' | 'medium'
  /**
   * 상태가 선택 취소되었을 때 표시할 콘텐츠입니다.
   */
  unCheckedChildren?: React.ReactNode
  /**
   * Switch 클릭 할 때 트리거입니다.
   */
  onClick?: (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * 전환 선택기입니다.
 *
 * ## 언제 사용하나요?
 * - 두 상태 또는 켜기-끄기 상태 사이의 전환을 표현해야 하는 경우 사용합니다.
 * - 스위치와 체크박스의 차이점은 스위치는 토글할 때 상태 변경을 바로 트리거하는 반면, 체크박스는 일반적으로 제출 작업과 함께 작동해야 하는 상태 표시용으로 사용된다는 점입니다.
 *
 * ```js
 * import { Switch } from "grida";
 * ```
 */
export default function Switch({
  autoFocus = false,
  checked = false,
  checkedChildren,
  unCheckedChildren,
  disabled = false,
  size = 'small',
  onClick,
}: SwitchProps) {
  const [isToggle, setToggle] = useState<boolean>(checked)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setToggle((prev) => !prev)
    onClick?.(isToggle, e)
  }

  return (
    <button
      type="button"
      role="switch"
      autoFocus={autoFocus}
      aria-checked={isToggle}
      onClick={handleClick}
      disabled={disabled}
      className={`switch ${disabled ? 'switch-disabled' : ''} ${
        isToggle ? 'switch-on' : 'switch-off'
      } ${size === 'medium' ? 'switch-size-medium' : ''}`}
    >
      <div
        className={`switch-handle ${isToggle ? 'switch-handle-on' : ''} ${
          size === 'medium' ? 'switch-handle-medium' : ''
        }`}
      />
      <span
        className={`switch-inner ${isToggle ? 'switch-inner-on' : ''} ${
          size === 'medium' ? 'switch-inner-medium' : ''
        }`}
      >
        {isToggle ? checkedChildren : unCheckedChildren}
      </span>
    </button>
  )
}
