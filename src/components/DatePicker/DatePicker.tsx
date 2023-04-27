import './datePicker.css'

import React, { useState } from 'react'

/**
 * DatePicker 컴포넌트의 props입니다.
 */
export interface DatePickerProps {
  picker: 'date' | 'week' | 'month' | 'year'
  style: React.CSSProperties
}

/**
 * DatePicker 컴포넌트입니다.
 * - 날짜를 선택하거나 입력합니다.
 *
 * ## 언제 사용하나요?
 * - 입력 상자를 클릭하면 팝업 달력에서 날짜를 선택할 수 있습니다.
 *
 * ```js
 * import { Skeleton } from 'grida';
 * ```
 */

export default function DatePicker({ style, picker = 'date' }: DatePickerProps) {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div
      className={`date-picker ${isFocus && 'date-picker-focus'}`}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    >
      <input className={'picker-input'} type={picker} style={style} />
    </div>
  )
}
