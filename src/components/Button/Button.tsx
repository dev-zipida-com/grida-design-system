import './button.css'

/**
 * Button 컴포넌트의 props입니다.
 */
export interface ButtonProps {
  /** 버튼 너비를 부모 요소의 너비에 맞추는 옵션 */
  block?: boolean
  /* 버튼의 위험 상태를 설정합니다 */
  danger?: boolean
  /* 버튼의 비활성화 상태를 설정합니다 */
  disabled?: boolean
  /* 배경을 투명하게하고 텍스트와 테두리 색상을 반전시킵니다 */
  // ghost?: boolean
  /* 링크 버튼의 리디렉션 URL을 설정합니다 */
  href?: string
  /* 버튼의 원래 HTML 유형을 설정합니다. MDN 참조 */
  htmlType?: 'submit' | 'button' | 'reset'
  /* 버튼의 아이콘 컴포넌트를 설정합니다 */
  icon?: React.ReactNode
  /* 버튼의 로딩 상태를 설정합니다 */
  loading?: boolean | { delay: number }
  /* 버튼 모양을 설정할 수 있습니다 */
  shape?: 'default' | 'circle' | 'round'
  /* 버튼의 크기를 설정합니다 */
  size?: 'large' | 'middle' | 'small'
  /* href가 지정된 경우 target 속성과 동일하게 작동합니다. */
  target?: string
  /* primary, ghost, dashed, link, text, default 중 하나로 설정할 수 있습니다 */
  buttonType?: 'default' | 'primary' | 'ghost' | 'outline' | 'dashed' | 'link' | 'text'
  /* 클릭 이벤트를 처리하기 위한 핸들러를 설정합니다 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
}

/**
 * 버튼 컴포넌트입니다.
 *
 * ```js
 * import { Button } from "grida";
 * ```
 */
export default function Button({
  block = false,
  danger = false,
  disabled = false,
  htmlType = 'button',
  icon,
  shape = 'default',
  size = 'middle',
  buttonType = 'primary',
  onClick,
  children,
  ...restProps
}: ButtonProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      className={`button ${block ? 'w-full' : 'w-fit'} button-${buttonType} button-size-${size} ${
        danger ? 'button-dangerous' : ''
      } button-shape-${shape}`}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
      {...restProps}
    >
      {children || 'Button'} {icon && icon}
    </button>
  )
}
