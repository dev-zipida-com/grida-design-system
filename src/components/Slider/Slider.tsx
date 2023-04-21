import './slider.css'

import React, { useRef, useState } from 'react'

/**
 * Slider 컴포넌트의 props입니다.
 */
export interface SliderProps {
  /**
   * 해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
   * * 기본 값은 false입니다.
   */
  autoFocus?: boolean
  /**
   * 슬라이더 비활성화 속성입니다.
   * * 기본 값은 false입니다.
   */
  disabled?: boolean
  /**
   * 슬라이더에 범위를 지정할 수 있습니다.
   * 기본값은 false입니다.
   */
  // range?: boolean
  /**
   * 슬라이더의 값입니다.
   * range가 false이면 number를 사용합니다.
   * range가 true이면 [number, number]를 사용합니다.
   * * 기본 값은 0 | [0, 0]입니다.
   */
  value?: number
  /**
   * 슬라이더의 기본값입니다.
   * range가 false이면 number를 사용합니다.
   * range가 true이면 [number, number]를 사용합니다.
   * * 기본 값은 0 | [0, 0]입니다.
   */
  defaultValue?: number
  /**
   * 슬라이더가 값을 단계적으로 적용할 수 있는 세분성입니다.
   * 0보다 커야 하며 (최대 - 최소)로 나눠야 합니다.
   * 기본 값은 1입니다.
   */
  step?: number
  /**
   * 슬라이더가 슬라이드할 수 있는 최대값 설정하는 속성입니다.
   * 최대값은 100입니다.
   */
  max?: number
  /**
   * 슬라이더가 슬라이드할 수 있는 최소값 설정하는 속성입니다.
   * 최소값은 0입니다.
   */
  min?: number
  /**
   * 슬라이더 오른쪽에 숫자를 넣을 수 있는 input박스가 제공됩니다.
   * 기본값은 false입니다.
   */
  inputNumber?: boolean
  /**
   * 슬라이더가 구성 요소를 리버스로 표현합니다.
   * 기본값은 false입니다.
   */
  reverse?: boolean
  /**
   * 슬라이더가 수직으로 설정됩니다.
   * 기본값은 false입니다.
   */
  vertical?: boolean
  /**
   * 사용자가 슬라이더 값을 변경할 때 호출되는 콜백 함수입니다.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * 현재 값과 간격을 범위로 표시하는 슬라이더 컴포넌트입니다.
 *
 * ## 언제 사용하나요?
 * - 범위의 값을 입력합니다.
 *
 * ```js
 * import { Slider } from "grida";
 * ```
 */
export default function Slider({
  autoFocus = false,
  disabled = false,
  // range = false,
  value,
  defaultValue = 0,
  step = 1,
  max = 100,
  min = 0,
  inputNumber = false,
  reverse = false,
  vertical = false,
  onChange,
}: SliderProps) {
  const ref = useRef<HTMLInputElement>(null)
  const plusRef = useRef<HTMLInputElement>(null)
  const [valueState, setValueState] = useState<number>(value ? value : defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleValueChange(e)
    onChange?.(e)
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = Number(e.target.value)
    if (numValue > max) return
    setValueState(Number(numValue))
  }

  const handleButtonPlusClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    ref.current?.focus()
    if (valueState >= max) return
    setValueState((prev) => prev + step)
  }

  const handleButtonMinusClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    ref.current?.focus()
    if (valueState <= min) return
    setValueState((prev) => prev - step)
  }

  return (
    <div className="slider">
      <input
        type="range"
        disabled={disabled}
        autoFocus={autoFocus}
        min={min}
        max={max}
        step={step}
        value={valueState.toFixed(1)}
        defaultValue={defaultValue}
        onChange={handleChange}
        className={`slider-range ${disabled ? 'slider-range-disabled' : ''} ${
          vertical ? 'slider-range-vertical' : ''
        }`}
      />
      {inputNumber && (
        <div className={`slider-number`}>
          <input
            ref={ref}
            type="number"
            value={valueState.toFixed(1)}
            defaultValue={defaultValue}
            min={min}
            max={max}
            step={step}
            onChange={handleValueChange}
            className={`slider-number-input`}
          />
          <div className="slider-number-button">
            <div
              ref={plusRef}
              className="slider-number-button-plus"
              onClick={handleButtonPlusClick}
            >
              +
            </div>
            <div className="slider-number-button-minus" onClick={handleButtonMinusClick}>
              -
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
