import './switch.css'

import React, { useState } from 'react'

/**
 * Switch 컴포넌트의 props입니다.
 */
export interface SwitchProps {
  /**
   * 해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
   * * 기본 값은 false입니다.
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
   * 초기 상태 설정 여부를 설정합니다.
   * * 기본 값은 false입니다.
   */
  defaultChecked?: boolean
  /**
   * 스위치 비활성화 속성입니다.
   * * 기본 값은 false입니다.
   */
  disabled?: boolean
  /**
   * 스위치 로딩 상태 속성입니다.
   * * 기본 값은 false입니다.
   */
  loading?: boolean
  /**
   * 스위치의 크기를 선택하는 속성입니다.
   * 옵션 : default, small
   * 기본값은 default입니다.
   */
  size?: 'default' | 'small'
  /**
   * 상태가 선택 취소되었을 때 표시할 콘텐츠입니다.
   */
  unCheckedChildren?: React.ReactNode
  /**
   * 체크된 상태가 변경될 때 트리거입니다.
   */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void
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
export default function Tag({
  autoFocus = false,
  checked = false,
  checkedChildren,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size = 'default',
  unCheckedChildren,
  onChange,
  onClick,
}: SwitchProps) {
  const [isToggle, setToggle] = useState(defaultChecked ? defaultChecked : checked)

  const handleClick = () => {
    setToggle((prev) => !prev)
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={handleClick}
      style={!isToggle ? { background: '#dedede' } : {}}
      className="switch"
    >
      <div
        style={isToggle ? { left: 'calc(100% - 27px)' } : { left: 2 }}
        className="switch-handle"
      />
    </button>
  )
}
