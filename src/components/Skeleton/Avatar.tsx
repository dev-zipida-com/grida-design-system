export interface AvatarProps {
  /** 아바타의 크기를 설정합니다. */
  size?: number | 'large' | 'small' | 'default'
  /** 아바타의 모양을 설정합니다. */
  shape?: 'circle' | 'square'
}

const SkeletonAvatar: React.FC<AvatarProps> = ({ shape, size }) => {
  return <span className={`skeleton-avatar ${shape} ${size}`}></span>
}

export default SkeletonAvatar
