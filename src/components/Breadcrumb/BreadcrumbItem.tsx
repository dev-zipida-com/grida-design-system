import React from 'react'

export interface BreadcrumbItemProps {
  url?: string
  name?: string
  icon?: React.ReactNode
  index?: number
  isLast?: boolean
  separator?: string
}

export default function BreadcrumbItem({
  url,
  name,
  icon,
  separator,
  index,
  isLast,
}: BreadcrumbItemProps) {
  const separatorDraw = (children: string) => {
    return (
      name && (
        <span aria-hidden={true} className={'breadcrumb-separator'}>
          {children}
        </span>
      )
    )
  }

  return (
    <React.Fragment>
      <li key={index} className={'breadcrumb-item'}>
        <a href={url} className={`breadcrumb-link ${isLast ? 'last' : ''}`}>
          {icon && <span className={'breadcrumb-icon'}>{icon}</span>}
          <span className={'breadcrumb-name'}>{name}</span>
        </a>
      </li>
      {isLast ? '' : separatorDraw(separator || '/')}
    </React.Fragment>
  )
}
