import './breadcrumb.css'

import BreadcrumbItem from './BreadcrumbItem'

/**
 * Breadcrumb 컴포넌트의 props입니다.
 */
export interface BreadcrumbProps {
  /** Breadcrumb 아이템의 라우팅 스택 정보 */
  items?: items[]
  /** 구분자 모양 */
  separator?: string
}

/**
 * Breadcrumb 컴포넌트 아이템의 props입니다.
 */
export interface items {
  /** 주소 */
  url: string
  /** 이름 */
  name: string
  icon?: React.ReactNode
}

/**
 * Breadcrumb 컴포넌트입니다.
 * - 이동경로는 계층 구조 내에서 현재 위치를 표시합니다.
 * - 계층 구조에서 더 상위의 상태로 돌아갈 수 있습니다.
 *
 * ## 언제 사용하나요?
 * - 시스템에 계층 구조에 두 개 이상의 레이어가 있는 경우.
 * - 사용자에게 현재 위치를 알려야 하는 경우.
 * - 사용자가 상위 레벨로 다시 이동해야 하는 경우.
 *
 * ```js
 * import { Breadcrumb } from "grida";
 * ```
 */
export default function Breadcrumb({ items, separator = '/' }: BreadcrumbProps) {
  return (
    <nav className={'breadcrumb'}>
      <ol className={'breadcrumb-list'}>
        {items?.map((item, index, array) => {
          return (
            <BreadcrumbItem
              {...item}
              separator={separator}
              index={index + 1}
              isLast={array.length - 1 === index}
              key={index}
            />
          )
        })}
      </ol>
    </nav>
  )
}
