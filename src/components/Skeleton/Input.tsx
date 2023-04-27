export interface SkeletonInputProps {
  style?: React.CSSProperties
  size?: 'large' | 'small' | 'default'
  block?: boolean
}

const SkeletonInput: React.FC<SkeletonInputProps> = ({
  size = 'default',
  block = false,
  style,
}) => {
  return <div className={`skeleton-input ${size} ${block && 'isBlock'}`} style={style}></div>
}

export default SkeletonInput
