export interface SkeletonButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties
  size?: 'large' | 'small' | 'default'
  shape?: 'circle' | 'square'
  block?: boolean
}

const SkeletonButton: React.FC<SkeletonButtonProps> = ({
  size = 'default',
  shape = 'circle',
  block = false,
  style,
}) => {
  return (
    <div style={style} className={`skeleton-button ${size} ${shape} ${block && 'isBlock'}`}></div>
  )
}

export default SkeletonButton
