import './inputNumber.css'

import React, { useEffect, useRef, useState } from 'react'

/**
 * InputNumber 컴포넌트의 props입니다.
 */
export interface InputNumberProps {
  /**
   * 해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
   * * 기본 값은 false입니다.
   */
  autoFocus?: boolean
  /**
   * Input Number 비활성화 속성입니다.
   * * 기본 값은 false입니다.
   */
  disabled?: boolean
  /**
   * Input Number에 범위를 지정할 수 있습니다.
   * 기본값은 false입니다.
   */
  // range?: boolean
  /**
   * Input Number의 값입니다.
   * range가 false이면 number를 사용합니다.
   * range가 true이면 [number, number]를 사용합니다.
   * * 기본 값은 0 | [0, 0]입니다.
   */
  value?: number
  /**
   * Input Number의 기본값입니다.
   * range가 false이면 number를 사용합니다.
   * range가 true이면 [number, number]를 사용합니다.
   * * 기본 값은 0 | [0, 0]입니다.
   */
  defaultValue?: number
  /**
   * Input Number의 크기를 결정하는 속성입니다.
   * 기본 small입니다.
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Input Number가 값을 단계적으로 적용할 수 있는 세분성입니다.
   * 0보다 커야 하며 (최대 - 최소)로 나눠야 합니다.
   * 기본 값은 1입니다.
   */
  step?: number
  /**
   * Input Number가 슬라이드할 수 있는 최대값 설정하는 속성입니다.
   * 최대값은 Number.MAX_SAFE_INTEGER입니다.
   */
  max?: number
  /**
   * Input Number가 슬라이드할 수 있는 최소값 설정하는 속성입니다.
   * 최소값은 Number.MAX_SAFE_INTEGER입니다.
   */
  min?: number
  /**
   * 사용자가 Input Number 값을 변경할 때 호출되는 콜백 함수입니다.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * 마우스 또는 키보드로 특정 범위 내의 숫자를 입력합니다.
 *
 * ## 언제 사용하나요?
 * - 숫자 값을 제공해야 하는 경우 사용합니다.
 *
 * ```js
 * import { InputNumber } from "grida";
 * ```
 */
export default function InputNumber({
  autoFocus = false,
  disabled = false,
  // range = false,
  value,
  defaultValue = 0,
  size = 'small',
  step = 1,
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  onChange,
}: InputNumberProps) {
  const ref = useRef<HTMLInputElement>(null)
  const plusRef = useRef<HTMLInputElement>(null)
  const [valueState, setValueState] = useState<number>(value ? value : defaultValue)
  const [isDemical, setIsDemical] = useState<boolean>(false)

  useEffect(() => {
    if (!step) return

    const strValue = step.toString() // 숫자 값을 문자열로 변환
    if (strValue.indexOf('.') !== -1) {
      // 소수점이 있는지 여부를 확인setIsDemical
      setIsDemical(true)
    }
  }, [step])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = Number(e.target.value)
    if (numValue > max) return
    setValueState(Number(numValue))
    onChange?.(e)
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
    <div
      className={`input-number input-number-${size} ${disabled ? 'input-number-disabled' : null}`}
    >
      <input
        ref={ref}
        autoFocus={autoFocus}
        type="number"
        value={isDemical ? valueState.toFixed(1) : valueState}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={handleChange}
        className={`input-number-input`}
      />
      <div className="input-number-button">
        <div
          ref={plusRef}
          className={`input-number-button-plus ${
            disabled ? 'input-number-button-plus-disabled' : null
          } ${valueState === max ? 'input-number-button-plus-only-disabled' : null}`}
          onClick={handleButtonPlusClick}
        >
          +
        </div>
        <div
          className={`input-number-button-minus ${
            disabled ? 'input-number-button-minus-disabled' : null
          } ${valueState === min ? 'input-number-button-minus-only-disabled' : null}`}
          onClick={handleButtonMinusClick}
        >
          -
        </div>
      </div>
    </div>
  )
}
