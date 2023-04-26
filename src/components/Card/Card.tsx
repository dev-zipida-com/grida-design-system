import './card.css'

/**
 * Card 컴포넌트의 props입니다.
 */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 액션 목록은 카드 하단에 표시됩니다 */
  actions?: React.ReactNode[]
  /** 카드 주위의 테두리 렌더링을 토글합니다 **/
  bordered?: boolean
  /** 카드 커버 */
  cover?: React.ReactNode
  /** 카드의 오른쪽 상단에 렌더링할 콘텐츠 */
  extra?: React.ReactNode
  /** 카드를 가리키면 들어올림 */
  hoverable?: boolean
  /** 카드의 내용을 불러오는 동안 로딩 표시기를 표시합니다. */
  loading?: boolean
  /** 카드의 크기 */
  size?: 'default' | 'small'
  /** 카드 제목 */
  title?: React.ReactNode
  /** 카드를 Container로 사용 시 Content 영역에 일반 컴포넌트들을 추가할 수 있습니다. */
  children?: React.ReactNode
}

/**
 * Card 컴포넌트입니다.
 * - 간단한 직사각형 컨테이너.
 *
 * ## 언제 사용하나요?
 * - 카드는 단일 주제와 관련된 콘텐츠를 표시하는 데 사용할 수 있습니다.
 * - 콘텐츠는 다양한 유형과 크기의 여러 요소로 구성될 수 있습니다.
 *
 * ```js
 * import { Card } from 'grida';
 * ```
 */
export default function Card({
  actions,
  bordered = true,
  cover,
  extra,
  hoverable,
  // loading = true,
  size,
  title,
  children,
  ...restProps
}: CardProps) {
  return (
    <div
      className={`card ${bordered && 'card-border'} ${size && `card-${size}`} ${
        hoverable && `card-hoverable`
      }`}
      {...restProps}
    >
      {title && (
        <div className={'card-head'}>
          <div className={'card-head-title'}>{title}</div>
          {extra && <div className={'card-head-extra'}>{extra}</div>}
        </div>
      )}
      <div className={`card-body ${cover && 'cover'}`}>{cover ? cover : children && children}</div>
      {actions && <div className={'card-actions'}>{actions}</div>}
    </div>
  )
}
