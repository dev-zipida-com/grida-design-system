import './badge.css'

export interface BadgeProps {
  /**
   * 배지 도트 색상을 사용자 정의할 수 있습니다.
   */
  color?: string
  /**
   * 배지에 표시할 숫자입니다.
   */
  count?: React.ReactNode
  /**
   * 숫자 대신 빨간색 도트를 표시할지 여부입니다.
   */
  dot?: boolean
  /**
   * 배지 도트의 위치를 설정합니다.
   */
  offset?: [number, number]
  /**
   * 배지에 표시할 수 있는 최대 숫자입니다.
   */
  overflowCount?: number
  /**
   * 숫자가 0일 때 배지를 표시할지 여부입니다.
   */
  showZero?: boolean
  /**
   * count 속성이 설정되면, 크기는 배지의 크기를 설정합니다.
   */
  size?: 'default' | 'small'
  /**
   * 배지를 상태 점으로 설정합니다.
   */
  status?: 'success' | 'processing' | 'default' | 'error' | 'warning'
  /**
   * 상태가 설정되면, 텍스트는 상태 점의 표시 텍스트를 설정합니다.
   */
  text?: React.ReactNode
  /**
   * 배지 위에 마우스를 올렸을 때 표시할 텍스트입니다.
   */
  title?: string
}

export default function Badge({
  color = '#F26460',
  count = '1',
  dot,
  offset,
  overflowCount,
  showZero,
  size,
  status,
  text,
  title,
}: BadgeProps) {
  return (
    <div className={`badge bg-[${color}]`}>
      <span className={`badge-text`}>{Number(count) > 99 ? `${count}+` : count || ''}</span>
    </div>
  )
}
