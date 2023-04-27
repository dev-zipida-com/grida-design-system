import './skeleton.css'

import SkeletonAvatar, { type AvatarProps } from './Avatar'
import SkeletonButton from './Button'
import SkeletonImage from './Image'
import SkeletonInput from './Input'
import SkeletonTextBox, { type SkeletonTextBoxProps } from './TextBox'
import SkeletonTitle, { type SkeletonTitleProps } from './Title'

type SkeletonAvatarProps = Omit<AvatarProps, 'active'>

/**
 * Skeleton 컴포넌트의 props입니다.
 */
export interface SkeletonProps {
  /** 애니메이션 효과를 보여줍니다. */
  active?: boolean
  /** 아바타 플레이스홀더를 보여줍니다. */
  avatar?: SkeletonAvatarProps | boolean
  /** true일 때 스켈레톤을 표시합니다. */
  loading?: boolean
  /** 문단 플레이스홀더를 보여줍니다. */
  textbox?: SkeletonTextBoxProps | boolean
  /** 제목 플레이스홀더를 보여줍니다. */
  title?: SkeletonTitleProps | boolean
  /** 스타일을 지정할 수 있습니다. */
  style?: React.CSSProperties
  children?: React.ReactNode
}

/**
 * Skeleton 컴포넌트입니다.
 * - 콘텐츠가 로드될 때까지 기다리거나 아직 존재하지 않는 콘텐츠를 시각화할 때 플레이스홀더를 제공합니다.
 *
 * ## 언제 사용하나요?
 * - 리소스를 로드하는 데 오랜 시간이 필요한 경우.
 * - 목록이나 카드와 같이 컴포넌트에 많은 정보가 포함된 경우.
 * - 데이터를 처음 로드할 때만 작동합니다.
 * - 어떤 상황에서도 Spin으로 대체할 수 있지만 더 나은 사용자 경험을 제공할 수 있습니다.
 *
 * ```js
 * import { Skeleton } from 'grida';
 * ```
 */

function getComponentProps<T>(prop?: T | boolean): T | object {
  if (prop && typeof prop === 'object') {
    return prop
  }
  return {}
}

function getAvatarBasicProps(hasTitle: boolean, hasTextBox: boolean): SkeletonAvatarProps {
  if (hasTitle && !hasTextBox) {
    // Square avatar
    return { size: 'large', shape: 'square' }
  }

  return { size: 'large', shape: 'circle' }
}

function getTitleBasicProps(hasAvatar: boolean, hasTextBox: boolean): SkeletonTitleProps {
  if (!hasAvatar && hasTextBox) {
    return { width: '38%' }
  }

  if (hasAvatar && hasTextBox) {
    return { width: '50%' }
  }

  return {}
}

function getTextBoxBasicProps(hasAvatar: boolean, hasTitle: boolean): SkeletonTextBoxProps {
  const basicProps: SkeletonTextBoxProps = {}

  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%'
  }

  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3
  } else {
    basicProps.rows = 2
  }

  return basicProps
}

type CompoundedComponent = {
  Button: typeof SkeletonButton
  Avatar: typeof SkeletonAvatar
  Input: typeof SkeletonInput
  Image: typeof SkeletonImage
  TextBox: typeof SkeletonTextBox
  Title: typeof SkeletonTitle
}

const Skeleton: React.FC<SkeletonProps> & CompoundedComponent = (props) => {
  const {
    active = true,
    avatar = false,
    loading,
    textbox = true,
    title = true,
    children,
    style,
  } = props

  if (loading) {
    const hasAvatar = !!avatar
    const hasTitle = !!title
    const hasTextBox = !!textbox

    // Avatar
    let avatarNode: React.ReactNode
    if (hasAvatar) {
      const avatarProps: SkeletonAvatarProps = {
        ...getAvatarBasicProps(hasTitle, hasTextBox),
        ...getComponentProps(avatar),
      }

      avatarNode = (
        <div className="skeleton-header">
          <SkeletonAvatar {...avatarProps} />
        </div>
      )
    }

    let contentNode: React.ReactNode
    // Title
    if (hasTitle || hasTextBox) {
      let $title: React.ReactNode
      if (hasTitle) {
        const titleProps: SkeletonTitleProps = {
          ...getTitleBasicProps(hasAvatar, hasTextBox),
          ...getComponentProps(title),
        }

        $title = <SkeletonTitle {...titleProps} />
      }

      // TextBox
      let textBoxNode: React.ReactNode
      if (hasTextBox) {
        const textBoxProps: SkeletonTextBoxProps = {
          ...getTextBoxBasicProps(hasAvatar, hasTitle),
          ...getComponentProps(textbox),
        }
        textBoxNode = <SkeletonTextBox {...textBoxProps} />
      }

      contentNode = (
        <div className="skeleton-content">
          {$title}
          {textBoxNode}
        </div>
      )

      return (
        <div className={`skeleton ${active && 'skeleton-active'}`} style={style}>
          {avatarNode}
          {contentNode}
        </div>
      )
    }
  }

  return typeof children !== 'undefined' ? (
    <div className={`skeleton ${active && 'skeleton-active'}`} style={style}>
      {children}
    </div>
  ) : null
}

Skeleton.Avatar = SkeletonAvatar
Skeleton.Button = SkeletonButton
Skeleton.Image = SkeletonImage
Skeleton.Input = SkeletonInput
Skeleton.TextBox = SkeletonTextBox
Skeleton.Title = SkeletonTitle

export default Skeleton
