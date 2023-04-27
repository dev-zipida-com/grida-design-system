import './timePicker.css'

import React from 'react'

/**
 * TimePicker 컴포넌트의 props입니다.
 */
export interface TimePickerProps {
  /**
   * 해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
   * 기본 값은 false입니다.
   */
  autoFocus?: boolean
  /**
   * TimePicker의 비활성화 속성입니다.
   * 기본 값은 false입니다.
   */
  disabled?: boolean
  /**
   * TimePicker의 시간 간격입니다
   * 기본 값은 1입니다.
   */
  hourStep?: number
  /**
   * TimePicker의 읽기 전용 속성 설정입니다.(터치 장치에서 가상 키보드 방지)
   * 기본 값은 false입니다.
   */
  inputReadOnly?: boolean
  /**
   * TimePicker의 분 간격입니다
   * 기본 값은 1입니다.
   */
  minuteStep?: number
  /**
   * TimePicker의 초 간격입니다
   * 기본 값은 1입니다.
   */
  secondStep?: number
}

/**
 * 입력 상자를 클릭하면 팝업 패널에서 시간을 선택할 수 있습니다.
 *
 * ## 언제 사용하나요?
 * - \<input type="time" /\>의 훌륭한 대안이 될 수 있습니다.
 *
 * ```js
 * import { TimePicker } from "grida";
 * ```
 */
export default function TimePicker({
  autoFocus = false,
  disabled = false,
  hourStep = 1,
  inputReadOnly = false,
  minuteStep = 1,
  secondStep = 1,
}: TimePickerProps) {
  return (
    <input
      type="time"
      autoFocus={autoFocus}
      step={secondStep}
      className={`time-picker ${disabled ? 'time-picker-disabled' : undefined}`}
      readOnly={inputReadOnly}
      disabled={disabled}
    />
  )
}
