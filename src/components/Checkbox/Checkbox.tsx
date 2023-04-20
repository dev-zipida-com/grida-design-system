import './checkbox.css'

export interface CheckboxProps {
  /** 컴포넌트가 마운트 될 때 포커스를 받는지 여부 */
  autoFocus?: boolean
  /** 체크박스가 선택되어 있는지 여부를 지정합니다. */
  checked?: boolean
  /** 초기 상태를 지정합니다. 체크박스가 선택되어 있는지 여부를 지정합니다. */
  defaultChecked?: boolean
  /** 체크박스를 비활성화하는 경우 */
  disabled?: boolean
  /** 체크박스의 중간 선택 상태 */
  indeterminate?: boolean
  /** 상태가 변경될 때 트리거되는 콜백 함수 */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  children?: React.ReactNode
}

export default function Checkbox({
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  onChange,
  children,
}: CheckboxProps) {
  return (
    <label className="container">
      <input
        id="checkbox"
        type="checkbox"
        className="checkbox"
        autoFocus={autoFocus}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="checkmark">{children}</span>
    </label>
  )
}
